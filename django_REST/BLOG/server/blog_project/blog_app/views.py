from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from django.contrib.auth.models import User
from rest_framework.response import Response
from blog_app.serializers import UserSerializer,ProfileSerializer
from blog_app.models import ProfileModel
from rest_framework import permissions, authentication
from rest_framework.decorators import action


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
        
class ProfileView(ModelViewSet):
    queryset=ProfileModel.objects.all()
    serializer_class=ProfileSerializer
    authentication_classes=[authentication.TokenAuthentication]
    permission_classes=[permissions.IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)
        return super().perform_create(serializer)
    
    @action(methods=['POST'],detail=True)
    def add_follower(self,request,*args,**kwargs):
        profile_to_follow=ProfileModel.objects.get(id=kwargs.get('pk'))
        user_followwing=request.user
        profile_to_follow.followers.add(user_followwing)
        return Response({'msg':'followed'})