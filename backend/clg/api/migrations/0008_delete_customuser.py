# Generated by Django 5.1.3 on 2024-11-21 15:24

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0007_remove_question_code_solution_url_and_more'),
    ]

    operations = [
        migrations.DeleteModel(
            name='CustomUser',
        ),
    ]
