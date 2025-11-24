from rest_framework import serializers
from django.contrib.auth.models import User
from blog_app.models import ProfileModel,PostModel

class UserSerializer(serializers.ModelSerializer):
    id=serializers.IntegerField(read_only=True)
    class Meta:
        model=User
        fields=['id','username','email','password']

class ProfileSerializer(serializers.ModelSerializer):
    id=serializers.IntegerField(read_only=True)
    user=UserSerializer(read_only=True)
    followers=serializers.CharField(read_only=True)
    followers_count=serializers.IntegerField(read_only=True)
    class Meta:
        model=ProfileModel
        fields="__all__"


class PostSerializer(serializers.ModelSerializer):
    id=serializers.IntegerField(read_only=True)
    user=UserSerializer(read_only=True)
    likes=serializers.CharField(read_only=True)
    class Meta:
        model=PostModel
        fields="__all__"

  
    

