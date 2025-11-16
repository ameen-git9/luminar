from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from rest_framework.response import Response
from django.contrib.auth.models import User
from todo_app.serializer import UserSerializer,TodoSerializer
from todo_app.models import Todo
from rest_framework import authentication,permissions


# Create your views here.

class UserView(ModelViewSet):
    queryset=User.objects.all()
    serializer_class=UserSerializer
    


    def create(self, request,**kwargs):
        serailizer=UserSerializer(data=request.data)
        if serailizer.is_valid():
            User.objects.create_user(**serailizer.validated_data)
            return Response(data=serailizer.data)

class TodoView(ModelViewSet):
    queryset=Todo.objects.all()
    serializer_class=TodoSerializer
    authentication_classes=[authentication.BasicAuthentication]
    permission_classes=[permissions.IsAuthenticated]


    def create(self, request,**kwargs):
        serailizer=TodoSerializer(data=request.data)
        if serailizer.is_valid():
            Todo.objects.create(**serailizer.validated_data,user=request.user)
            return Response(data=serailizer.data)
        
    def list(self, request, *args, **kwargs):
        todos=Todo.objects.filter(user=request.user)
        serializer=TodoSerializer(todos,many=True)
        return Response(data=serializer.data)