from django.db import models

class Monografia(models.Model):
    titulodaobra = models.CharField(max_length=200)
    autor = models.CharField(max_length=200)
    linkimagem = models.CharField(max_length=250)
    linkdocumento = models.CharField(max_length=250)
    

def _str_(self):
    return self.titulodaobra