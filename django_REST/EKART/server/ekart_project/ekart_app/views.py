from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from rest_framework.response import Response
from ekart_app.models import Product,Cart,Category
from ekart_app.serializer import ProductSerializers,CartSerializer
from rest_framework.decorators import action
from rest_framework import permissions,authentication

# Create your views here.

class ProductView(ModelViewSet):
    queryset=Product.objects.all()
    serializer_class=ProductSerializers


    @action(methods=['POST'],detail=True,authentication_classes=[authentication.TokenAuthentication],permissions_classes=[permissions.IsAuthenticated])
    def add_to_cart(self,request,*args,**kwargs):
        product=Product.objects.get(id=kwargs.get('pk'))
        user=request.user
        serializer=CartSerializer(data=request.data)
        if serializer.is_valid():
            Cart.objects.create(**serializer.validated_data,user_instance=user,product_instance=product)
            return Response(data=serializer.data)
