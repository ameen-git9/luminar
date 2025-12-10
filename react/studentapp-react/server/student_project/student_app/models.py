from django.db import models

# Create your models here.
class Student(models.Model):
    name=models.CharField(max_length=150)
    place=models.CharField(max_length=100)
    email=models.EmailField()
    phone=models.CharField(max_length=100)