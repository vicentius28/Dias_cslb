# Generated by Django 4.1.2 on 2023-10-06 18:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('proyectoapp', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='formulario',
            name='jornada',
            field=models.CharField(choices=[[0, 'Jornada Completa'], [1, '1/2 Jornada'], [2, '1/4 Jornada']], default='Jornada Completa', max_length=100),
        ),
        migrations.AlterField(
            model_name='formulario',
            name='motivo',
            field=models.CharField(choices=[[0, 'Dia De Cumpleaños'], [1, 'Dia Administrativo']], default='Dia Administrativo', max_length=100),
        ),
    ]