from django.shortcuts import render
from app1.models import Student
from django.views import View
from django.http import HttpResponse

# Create your views here.
class HomeView(View):
    def get(self,request):
        students=Student.objects.all()
        return render(request,'index.html', {'students':students})
    

class StudentRegister(View):
    def get(self,request):
        return render(request,'register.html')
    
    def post(self,request):
        print(request.POST)
        name=request.POST.get("name")
        age=request.POST.get("age")
        place=request.POST.get("place")
        email=request.POST.get("email")
        print(name,age,place,email)
        Student.objects.create(name=name,age=age,place=place,email=email)
        return HttpResponse("data added")

    
