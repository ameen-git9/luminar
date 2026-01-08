from django.db import models

# Create your models here.
class Customer(models.Model):
    customer_name=models.CharField(max_length=20)
    phone=models.CharField(max_length=20)
    vehicle_no=models.CharField(max_length=20)
    added_date=models.DateField(auto_now_add=True)
    image=models.ImageField(upload_to="media")

    def total_amount(self):
        services=Service.objects.filter(customer=self)
        total = sum([service.amount for service in services])
        return total

    def __str__(self):
        return self.customer_name


class Service(models.Model):
    customer=models.ForeignKey(Customer,on_delete=models.CASCADE)
    title=models.CharField(max_length=200)
    description=models.TextField()
    amount=models.PositiveIntegerField()
    exp_date=models.DateField()
    status=models.CharField(max_length=100,default='pending')

    def __str__(self):
        return self.title