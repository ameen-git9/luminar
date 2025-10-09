from django.shortcuts import render,redirect
from verifyapp.models import User
from verifyapp.forms import UserRegisterForm,UserLoginForm
from django.views import View
from django.http import HttpResponse
from django.core.mail import send_mail,settings
from django.contrib.auth import authenticate,login,logout


# Create your views here.

def send_otp(user_instance):
    user_instance.generate_otp()

class UserRegisterView(View):
    def get(self,request):
        form=UserRegisterForm()
        return render(request,'register.html',{'form':form})
    
    def post(self,request):
        form_instance=UserRegisterForm(request.POST)
        if form_instance.is_valid():
            user_instance=form_instance.save(commit=False)
            user_instance.is_active=False
            user_instance.save()
            send_otp(user_instance)
            send_mail("OTP verification", user_instance.otp,settings.EMAIL_HOST_USER,[user_instance.email])
            return redirect("otp")

class VerifyOTP(View):
    def get(self,request):
        return render(request,'otp.html')  


    def post(self,request):
        otp=request.POST.get("otp")
        try:
            user_instance=User.objects.get(otp=otp)
            user_instance.is_active=True
            user_instance.is_verified=True
            user_instance.otp=""
            user_instance.save()
            return redirect("login")
        except:
            return HttpResponse("invalid otp")     


class LoginView(View):
    def get(self,request):
        form=UserLoginForm()
        return render(request,'login.html',{'form':form})  

    def post(self,request):
        name=request.POST.get("username")
        pws=request.POST.get("password")
        res=authenticate(request,username=name,password=pws)
        if res:
            login(request,res)
            return HttpResponse("login successfull")
        else:
            return HttpResponse("invalid username or password")




    
