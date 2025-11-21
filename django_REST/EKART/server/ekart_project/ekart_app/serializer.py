from rest_framework import serializers
from ekart_app.models import Product,Cart,User,Order,Review

class ProductSerializers(serializers.ModelSerializer):
    id=serializers.IntegerField(read_only=True)
    total_rating=serializers.FloatField(read_only=True)
    class Meta:
        model=Product
        fields='__all__'

class Userserializer(serializers.ModelSerializer):
    id=serializers.IntegerField(read_only=True)

    class Meta:
        model=User
        fields=['id','username', 'email', 'password']

class CartSerializer(serializers.ModelSerializer):
    id=serializers.IntegerField(read_only=True)
    user_instance=Userserializer(read_only=True)
    product_instance=ProductSerializers(read_only=True)
    class Meta:
        model=Cart
        fields='__all__'

class OrderSerializer(serializers.ModelSerializer):
    id=serializers.IntegerField(read_only=True)
    user_instance=Userserializer(read_only=True)
    cart_instance=CartSerializer(read_only=True)
    class Meta:
        model=Order
        fields='__all__'

class Reviewserializer(serializers.ModelSerializer):
    id=serializers.IntegerField(read_only=True)
    user_instance=Userserializer(read_only=True)
    product_instance=ProductSerializers(read_only=True)

    class Meta:
        model=Review
        fields='__all__'
