from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from rest_framework.response import Response
from ekart_app.models import Product,Cart,Category,Order,Review
from ekart_app.serializer import ProductSerializers,CartSerializer,Userserializer,OrderSerializer,Reviewserializer
from rest_framework.decorators import action
from rest_framework import permissions,authentication
from django.contrib.auth.models import User

# Create your views here.

class ProductView(ModelViewSet):
    queryset=Product.objects.all()
    serializer_class=ProductSerializers


    @action(methods=['POST'],detail=True,authentication_classes=[authentication.TokenAuthentication],permission_classes=[permissions.IsAuthenticated])
    def add_to_cart(self,request,*args,**kwargs):
        product=Product.objects.get(id=kwargs.get('pk'))
        user=request.user
        serializer=CartSerializer(data=request.data)
        if serializer.is_valid():
            Cart.objects.create(**serializer.validated_data,user_instance=user,product_instance=product)
            return Response(data=serializer.data)
        
    @action(methods=['POST'],detail=True,authentication_classes=[authentication.TokenAuthentication],permission_classes=[permissions.IsAuthenticated])
    def add_review(self,request,*args,**kwargs):
        try:
            user=request.user
            product=product.objects.get(id=kwargs.get('pk'))
            serializer=Reviewserializer(data=request.data)
            if serializer.is_valid():
                try:
                    Cart.objects.create(**serializer.validated_data,user_instance=user,product_instance=product)
                    return Response(data=serializer.data)
                except:
                    return Response({'msg':'already exist'})
        except:
            return Response({'msg':'matching query doesnot exist'})

    @action(methods=['GET'],detail=True)
    def review_list(self, request, *args, **kwargs):
        product=Product.objects.get(id=kwargs.get('pk'))
        review=Review.objects.filter(product_instance=product)
        serializer=Reviewserializer(review,many=True)
        return Response(data=serializer.data)















class UserView(ModelViewSet):
    queryset=User
    serializer_class=Userserializer

    def create(self, request,**kwargs):
        serailizer=Userserializer(data=request.data)
        if serailizer.is_valid():
            User.objects.create_user(**serailizer.validated_data)
            return Response(data=serailizer.data)
        else:
            return Response(data=serailizer.error_messages)

    @action(methods=['GET'],detail=True)
    def cart_list(self,request, *args, **kwargs):
        user=User.objects.get(id=kwargs.get('pk'))
        cart=Cart.objects.get(user_instance=user)
        serializer=CartSerializer(cart,many=True)
        return Response(data=serializer.data)


class CartView(ModelViewSet):
    queryset=Cart.objects.all()
    serializer_class=CartSerializer

    @action(methods=['POST'],detail=True,authentication_classes=[authentication.TokenAuthentication],permission_classes=[permissions.IsAuthenticated])
    def place_order (self, request, *args, **kwargs):
        cart=Cart.objects.get(id=kwargs.get("pk"))
        user=request.user
        serializer=OrderSerializer(data=request.data)
        if serializer.is_valid():
            Order.objects.create(**serializer.validated_data,user_instance=user,cart_instance=cart)
            cart.status="order-placed"
            cart.save()
            return Response({'msg':'order placed'})
        else:
            return Response(data=serializer.errors)
