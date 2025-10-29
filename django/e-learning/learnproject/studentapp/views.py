from django.shortcuts import render,redirect
from django.views import View
from instructorapp.models import Course,Category,User,Cart
from instructorapp.forms import InstructorCreateForm
from django.contrib.auth import authenticate,login,logout
from django.contrib import messages
from django.utils.decorators import method_decorator
from django.contrib.auth.decorators import login_required
from decimal import Decimal


# Create your views here.
RZP_KEY_ID="rzp_test_RZC0r3OUTZnaVf"
RZP_KEY_SECRET="iXPshm3N14IB0S4sqr5H4gA3"

class StudentReg(View):
    def get(self,request):
       
        return render (request,'student_register.html')
    
    def post(self,request):
        fname=request.POST.get('first_name')
        uname=request.POST.get('username')
        email=request.POST.get('email')
        password=request.POST.get('password')
        print(fname,uname,email,password)
        try:
            User.objects.create_user(first_name=fname,username=uname,email=email,password=password)
            messages.warning(request,'Registration successfull')
            return redirect('studentlogin')
        except:
            messages.warning(request,'Invalid inputs')
            return redirect('studentregister')
        

    


class StudentLogin(View):
    def get(self,request):
        return render(request,'student_register.html')
    
    def post(self,request):
        uname=request.POST.get('username')
        password=request.POST.get('password')
        res=authenticate(request,username=uname,password=password)
        if res:
            login(request,res)
            if res.role=='student':
                return redirect('studenthome')



class StudentHome(View):
    def get(self,request):
       
        courses=Course.objects.all()
        return render(request,"student_home.html",{'courses':courses})
    


class CourseDetails(View):
    def get(self,request,**kwargs):
        course=Course.objects.get(id=kwargs.get("id"))
        return render(request,'course_details.html',{'course':course})
def login_required(fn):
    def wrapper(request,*args,**kwargs):
        if not request.user.is_authenticated:
            return redirect('studentlogin')
        else:
            return fn(request,*args,**kwargs)
    return wrapper

    


@method_decorator(login_required,name="dispatch")
class AddToCart(View):
    def get(self,request,**kwargs):
        course_instance=Course.objects.get(id=kwargs.get("id"))
        user_instance=request.user
        res_instance,create=Cart.objects.get_or_create(course=course_instance,user=user_instance)
        return redirect('studenthome')


        

class StudentLogout(View):
    def get(self,request):
        logout(request)
        return redirect("studentlogin")
    
     

@method_decorator(login_required,name="dispatch")
class CartSummary(View):
    def get(self,request):
        cart_list=Cart.objects.filter(user=request.user)
        subtotal=sum(item.course.price for item in cart_list)
        tax_rate=Decimal('0.10')
        tax=subtotal * tax_rate
        total=subtotal + tax
        return render(request,'cart_summary.html',{'cart_list':cart_list,'subtotal':subtotal,'tax':tax,'total':total})
    


class DeleteCart(View):
    def get(self,request,**kwargs):
        Cart.objects.get(id=kwargs.get('id')).delete()
        return redirect('cartsummary')