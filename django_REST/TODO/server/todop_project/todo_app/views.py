from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from rest_framework.response import Response
from django.contrib.auth.models import User
from todo_app.serializer import UserSerializer

# Create your views here.

class UserView(ModelViewSet):
    queryset=User.objects.all()
    serializer_class=UserSerializer

    def create(self, request,**kwargs):
        serailizer=UserSerializer(data=request.data)
        if serailizer.is_valid():
            User.objects.create_user(**serailizer.validated_data)
            return Response(data=serailizer.data)

