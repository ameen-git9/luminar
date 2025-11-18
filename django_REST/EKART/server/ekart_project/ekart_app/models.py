from django.db import models

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