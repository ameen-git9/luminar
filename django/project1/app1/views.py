from django.shortcuts import render
from django.http import HttpResponse


# Create your views here.
def home(request):
    return HttpResponse("hello")

def register(request):
    student=["ameen","aamm","meenn"]
    return render(request,'register.html',{"studlist":student})
