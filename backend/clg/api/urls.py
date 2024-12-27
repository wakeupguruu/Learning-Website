from django.urls import path
from . import views
from rest_framework_simplejwt.views import TokenRefreshView
urlpatterns = [


    # Authentication views
    path('register/', views.RegisterView.as_view()),  
    path('login/', views.LoginView.as_view()),    
    path('referesh/', TokenRefreshView.as_view()),    
    # path('user/', views.UserView.as_view()),          
    path('logout/', views.LogoutView.as_view()),      
    path('forgot-password/', views.ForgotPasswordView.as_view(), name='forgot-password'),
    # path('reset-password/', views.ResetPasswordView.as_view(), name='reset-password'),


    # Question-related views
    path('questions/', views.QuestionListView.as_view(), name='question_list'),  # List questions with filters
    path('questions/<int:question_id>/toggle-completion/', views.ToggleCompletionView.as_view(), name='toggle_completion'),  # Toggle question completion
    path('questions/<int:question_id>/notes/', views.UserNoteView.as_view(), name='user_notes'),  # Add/update a note for a question
    path('questions/<int:question_id>/toggle-revision/', views.ToggleRevisionView.as_view(), name='toggle_revision'),  # Add or remove question from revision list

    # User profile and progress views
    path('profile/', views.UserProfileView.as_view(), name='user_profile'),  # Get user profile details
    path('topics/completed/', views.CompletedTopicsView.as_view(), name='completed_topics'),  # List completed topics
    path('topics/<str:topic>/progress/', views.TopicProgressView.as_view(), name='topic_progress'),  # Progress details of a topic
        # Add this to your urlpatterns
    path('topics/progress/', views.AllTopicsProgressView.as_view(), name='all_topics_progress'),


    # Notes view
    path('notes/', views.UserNotesView.as_view(), name='user_notes_list'),  # List all user notes
]
