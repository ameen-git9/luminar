from django.shortcuts import render
from app1.models import Student
from django.views import View

# Create your views here.
class HomeView(View):
    def get(self,request):
        students=Student.objects.all()
        return render(request,'index.html', {'students':students})