from django.shortcuts import render
from django.views import View
from django.http import HttpResponse
from instructorapp.forms import InstructorCreateForm
from instructorapp.models import User
from django.contrib.auth.hashers import make_password

# Create your views here.

class InstructorView(View):
    def get(self,request):
        form=InstructorCreateForm()
        return render(request,'instructor_reg.html',{'form':form})
    

    def post(self,request):
        form_instance=InstructorCreateForm(request.POST)
        if form_instance.is_valid():
            res=form_instance.save(commit=False)
            res.role="instructor"
            res.is_superuser=True
            res.is_staff=True
            res.password=make_password(form_instance.cleaned_data.get("password"))
            form_instance.save()
            return HttpResponse("data added")

