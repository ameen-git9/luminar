from rest_framework import serializers
from student_app.models import Student


class StudentSerializer(serializers.ModelSerializer):
    id=serializers.IntegerField(read_only=True)
    class Meta:
        model=Student
        fields='__all__'