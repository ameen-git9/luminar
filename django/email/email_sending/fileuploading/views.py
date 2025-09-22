from django.shortcuts import render,redirect
from django.views import View
from fileuploading.forms import ProfileForm
from fileuploading.models import Profile

# Create your views here.

class ProfileView(View):
    def get(self,request):
        form=ProfileForm()
        return render(request,'profile.html',{'form':form})
    
    def post(self,request):
        form=ProfileForm(request.POST,request.FILES)
        print(form)
        if form.is_valid():
            form.save()
            return redirect("homeview")


class Homeview(View):
    def get(self,request):
        profile=Profile.objects.all()
        return render(request,"home.html",{"profile":profile})
        


