"""
URL configuration for core project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/6.1/topics/http/urls/
"""
from django.contrib import admin
from django.urls import path, include
from api.views import health_check

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/status/', health_check, name='health_check'),
    path('api/', include('api.customers.urls')),
]
