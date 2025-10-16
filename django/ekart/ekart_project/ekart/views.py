from django.shortcuts import render,redirect
from django.views import View
from django.views.generic import TemplateView
from ekart.models import Product,Cart
from django.contrib.auth.models import User
from ekart.forms import UserRegisterForm,UserLogin,CartForm
from django.contrib.auth import authenticate,login,logout
from django.contrib import messages
from django.utils.decorators import method_decorator
from ekart.authentication import login_requied

# Create your views here.


class HomeView(View):
    def get(self,request):
        product=Product.objects.all()
        return render(request,'index.html',{'product':product})
    




class DetailsView(View):
    def get(self,request,**kwargs):
        id=kwargs.get("id")
        prod=Product.objects.get(id=id)
        return render(request, 'productview.html',{'product':prod})





class UserRegisterView(View):
    def get(self,request):
        form=UserRegisterForm()
        return render(request,'register.html',{'form':form})
    def post(self,request):
        form=UserRegisterForm(request.POST)
        if form.is_valid():
            User.objects.create_user(**form.cleaned_data)
            messages.success(request,"registration successfull")
            return redirect('userloginview')
        else:
            messages.warning(request,"invalid  uusername or password")
            return redirect('registerview')
        




class UserLoginView(View):
    def get(self,request):
        form=UserLogin()
        return render(request,'userlogin.html',{'form':form})
    
    def post(self,request):
        username=request.POST.get("username")
        password=request.POST.get("password")
        res=authenticate(request,username=username,password=password)
        if res:
            login(request,res)
            messages.success(request,"successfull")
            return redirect('homeview')
        else:
            messages.warning(request,"invalid username or password")
            return redirect('userlogview')
        


@method_decorator(login_requied,name="dispatch")
class AddCartView(View):
    def get(self,request,*args,**kwargs):
        form=CartForm()
        return render(request,'addtocart.html',{'form':form})
    
    def post(self,request,*args,**kwargs):
        product=Product.objects.get(id=kwargs.get('id'))
        user=request.user
        quantity=request.POST.get("quantity")
        cart_item=Cart.objects.filter(user=user,product=product).exclude(status="order-placed")
        if cart_item:
            cart_item[0].quantity+=int(quantity)
            cart_item[0].save()
            messages.success(request,'item added to cart')
            return redirect("homeview")
        else:

            Cart.objects.create(user=user,product=product,quantity=quantity)
            messages.success(request,'item added to cart')
            return redirect("homeview")
    


class LogoutView(View):
    def get(self,request):
        logout(request)
        return redirect("userloginview")
