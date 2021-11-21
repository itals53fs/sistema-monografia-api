from django.db import models

class Monografia(models.Model):
    title = models.CharField(max_length=1000, default='')
    author = models.CharField(max_length=1000, default='')
    image = models.CharField(max_length=1000, default='')
    link = models.CharField(max_length=1000, default='')
    desc = models.CharField(max_length=1000, default='')
    evaluation = models.CharField(max_length=2, default=0)

def _str_(self):
    return self.title