from django.urls import include, path

from rest_framework import routers

from api.views import MovieViewSet, RatingViewSet

router = routers.DefaultRouter()
router.register(r'movies', MovieViewSet)
router.register(r'ratings', RatingViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
