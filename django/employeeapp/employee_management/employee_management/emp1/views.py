from django.shortcuts import render,redirect
from emp1.models import Employee
from django.views import View

# Create your views here.
class HomeView(View):
    def get(self,request):
        employees=Employee.objects.all()
        return render(request,'home.html',{"employees":employees})
    
class EmployeeRegister(View):
    def get(self,request):
        return render(request,'register.html')
    
    def post(self,request):
         name=request.POST.get("name")
         salary=request.POST.get("salary")
         designation=request.POST.get("designation")
         email=request.POST.get("email")
         phone=request.POST.get("phone")
         Employee.objects.create(name=name,salary=salary,designation=designation,email=email,phone=phone)
         return redirect('HomeView')
    

class DeleteEmployee(View):
    def get(self,request,**kwargs):
        empl_id=kwargs.get("id")
        employee=Employee.objects.get(id=empl_id)
        employee.delete()
        return redirect("HomeView")
    
class UpdateEmployee(View):
    def get(self,request,**kwargs):
        empl_id=kwargs.get("id")
        employee=Employee.objects.get(id=empl_id)
        return render(request,'update.html',{'employee':employee})
    

    def post(self,request,**kwargs):
        employee=Employee.objects.get(id=kwargs.get("id"))
        name=request.POST.get("name")
        salary=request.POST.get("salary")
        designation=request.POST.get("designation")
        email=request.POST.get("email")
        phone=request.POST.get("phone")
        employee.name=name
        employee.salary=salary
        employee.designation=designation
        employee.email=email
        employee.phone=phone
        employee.save()
        return redirect("HomeView")

    