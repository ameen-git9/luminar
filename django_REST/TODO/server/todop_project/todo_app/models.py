from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Todo(models.Model):
    user=models.ForeignKey(User,on_delete=models.CASCADE)
    title=models.CharField()
    description=models.TextField()
    added_date=models.DateField(auto_now_add=True)
    due_date=models.DateField()
    status=models.CharField(max_length=150,default="pending")
