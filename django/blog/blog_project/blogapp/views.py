from django.shortcuts import render,redirect
from django.views import View
from blogapp.forms import UserRegisterForm,UserLoginForm
from django.contrib.auth.models import User
from django.contrib.auth import authenticate,login,logout
from django.contrib import messages

# Create your views here.


class HomeView(View):
    def get(self,request):
        user=User.objects.all()
        return render(request,"home.html",{"user":user})
    

class UserRegView(View):
    def get(self,request):
        form=UserRegisterForm()
        return render(request,"user_reg.html",{"form":form})
    def post(self,request):
        blog=UserRegisterForm(request.POST)
        if blog.is_valid():            
            User.objects.create_user(**blog.cleaned_data)
            messages.success(request,"Registration Succeful")
            return redirect("login")
        else:
            messages.error(request,"user already exist")
            return redirect("register")
        

class UserLoginView(View):
    def get(self,request):
        form=UserLoginForm()
        return render(request,'user_login.html',{'form':form})
    
    def post(self,request):
        username=request.POST.get("username")
        password=request.POST.get("password")
        usertype=request.POST.get("usertype")
        res=authenticate(request,username=username,password=password)
        if res:
            login(request,res)
            messages.success(request,"login success")
            if usertype=="reader":
                return redirect("reader")
            else:
                return redirect("writer")

        else:
            messages.error(request,"invalid User")
            return redirect("login")
        

class LogoutView(View):
    def get(self,request):
        logout(request)
        messages.warning(request,"Logout")
        return redirect("login")