from django.shortcuts import render
from empapp1.models import Employee
from app2.forms import Employeesform
from django.views import View
from django.http import HttpResponse


# Create your views here.

class EmployeeRgistration(View):
    def get(self,request):
        form=Employeesform()
        return render(request,"reg.html",{"form":form})
    
    def post(self,request):
        form=Employeesform(request.POST)
        if form.is_valid():
            Employee.objects.create(**form.cleaned_data)
            return HttpResponse("data added")
        else:
            return HttpResponse("invalid input")
