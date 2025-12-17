from django.shortcuts import render
from emp_app.models import Employee
from emp_app.seriaziler import EmployeeSerializers
from rest_framework.viewsets import ModelViewSet

# Create your views here.
class EmployeeView(ModelViewSet):
    queryset=Employee.objects.all()
    serializer_class=EmployeeSerializers
