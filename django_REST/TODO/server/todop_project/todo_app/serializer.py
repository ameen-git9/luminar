from rest_framework import serializers
from django.contrib.auth.models import User
from todo_app.models import Todo


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model=User
        fields=['username','email','password']


class TodoSerializer(serializers.ModelSerializer):
    id=serializers.IntegerField(read_only=True)
    user=UserSerializer(read_only=True)
    class Meta:
        model=Todo
        fields='__all__'