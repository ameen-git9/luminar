from django.db import models
from django.contrib.auth.models import AbstractUser
from random import randint
from django.db.models.signals import post_save

# Create your models here.
class User(AbstractUser):
    phone=models.CharField(max_length=20)
    is_verified=models.BooleanField(default=False)
    otp=models.CharField(max_length=10)

    def generate_otp(self):
        send_otp=str(randint(1000,9999))+str(self.id)
        self.otp=send_otp
        self.save()



class Profile(models.Model):
    user=models.OneToOneField(User,on_delete=models.CASCADE,related_name="owner")
    profile_pic=models.ImageField(upload_to="image",default='image/default.jpg',null=True,blank=True)
    bio=models.TextField(null=True,blank=True)

def create_profile(sender,instance,created,**kwargs):
    if created:
        Profile.objects.create(user=instance)

post_save.connect(create_profile,User)