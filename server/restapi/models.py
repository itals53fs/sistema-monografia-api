from django.db import models
from django.contrib.auth.models import User
from django.http import JsonResponse

class Monografia(models.Model):
    title = models.CharField(max_length=1000, default='')
    author = models.CharField(max_length=1000, default='')
    image = models.CharField(max_length=1000, default='')
    link = models.CharField(max_length=1000, default='')
    desc = models.CharField(max_length=1000, default='')
    evaluation = models.CharField(max_length=2, default=0)

def _str_(self):
    return self.title

def api_users(request):
    users = User.objects.all()
    data = [
        {'username': user.username}
        for user in users
    ]
    response = {'data': data}
    return JsonResponse(response)