# Generated by Django 4.1.2 on 2023-10-07 17:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('proyectoapp', '0014_rename_dias_restantes_user_dias_restantes_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='formulario',
            name='jornada',
            field=models.FloatField(choices=[[1, 'Jornada Completa'], [0.5, '1/2 Jornada'], [0.25, '1/4 Jornada']], default='Jornada Completa'),
        ),
    ]
