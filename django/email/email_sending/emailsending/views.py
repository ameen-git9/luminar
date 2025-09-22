from django.shortcuts import render
from django.core.mail import send_mail,settings
from django.views import View 
from django.http import HttpResponse
from django.contrib import messages

# Create your views here.

class EmailSending(View):
    def get(self,request):
        sub="Django email sending"
        msg="Welcome"
        from_addr=settings.EMAIL_HOST_USER
        to="ameenanu890@gmail.com"
        res=send_mail(sub,msg,from_addr,[to])
        return HttpResponse("email sent successfully")

class EmailSend(View):
    def get(self,request):
        return render(request,'mail.html')
    def post(self,request):
        subject=request.POST.get("subject")
        massege=request.POST.get("massege")
        to=request.POST.get("email")
        from_addrr=settings.EMAIL_HOST_USER
        send_mail(subject,massege,from_addrr,[to])
        messages.success(request,"email sent successfully")
        return render(request,"mail.html")







