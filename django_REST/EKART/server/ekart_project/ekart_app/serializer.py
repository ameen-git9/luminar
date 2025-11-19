from rest_framework import serializers
from ekart_app.models import Product,Cart

class ProductSerializers(serializers.ModelSerializer):
    id=serializers.IntegerField(read_only=True)
    class Meta:
        model=Product
        fields='_all_'

class CartSerializer(serializers.ModelSerializer):
    id=serializers.IntegerField(read_only=True)
    user_instance=serializers.CharField(read_only=True)
    product_instance=serializers.CharField(read_only=True)
    class Meta:
        model=Cart
        fields="__all__"