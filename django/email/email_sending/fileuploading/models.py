from django.db import models

# Create your models here.
class Profile(models.Model):
    name=models.CharField(max_length=100)
    email=models.EmailField()
    profile_pic=models.ImageField(upload_to="images")
    bio=models.TextField()

    def __str__(self):
        return self.name