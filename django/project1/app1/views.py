from django.shortcuts import render
from django.http import HttpResponse
from django.views import View
from django.contrib.auth.models import User


# Create your views here.
def home(request):
    return HttpResponse("hello")

def register(request):
    student=["ameen","aamm","meenn"]
    return render(request,'register.html',{"studlist":student})


class homeview(View):
    def get(self,request):
        users=User.objects.all()
        return render(request,'home.html',{"users":users})

