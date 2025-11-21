from django.db import models
from django.contrib.auth.models import User
from django.core.validators import  MinValueValidator, MaxValueValidator

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
    
    def Total_rating(self):
        review_list=Review.objects.filter(product_instance=self)
        rating_list=[review.rating for review in review_list]
        return sum(rating_list)/len(rating_list)
    
class Cart(models.Model):
    product_instance=models.ForeignKey(Product,on_delete=models.CASCADE)
    user_instance=models.ForeignKey(User,on_delete=models.CASCADE)
    quantity=models.PositiveIntegerField(default=1)
    status=models.CharField(max_length=100,default="in-cart")

    def __str__(self):
        return self.product_instance.product_name


class Order(models.Model):
    cart_instance=models.ForeignKey(Cart,on_delete=models.CASCADE)
    user_instance=models.ForeignKey(User,on_delete=models.CASCADE)
    address=models.TextField()
    status=models.CharField(max_length=150,default="order-placed")

    def __str__(self):
        return f"{self.user_instance}-{self.cart_instance.product_instance.product_name}"
    

class Review(models.Model):
    user_instance=models.ForeignKey(User,on_delete=models.CASCADE)
    product_instance=models.ForeignKey(Product,on_delete=models.CASCADE)
    comment=models.CharField(max_length=150)
    rating=models.PositiveIntegerField(validators=[MinValueValidator(1),MaxValueValidator(5)])

    class Meta:
        unique_together=('user_instance','product_instance')
    
    def __str__(self):
        return f"{self.product_instance.product_name}-{self.comment}"
