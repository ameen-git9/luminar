from django.shortcuts import render,redirect
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
        
class EmpUpdate(View):
    def get(self,request,**kwargs):
        emp=Employee.objects.get(id=kwargs.get("id"))
        form=Employeesform(initial={"name":emp.name,"salary":emp.salary,"designation":emp.designation,"email":emp.email,"phone":emp.phone})
        return render(request,'reg.html',{'form':form})
    def post(self,request,*args,**kwargs):
        emp=Employee.objects.get(id=kwargs.get("id"))
        form=Employeesform(request.POST)
        if form.is_valid():
            name=form.cleaned_data.get("name")
            salary=form.cleaned_data.get("salary")
            designation=form.cleaned_data.get("designation")
            email=form.cleaned_data.get("email")
            phone=form.cleaned_data.get("phone")
            emp.name=name
            emp.salary=salary
            emp.designation=designation
            emp.email=email
            emp.phone=phone
            emp.save()
            return redirect("HomeView")
