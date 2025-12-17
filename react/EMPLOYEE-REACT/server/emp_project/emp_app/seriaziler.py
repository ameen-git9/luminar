from rest_framework import serializers
from emp_app.models import Employee

class EmployeeSerializers(serializers.ModelSerializer):
    id=serializers.IntegerField(read_only=True)
    class Meta:
        model=Employee
        fields='__all__'