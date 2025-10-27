from django.shortcuts import render,redirect
from django.views import View
from instructorapp.models import Course,Category,User
from instructorapp.forms import InstructorCreateForm
# from django.contrib.auth.models import User

from django.contrib.auth import authenticate,login,logout
from django.contrib import messages
# Create your views here.

class StudentReg(View):
    def get(self,request):
       
        return render (request,'student_register.html')
    
    def post(self,request):
        fname=request.POST.get('first_name')
        uname=request.POST.get('username')
        email=request.POST.get('email')
        password=request.POST.get('password')
        print(fname,uname,email,password)
        try:
            User.objects.create_user(first_name=fname,username=uname,email=email,password=password)
            messages.warning(request,'Registration successfull')
            return redirect('studentlogin')
        except:
            messages.warning(request,'Invalid inputs')
            return redirect('studentregister')
        

    


class StudentLogin(View):
    def get(self,request):
        return render(request,'student_register.html')
    
    def post(self,request):
        uname=request.POST.get('username')
        password=request.POST.get('password')
        res=authenticate(request,username=uname,password=password)
        if res:
            login(request,res)
            if res.role=='student':
                return redirect('studenthome')



class StudentHome(View):
    def get(self,request):
       
        courses=Course.objects.all()
        return render(request,"student_home.html",{'courses':courses})


class CourseDetails(View):
    def get(self,request,**kwargs):
        course=Course.objects.get(id=kwargs.get("id"))
        return render(request,'course_details.html',{'course':course})