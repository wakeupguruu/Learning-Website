import os
import jwt
import datetime
from rest_framework.views import APIView
from rest_framework.generics import ListAPIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework import status
from rest_framework.status import HTTP_200_OK, HTTP_201_CREATED
from django.shortcuts import get_object_or_404
from .models import Question, Progress, UserNote, RevisionSheet, TopicCompletion, UserProfile
from .serializers import (
    QuestionSerializer,
    LoginSerializer,
    RegisterSerializer,
    ProgressSerializer,
    UserNoteSerializer,
    RevisionSheetSerializer,
    UserProfileSerializer,
    AuthenticationFailed,
)
from rest_framework.exceptions import AuthenticationFailed
from django.contrib.auth.models import User
from django.conf import settings
from rest_framework import generics
from django.core.mail import send_mail
from django.contrib.auth import authenticate
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.permissions import AllowAny
from rest_framework.exceptions import NotFound
from rest_framework_simplejwt.authentication import JWTAuthentication  


SECRET_KEY = settings.JWT_SECRET


from django.contrib.auth.models import User

User._meta.get_field('email')._unique = True



# Register User View
class RegisterView(APIView):

    permission_classes = [AllowAny] 
    def post(self, request):
        serializer = RegisterSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'message': 'User registered successfully'}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class LoginView(APIView):

    permission_classes = [AllowAny] 
    def post(self, request):
        serializer = LoginSerializer(data=request.data)
        if serializer.is_valid():
            email = serializer.validated_data['email']
            password = serializer.validated_data['password']
            
            # Find the user by email
            try:
                user = User.objects.get(email=email)
            except User.DoesNotExist:
                return Response({'error': 'Invalid email or password'}, status=status.HTTP_401_UNAUTHORIZED)
            
            # Authenticate the user
            if user.check_password(password):
                refresh = RefreshToken.for_user(user)
                return Response({
                    'refresh': str(refresh),
                    'access': str(refresh.access_token)
                }, status=status.HTTP_200_OK)
            else:
                return Response({'error': 'Invalid email or password'}, status=status.HTTP_401_UNAUTHORIZED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)




# Logout View (To clear the JWT cookie)
class LogoutView(APIView):
    def post(self, request):
        response = Response()
        # In case you also want to clear cookies, you can use response.delete_cookie('jwt')
        response.data = {
            'message': 'Logout successful'
        }
        return response


# Forgot Password View (To handle password reset requests)
# Forgot Password View (To handle password reset requests)

class ForgotPasswordView(APIView):
    def post(self, request):
        email = request.data.get('email')

        if not email:
            raise AuthenticationFailed("Email is required.")

        # Check if the user exists
        user = User.objects.filter(email=email).first()

        if user is None:
            raise AuthenticationFailed("User with this email does not exist.")

        # Generate a reset token (valid for 15 minutes)
        reset_payload = {
            'id': user.id,
            'exp': timezone.now() + datetime.timedelta(minutes=15),  # Use timezone.now() for better handling
            'iat': timezone.now()
        }
        reset_token = jwt.encode(reset_payload, settings.SECRET_KEY, algorithm='HS256')

        # Create a password reset URL
        reset_url = f"http://localhost:3000/reset-password/{reset_token}"

        # Send the reset email
        send_mail(
            subject="Password Reset Request",
            message=f"Click the link to reset your password: {reset_url}",
            from_email="vyasguru44@gmail.com",  # Replace with a valid email configured in your Django settings
            recipient_list=[email]
        )

        return Response({"message": "Password reset link sent to your email."})
        
# Reset Password View (To reset the user's password)
class ResetPasswordView(APIView):
    def post(self, request):
        token = request.data.get('token')
        new_password = request.data.get('new_password')

        if not token or not new_password:
            raise AuthenticationFailed("Token and new password are required.")

        try:
            # Decode the reset token
            payload = jwt.decode(token, SECRET_KEY, algorithms=['HS256'])
            user = User.objects.get(id=payload['id'])
        except jwt.ExpiredSignatureError:
            raise AuthenticationFailed("Reset token has expired.")
        except jwt.InvalidTokenError:
            raise AuthenticationFailed("Invalid reset token.")

        # Update the user's password
        user.set_password(new_password)
        user.save()

        return Response({"message": "Password reset successful."})


# Question List View (For getting the list of questions)
class QuestionListView(ListAPIView):
    serializer_class = QuestionSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        topic = self.request.query_params.get('topic')
        difficulty = self.request.query_params.get('difficulty')
        queryset = Question.objects.all()

        if topic:
            queryset = queryset.filter(topic=topic)
        if difficulty:
            queryset = queryset.filter(difficulty_level=difficulty)

        return queryset


# Toggle Completion View (For toggling completion status of a question)
class ToggleCompletionView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request, question_id):
        user = request.user
        question = get_object_or_404(Question, id=question_id)
        progress, _ = Progress.objects.get_or_create(user=user, question=question)
        progress.completed = not progress.completed
        progress.save()
        return Response({"completed": progress.completed}, status=HTTP_200_OK)


# User Note View (For adding user notes to a question)
class UserNoteView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request, question_id):
        user = request.user
        question = get_object_or_404(Question, id=question_id)
        note_text = request.data.get("note")
        note, _ = UserNote.objects.get_or_create(user=user, question=question)
        note.note = note_text
        note.save()

        serializer = UserNoteSerializer(note)
        return Response(serializer.data, status=HTTP_200_OK)


# Toggle Revision View (For toggling revision status of a question)
class ToggleRevisionView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request, question_id):
        user = request.user
        question = get_object_or_404(Question, id=question_id)
        revision, _ = RevisionSheet.objects.get_or_create(user=user, question=question)
        revision.starred = not revision.starred
        revision.save()
        progress, _ = Progress.objects.get_or_create(user=user, question=question)
        progress.for_revision = not  progress.for_revision 
        progress.save()
        return Response({"starred": revision.starred, "for_revision" : progress.for_revision}, status=HTTP_200_OK)
        
# User Profile View (To get user profile data)
class UserProfileView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):

        try:
            user_profile = UserProfile.objects.get(user=request.user)
            serializer = UserProfileSerializer(user_profile, context={'request': request})
            return Response(serializer.data, status=HTTP_200_OK)
        
        except UserProfile.DoesNotExist:
            raise NotFound("UserProfile for the current user does not exist.")


# Completed Topics View (To get the list of completed topics for the user)
class CompletedTopicsView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        user = request.user
        completed_topics = [
            topic
            for topic in Question.objects.values_list('topic', flat=True).distinct()
            if Progress.objects.filter(user=user, question__topic=topic, completed=True).count()
            == Question.objects.filter(topic=topic).count()
        ]
        return Response({"completed_topics": completed_topics}, status=HTTP_200_OK)



# Topic Progression View (To get the progression status of a topic for a user)
class TopicProgressView(APIView):
    permission_classes = [IsAuthenticated]
    authentication_classes = [JWTAuthentication] 

    def get(self, request, topic):
        user = request.user
        
        
        total_questions = Question.objects.filter(topic=topic).count()
        solved_questions = Progress.objects.filter(user=user, question__topic=topic, completed=True).count()

        data = {
            "topic": topic,
            "total_questions": total_questions,
            "solved_questions": solved_questions,
            "remaining_questions": total_questions - solved_questions,
            "completion_percentage": (solved_questions / total_questions) * 100 if total_questions else 0,
        }
        return Response(data, status=HTTP_200_OK)

class AllTopicsProgressView(APIView):
    permission_classes = [IsAuthenticated]
    authentication_classes = [JWTAuthentication]

    def get(self, request):
        user = request.user

        # Retrieve all topics
        topics = Question.objects.values_list('topic', flat=True).distinct()

        # Prepare progress data for each topic
        all_topics_progress = []
        for topic in topics:
            total_questions = Question.objects.filter(topic=topic).count()
            solved_questions = Progress.objects.filter(user=user, question__topic=topic, completed=True).count()

            all_topics_progress.append({
                "topic": topic,
                "total_questions": total_questions,
                "solved_questions": solved_questions,
                "remaining_questions": total_questions - solved_questions,
                "completion_percentage": (solved_questions / total_questions) * 100 if total_questions else 0,
            })

        return Response(all_topics_progress, status=HTTP_200_OK)


class UserNotesView(ListAPIView):
    serializer_class = UserNoteSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user

        # Filter notes for the authenticated user
        queryset = UserNote.objects.filter(user=user)

        if not queryset.exists():
            raise NotFound("No notes found.")

        return queryset