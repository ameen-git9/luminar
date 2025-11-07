from rest_framework import serializers

class StudentSerializer(serializers.Serializer):
    name=serializers.CharField()
    place=serializers.CharField()
    age=serializers.IntegerField()