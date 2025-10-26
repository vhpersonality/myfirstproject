from django.urls import path
from . import views

urlpatterns = [
    path('cases/', views.cases, name='cases'),
]
