from django.shortcuts import render
from rest_framework import viewsets
from .models import Monografia
from .serializer import MonografiaSerializer

# Create your views here.

# ViewSets define the view behavior.
class MonografiaViewSet(viewsets.ModelViewSet):
    queryset = Monografia.objects.all()
    serializer_class = MonografiaSerializer