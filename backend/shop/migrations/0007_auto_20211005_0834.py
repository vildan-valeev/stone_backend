# Generated by Django 3.2.7 on 2021-10-05 08:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('shop', '0006_support'),
    ]

    operations = [
        migrations.AlterField(
            model_name='support',
            name='message',
            field=models.CharField(default=1, max_length=20),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='support',
            name='subject',
            field=models.CharField(default=1, max_length=20),
            preserve_default=False,
        ),
    ]
