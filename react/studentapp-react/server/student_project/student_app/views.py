from django.shortcuts import render
from student_app.serializer import StudentSerializer
from student_app.models import Student
from rest_framework.viewsets import ModelViewSet

# Create your views here.
class StudentView(ModelViewSet):
    queryset=Student.objects.all()
    serializer_class=StudentSerializer
