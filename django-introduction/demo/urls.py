from django.urls import path
from demo import views
from demo.views import Another

urlpatterns = [
    path('first', views.first),
    path('another', Another.as_view()),
]
