from django.shortcuts import render,redirect
from django.views import View
from todo1.forms import UserRegisterForm,UserLogin
from django.http import HttpResponse
from django.contrib import messages
from django.contrib.auth.models import User
from django.contrib.auth import authenticate,login,logout

# Create your views here.
class UserRegisterView(View):
    def get(self,request):
        form=UserRegisterForm()
        return render(request,'register.html',{'form':form})
    def post(self,request):
        form=UserRegisterForm(request.POST)
        if form.is_valid():
            User.objects.create_user(**form.cleaned_data)
            messages.success(request,"registration successfull")
            return redirect('logview')
        else:
            messages.warning(request,"invalid  uusername or password")
            return redirect('register')
        


class UserLoginView(View):
    def get(self,request):
        form=UserLogin()
        return render(request,'userlogin.html',{'form':form})
    
    def post(self,request):
        username=request.POST.get("username")
        password=request.POST.get("password")
        res=authenticate(request,username=username,password=password)
        if res:
            messages.success(request,"successfull")
            return redirect('homeview')
        else:
            messages.warning(request,"invalid username or password")
            return redirect('logview')
    

    
class HomeView(View):
    def get(self,request):
        return render(request,'home.html')
        
