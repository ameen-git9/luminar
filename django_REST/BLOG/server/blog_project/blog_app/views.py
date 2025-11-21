from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from django.contrib.auth.models import User
from rest_framework.response import Response
from blog_app.serializers import UserSerializer


# Create your views here.
class UserView(ModelViewSet):
    queryset=User.objects.all()
    serializer_class=UserSerializer

    def create(self, request, *args, **kwargs):
        serializer=UserSerializer(data=request.data)
        if serializer.is_valid():
            User.objects.create_user(**serializer.validated_data)
            return Response(data=serializer.data)
        else:
            return Response(data=serializer.errors)