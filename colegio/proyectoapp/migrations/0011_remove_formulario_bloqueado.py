# Generated by Django 4.1.2 on 2023-10-07 16:08

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('proyectoapp', '0010_formulario_bloqueado_alter_formulario_email'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='formulario',
            name='bloqueado',
        ),
    ]
