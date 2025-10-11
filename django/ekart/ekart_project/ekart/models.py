from django.db import models

# Create your models here.

class Category(models.Model):
    category_name=models.CharField(max_length=100,unique=True)
    is_active=models.BooleanField(default=True)

    def __str__(self):
        return self.category_name
    

class Product(models.Model):
    category=models.ForeignKey(Category,on_delete=models.CASCADE)
    product_name=models.CharField(max_length=100,unique=True)
    price=models.PositiveIntegerField()
    description=models.TextField()
    image=models.ImageField(upload_to="media")


    def __str__(self):
        return self.product_name