from rest_framework import serializers
from vapp.models import Student

class StudentSerializer(serializers.Serializer):
    id=serializers.IntegerField(read_only=True)
    name=serializers.CharField()
    place=serializers.CharField()
    age=serializers.IntegerField()


class StudentModelSerializer(serializers.ModelSerializer):
    id=serializers.IntegerField(read_only=True)
    class Meta:
        model=Student
        fields='__all__'