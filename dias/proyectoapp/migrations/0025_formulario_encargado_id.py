# Generated by Django 4.1.2 on 2023-10-12 17:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('proyectoapp', '0024_formulario_group_id'),
    ]

    operations = [
        migrations.AddField(
            model_name='formulario',
            name='encargado_id',
            field=models.IntegerField(blank=True, default=None, null=True),
        ),
    ]
