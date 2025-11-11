from rest_framework import serializers

class StudentSerializer(serializers.Serializer):
    id=serializers.IntegerField(read_only=True)
    name=serializers.CharField()
    place=serializers.CharField()
    age=serializers.IntegerField()