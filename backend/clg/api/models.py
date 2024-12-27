from django.db import models
from django.conf import settings
from django.contrib.auth.models import User
from django.contrib.auth.models import AbstractUser


# class CustomUser(AbstractUser):
#     name = models.CharField(max_length=255)
#     email = models.CharField(max_length=255, unique=True)
#     password = models.CharField(max_length=255)
#     username = None  # Remove the username field from AbstractUser

#     USERNAME_FIELD = 'email'  # Use email as the unique identifier
#     REQUIRED_FIELDS = []  # Remove the default required username field




# Model for storing questions
class Question(models.Model):
    DIFFICULTY_LEVELS = [
        ("Easy", "Easy"),
        ("Medium", "Medium"),
        ("Hard", "Hard"),
    ]
    
    title = models.CharField(max_length=100)
    topic = models.CharField(max_length=100)
    question_discription = models.TextField(max_length= 2000, blank=True, null=True)
    difficulty_level = models.CharField(max_length=10, choices=DIFFICULTY_LEVELS)
    code_solution = models.TextField( blank=True, null=True)
    video_solution_url = models.URLField("Video Solution (YouTube URL)", blank=True, null=True)
    pseudocode_url = models.URLField("Pseudocode (GeeksforGeeks URL)", blank=True, null=True)
    practice_url = models.URLField("Practice (Leetcode URL)", blank=True, null=True)
    def __str__(self):
        return f"{self.title} - {self.difficulty_level}"
    

# Model for storing user profile details
class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    profile_picture = models.URLField(
        blank=True, 
        null=True, 
        default="https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_1280.png"
        
    )  # Replace with actual URL/path to placeholder image




# Model for tracking progress of each user
class Progress(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    question = models.ForeignKey(Question, on_delete=models.CASCADE)
    completed = models.BooleanField(default=False)  # Checkbox status (whether user has solved the question)
    for_revision = models.BooleanField(default=False)  # Star icon status (whether user wants to revise it)

    class Meta:
        unique_together = ('user', 'question')  # Ensures unique progress tracking per user-question pair

    def __str__(self):
        return f"{self.user.username} - {self.question.title} (Completed: {self.completed}, For Revision: {self.for_revision})"



# Model for storing user notes
class UserNote(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    question = models.ForeignKey(Question, on_delete=models.CASCADE)
    note = models.TextField(max_length=500, blank=True, null=True)  # Increased note size for more text
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"Note by {self.user.username} on {self.question.title}"



# Model for tracking revision sheet by user
class RevisionSheet(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    question = models.ForeignKey(Question, on_delete=models.CASCADE)
    added_at = models.DateTimeField(auto_now_add=True)
    starred = models.BooleanField(default=False)
    def __str__(self):
        return f"{self.user.username}'s revision sheet - {self.question.topic}"
    


# Model for tracking topic completion by user
class TopicCompletion(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    topic = models.CharField(max_length=100)
    completed_questions = models.IntegerField(default=0)
    total_questions = models.IntegerField(default=0)

    def is_topic_complete(self):
        return self.completed_questions >= self.total_questions

    def __str__(self):
        return f"{self.user.username} - {self.topic} (Completed: {self.is_topic_complete()})"