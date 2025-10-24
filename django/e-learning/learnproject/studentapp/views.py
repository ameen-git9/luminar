from django.shortcuts import render
from django.views import View
from instructorapp.models import Course,Category
# Create your views here.


class StudentHome(View):
    def get(self,request):
       
        courses=Course.objects.all()
        return render(request,"student_home.html",{'courses':courses})


class CourseDetails(View):
    def get(self,request,**kwargs):
        course=Course.objects.get(id=kwargs.get("id"))
        return render(request,'course_details.html',{'course':course})