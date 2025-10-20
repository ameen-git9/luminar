from django.db import models
from django.contrib.auth.models import User

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
    

class Cart(models.Model):
    user=models.ForeignKey(User,on_delete=models.CASCADE)
    product=models.ForeignKey(Product,on_delete=models.CASCADE)
    quantity=models.PositiveIntegerField(default=1)
    options=(
        ("in-cart","in-cart"),
        ("Order-placed","Order-placed"),
        ("Cancelled","Cancelled")
    )
    status=models.CharField(max_length=100,default="in-cart",choices=options)
    added_date=models.DateField(auto_now=True)
    


class Order(models.Model):
    user=models.ForeignKey(User,on_delete=models.CASCADE)
    cart=models.ForeignKey(Cart,on_delete=models.CASCADE)
    address=models.CharField(max_length=500)
    date=models.DateField(auto_now_add=True)
    options=(
        ('order-placed','order-placed'),
        ('dispatched','dispatched'),
        ('in-transit','in-transit'),
        ('delivered','delivered'),
        ('cancelled','cancelled'),
    )
    status=models.CharField(max_length=100,default='order-placed',choices=options)