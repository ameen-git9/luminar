from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from vapp.models import Student
from vapp.serializer import StudentSerializer
from rest_framework import status

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
    

class StudentDetailView(APIView):
    def get(self,request,**kwargs):
        try:
            stud=Student.objects.get(id=kwargs.get('id'))
            serializer=StudentSerializer(stud)
            return Response(data=serializer.data)
        except:
            return Response({'msg':'matching query does not exist'},status=status.HTTP_404_NOT_FOUND)
        

    def delete(self,request,**kwargs):
        stud=Student.objects.get(id=kwargs.get('id'))
        stud.delete()
        return Response({'msg':'data deleted'})
    
    def put(self,request,**kwargs):
        stud=Student.objects.get(id=kwargs.get('id'))
        name=request.data.get('name')
        place=request.data.get('place')
        age=request.data.get('age')
        stud.name=name
        stud.place=place
        stud.age=age
        stud.save()
        return Response({'msg':'data updated'})
    