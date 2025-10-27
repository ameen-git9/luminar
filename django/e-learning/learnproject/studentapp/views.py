from django.shortcuts import render
from django.views import View
from instructorapp.models import Course,Category
from instructorapp.forms import InstructorCreateForm
# Create your views here.

class StudentReg(View):
    def get(self,request):
        form=InstructorCreateForm()
        return render (request,'student_register.html',{'form':form})

class StudentHome(View):
    def get(self,request):
       
        courses=Course.objects.all()
        return render(request,"student_home.html",{'courses':courses})


class CourseDetails(View):
    def get(self,request,**kwargs):
        course=Course.objects.get(id=kwargs.get("id"))
        return render(request,'course_details.html',{'course':course})