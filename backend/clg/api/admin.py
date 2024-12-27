from django.contrib import admin
from .models import Question, Progress, UserNote, RevisionSheet, TopicCompletion, UserProfile

admin.site.register(Question)
admin.site.register(Progress)
admin.site.register(UserNote)
admin.site.register(RevisionSheet)
admin.site.register(TopicCompletion)
admin.site.register(UserProfile)
