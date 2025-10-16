from django.db import models
from django.contrib.auth.models import User


# Create your models here.



class Blog(models.Model):
    title=models.CharField(max_length=200)
    content=models.TextField()
    blog_pic=models.ImageField(upload_to="media",null=True,blank=True)
    added_date=models.DateField(auto_now_add=True)
    user_id=models.ForeignKey(User,on_delete=models.CASCADE)

    def __str__(self):
        return self.title 
    

class Comment(models.Model):
    comment=models.TextField()
    user=models.ForeignKey(User,on_delete=models.CASCADE)
    blog=models.ForeignKey(Blog,on_delete=models.CASCADE)
    added_date=models.DateField(auto_now_add=True)