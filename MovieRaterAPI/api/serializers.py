from rest_framework import serializers
from api.models import Movie, Rating


class MovieSerializer(serializers.ModelSerializer):
    class Meta:
        model = Movie
        fields = ('id', 'title', 'description')


class RatingSerializer(serializers.ModelSerializer):
    model = Rating
    fields = ('id', 'starts', 'user', 'movie')
