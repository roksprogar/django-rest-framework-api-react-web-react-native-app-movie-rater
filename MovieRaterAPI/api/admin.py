from django.contrib import admin
from api.models import Movie, Rating


@admin.register(Movie)
class MovieAdmin(admin.ModelAdmin):
    pass


@admin.register(Rating)
class RatingAdmin(admin.ModelAdmin):
    pass
