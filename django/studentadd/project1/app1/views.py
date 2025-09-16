from django.shortcuts import render,redirect
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
        # return HttpResponse("data added")
        return redirect('HomeView')
    

class DeleteStudent(View):
    def get(self,request,**kwargs):
        stud_id=kwargs.get("id")
        student=Student.objects.get(id=stud_id)
        student.delete()
        return redirect("HomeView")
    
class UpdateStudent(View):
    def get(self,request,**kwargs):
        stud_id=kwargs.get("id")
        student=Student.objects.get(id=stud_id)
        return render(request,'update.html',{'student':student})
    
    def post(self,request,**kwargs):
        student=Student.objects.get(id=kwargs.get("id"))
        name=request.POST.get("name")
        place=request.POST.get("place")
        age=request.POST.get("age")
        email=request.POST.get("email")
        student.name=name
        student.place=place
        student.age=age
        student.email=email
        student.save()
        return redirect("HomeView")
    

    
