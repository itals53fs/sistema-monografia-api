# Generated by Django 3.2.9 on 2021-11-19 15:44

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Monografia',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('titulodaobra', models.CharField(max_length=200)),
                ('autor', models.CharField(max_length=200)),
                ('linkimagem', models.CharField(max_length=250)),
                ('linkdocumento', models.CharField(max_length=250)),
            ],
        ),
    ]