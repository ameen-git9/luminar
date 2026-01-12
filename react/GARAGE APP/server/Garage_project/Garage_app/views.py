from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.viewsets import ModelViewSet
from Garage_app.models import Customer,Service
from Garage_app.serializer import CustomerSerialiser,ServiceSerialiser
from rest_framework.decorators import action
from rest_framework import status

# Create your views here.
class CustomerViewset(ModelViewSet):
    queryset=Customer.objects.all()
    serializer_class=CustomerSerialiser


    def destroy(self, request, *args, **kwargs):
        customer=Customer.objects.get(id=kwargs.get("pk"))
        services=Service.objects.filter(customer=customer)
        s=[serv.status for serv in services if serv.status=="pending"]
        if s:
            return Response({'msg':'service pending'},status=status.HTTP_501_NOT_IMPLEMENTED)
        else:
            customer.delete()
            return Response({'msg':'data deleted'},status=status.HTTP_200_OK)




    @action(methods=['POST'],detail=True)
    def add_service(self,request,*args,**kwargs):
        customer=Customer.objects.get(id=kwargs.get("pk"))
        serialiser=ServiceSerialiser(data=request.data)
        if serialiser.is_valid():
            Service.objects.create(**serialiser.validated_data,customer=customer)
            return Response(data=serialiser.data)
        else:
            return Response(data=serialiser.errors)
        
    @action(methods=['GET'],detail=True)
    def list_service(self,request,*args,**kwargs):
        customer=Customer.objects.get(id=kwargs.get("pk"))
        servicer=Service.objects.filter(customer=customer)
        serialiser=ServiceSerialiser(servicer,many=True)
        return Response(data=serialiser.data)



class ServiceViewset(ModelViewSet):
    queryset=Service.objects.all()
    serializer_class=ServiceSerialiser