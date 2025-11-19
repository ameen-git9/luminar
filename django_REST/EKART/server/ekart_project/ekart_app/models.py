from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Category(models.Model):
    category_name=models.CharField(max_length=150,unique=True)

    def __str__(self):
        return self.category_name
    
class Product(models.Model):
    category_instance=models.ForeignKey(Category,on_delete=models.CASCADE)
    product_name=models.CharField(max_length=100)
    description=models.TextField()
    price=models.PositiveIntegerField()
    image=models.ImageField(upload_to="product_images")

    def __str__(self):
        return self.product_name
    
class Cart(models.Model):
    product_instance=models.ForeignKey(Product,on_delete=models.CASCADE)
    user_instance=models.ForeignKey(User,on_delete=models.CASCADE)
    quantity=models.PositiveIntegerField(default=1)
    status=models.CharField(max_length=100,default="in-cart")

    def __str__(self):
        return self.product_instance.product_name
