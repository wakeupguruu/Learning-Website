
from django.db.models.signals import post_save
from django.dispatch import receiver
from django.contrib.auth.models import User
from .models import UserProfile

@receiver(post_save, sender=User)
def create_user_profile(sender, instance, created, **kwargs):
    """
    Create a UserProfile whenever a new User is created.
    """
    if created:
        print(f"Creating UserProfile for user {instance.username}")  # Debug print
        UserProfile.objects.create(user=instance)