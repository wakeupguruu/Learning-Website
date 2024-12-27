from rest_framework import serializers
from .models import Question, Progress, UserNote, RevisionSheet, TopicCompletion, UserProfile
from django.conf import settings
from django.contrib.auth.models import User
from rest_framework.exceptions import AuthenticationFailed
from django.contrib.auth import authenticate
from django.contrib.auth.hashers import make_password




class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['username', 'email', 'password']

    def validate_password(self, value):
        return make_password(value)


class LoginSerializer(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField(write_only=True)



class QuestionSerializer(serializers.ModelSerializer):
    completed = serializers.SerializerMethodField()
    for_revision = serializers.SerializerMethodField()

    class Meta:
        model = Question
        fields = '__all__'

    def get_completed(self, obj):
        user = self.context['request'].user
        progress = Progress.objects.filter(user=user, question=obj).first()
        return progress.completed if progress else False

    def get_for_revision(self, obj):
        user = self.context['request'].user
        progress = Progress.objects.filter(user=user, question=obj).first()
        return progress.for_revision if progress else False


class ProgressSerializer(serializers.ModelSerializer):
    question_title = serializers.CharField(source='question.title', read_only=True)
    question_topic = serializers.CharField(source='question.topic', read_only=True)

    class Meta:
        model = Progress
        fields = '__all__'


class UserNoteSerializer(serializers.ModelSerializer):
    question_title = serializers.CharField(source='question.title', read_only=True)

    class Meta:
        model = UserNote
        fields = '__all__'


class RevisionSheetSerializer(serializers.ModelSerializer):
    question_title = serializers.CharField(source='question.title', read_only=True)

    class Meta:
        model = RevisionSheet
        fields = '__all__'



class UserProfileSerializer(serializers.ModelSerializer):
    progress = serializers.SerializerMethodField()
    username = serializers.CharField(source='user.username', read_only=True)
    email = serializers.EmailField(source='user.email', read_only=True)

    class Meta:
        model = UserProfile
        fields = ['profile_picture', 'progress', 'username', 'email']

    def get_progress(self, obj):
        user = obj.user
        total_questions = Question.objects.count()
        solved_questions = Progress.objects.filter(user=user, completed=True).count()
        
        if total_questions == 0:
            return {
                "total_questions": 0,
                "solved_questions": 0,
                "remaining_questions": 0,
                "completion_percentage": 0,
            }
        
        return {
            "total_questions": total_questions,
            "solved_questions": solved_questions,
            "remaining_questions": total_questions - solved_questions,
            "completion_percentage": (solved_questions / total_questions) * 100,
        }

