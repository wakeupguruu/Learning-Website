# Generated by Django 5.0 on 2024-11-09 15:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_revisionsheet'),
    ]

    operations = [
        migrations.AddField(
            model_name='revisionsheet',
            name='starred',
            field=models.BooleanField(default=False),
        ),
    ]
