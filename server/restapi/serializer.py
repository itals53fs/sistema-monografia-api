from rest_framework import serializers
from .models import Monografia

# Serializers define the API representation.
class MonografiaSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Monografia
        fields = ['url','title', 'author', 'image', 'link', 'desc', 'evaluation']