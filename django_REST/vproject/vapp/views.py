from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from vapp.models import Student
from vapp.serializer import StudentSerializer

# Create your views here.

class Home(APIView):

    def get(self,request):
        return Response({"msg":"welcome"})
    
    def post(self,request):
        return Response({'msg':'hello'})            


class StudentView(APIView):
    def get(self,request):
        student=Student.objects.all()
        res=StudentSerializer(student,many=True)
        return Response(data=res.data)
    
    def post(self,request):
        name=request.data.get("stud_name")
        place=request.data.get("place")
        age=request.data.get("age")
        Student.objects.create(name=name,place=place,age=age)
        return Response({'msd':'student added'})
    