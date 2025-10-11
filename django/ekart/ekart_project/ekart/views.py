from django.shortcuts import render,redirect
from django.views import View
from django.views.generic import TemplateView

# Create your views here.


class HomeView(TemplateView):
    template_name='index.html'