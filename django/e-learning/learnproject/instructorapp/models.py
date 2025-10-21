from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.


class User(AbstractUser):
    option=(
        ('instructor','instructor'),
        ('student','student')
    )
    role=models.CharField(max_length=100,choices=option,default="student")
