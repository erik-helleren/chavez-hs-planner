# -*- coding: utf-8 -*-
# Generated by Django 1.10 on 2017-04-26 15:23
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('student', '0036_auto_20170412_1848'),
    ]

    operations = [
        migrations.AddField(
            model_name='testscore',
            name='test_date',
            field=models.DateField(default='2001-01-01'),
            preserve_default=False,
        ),
    ]
