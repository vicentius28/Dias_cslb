# Generated by Django 4.1.2 on 2023-10-10 16:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('proyectoapp', '0017_alter_user_dias_cumpleaños'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='bloqueado',
            field=models.BooleanField(default=False),
        ),
    ]
