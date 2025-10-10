from django.shortcuts import render,redirect
from django.views import View
from django.views.generic import TemplateView,ListView,CreateView
from todo1.forms import UserRegisterForm,UserLogin,TodoForm,TodoEditForm
from django.http import HttpResponse
from django.contrib import messages
from django.contrib.auth.models import User
from django.contrib.auth import authenticate,login,logout
from todo1.models import Todo

# Create your views here.
class UserRegisterView(View):
    def get(self,request):
        form=UserRegisterForm()
        return render(request,'register.html',{'form':form})
    def post(self,request):
        form=UserRegisterForm(request.POST)
        if form.is_valid():
            User.objects.create_user(**form.cleaned_data)
            messages.success(request,"registration successfull")
            return redirect('logview')
        else:
            messages.warning(request,"invalid  uusername or password")
            return redirect('register')
        


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
            return redirect('logview')
    

    
# class HomeView(View):
#     def get(self,request):
#         if request.user.is_authenticated:
#             todo=Todo.objects.filter(user=request.user,status="pending")
#             return render(request,'home.html',{'todo':todo})
#         else:
#             messages.warning(request,'You must login first')
#             return render(request,"home.html",{'msg':'no data'})
    
    

class HomeView(TemplateView):
    template_name='home.html'
    def get_context_data(self, **kwargs):
        context=super().get_context_data(**kwargs)
        context['todo']=Todo.objects.filter(user=self.request.user,status="pending")
        return context


class TodoCreateView(View):
    def get(self,request):
        form=TodoForm()
        return render(request,'todocreate.html',{'form':form})
    
    def post(self,request):
        form_instance=TodoForm(request.POST)
        if form_instance.is_valid():
            Todo.objects.create(**form_instance.cleaned_data,user=request.user)
            messages.success(request,'TODO ADDED')
            return redirect('homeview')

class DeleteTodo(View):
    def get(self, request, **kwargs):
        todo_id=kwargs.get("id")   
        todo=Todo.objects.get(id=todo_id)
        todo.delete()
        messages.success(request,"TODO deleted successfully")
        return redirect("homeview")
    
class UpdateTodo(View):
    def get(self,request,**kwargs):
        todo=Todo.objects.get(id=kwargs.get("id"))
        form=TodoEditForm(instance=todo)
        print("+++++++++++++++++++++++++++++")
        return render(request,'todoupdate.html',{'form':form})
    
    def post(self,request,**kwargs):
        todo=Todo.objects.get(id=kwargs.get("id"))
        form=TodoEditForm(request.POST,instance=todo)
        print(form)
        if form.is_valid():
            form.save()
            messages.warning(request,"Todo updated succesfully")
            return redirect("homeview") 
        else:
            messages.warning(request,"can't update")
            return redirect('homeview') 

class Logout(View):
    def get(self,request):
        logout(request)
        messages.success(request,'logout successfully')
        return redirect("logview")