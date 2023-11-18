from django.db import models
from django.contrib.auth.models import User
from django.core.validators import MaxValueValidator, MinValueValidator


class Movie(models.Model):
    title = models.CharField(max_length=32)
    description = models.TextField(max_length=360)

    def number_of_ratings(self):
        ratings = Rating.objects.filter(movie=self)
        return len(ratings)

    def average_rating(self):
        sum_of_ratings = 0
        ratings = Rating.objects.filter(movie=self)
        for rating in ratings:
            sum_of_ratings += rating.stars

        if len(ratings) > 0:
            return sum_of_ratings / len(ratings)

        return 0


class Rating(models.Model):
    class Meta:
        unique_together = (('user', 'movie'),)
        index_together = (('user', 'movie'), )

    movie = models.ForeignKey(Movie, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    stars = models.IntegerField(validators=[MinValueValidator(1), MaxValueValidator(5)])
