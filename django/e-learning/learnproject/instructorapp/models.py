from django.db import models
from django.contrib.auth.models import AbstractUser
from django.db.models import signals
from embed_video.fields import EmbedVideoField

# Create your models here.


class User(AbstractUser):
    option=(
        ('instructor','instructor'),
        ('student','student')
    )
    role=models.CharField(max_length=100,choices=option,default="student")



class InstructorProfile(models.Model):
    user=models.OneToOneField(User,on_delete=models.CASCADE,related_name="instructor")
    profile_pic=models.ImageField(upload_to="profile_pic",null=True,blank=True,default="profile_pic/profile.jpg")
    expertise=models.CharField(max_length=100,null=True,blank=True)
    description=models.TextField(null=True,blank=True)

    def __str__(self):
        return self.user.username 
    

def create_profile(sender,instance,created,**kwargs):
    if created and instance.role=="instructor":
        InstructorProfile.objects.create(user=instance)
signals.post_save.connect(create_profile,User)



class Category(models.Model):
    category_name=models.CharField(max_length=150,unique=True)

    def __str__(self):
        return self.category_name
    


class Course(models.Model):
    owner=models.ForeignKey(User,on_delete=models.SET_NULL,null=True,related_name="owner")
    Category=models.ManyToManyField(Category,related_name="category")
    title=models.CharField(max_length=200)
    description=models.TextField()
    image=models.ImageField(upload_to="course_img",null=True,blank=True,default="course_img/default.jpg")
    price=models.DecimalField(max_digits=7,decimal_places=2)
    thumbnail=EmbedVideoField()
    created_date=models.DateField(auto_now=True)


    def __str__(self):
        return self.title
    

class Module(models.Model):
    course=models.ForeignKey(Course,on_delete=models.CASCADE,related_name="module")
    title=models.CharField(max_length=150)
    order=models.IntegerField()

    def __str__(self):
        return f'{self.course.title}-{self.title}'

    

