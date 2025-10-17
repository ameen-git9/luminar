from django.shortcuts import render,redirect
from django.views import View
from blogapp.forms import UserRegisterForm,UserLoginForm,UpdateForm,CreateBlogForm
from django.contrib.auth.models import User
from django.contrib.auth import authenticate,login,logout
from django.contrib import messages
from blogapp.models import Blog,Comment

# Create your views here.


class HomeView(View):
    def get(self,request):
        user=User.objects.all()
        return render(request,"home.html",{"user":user})
    

class UserRegView(View):
    def get(self,request):
        form=UserRegisterForm()
        return render(request,"user_reg.html",{"form":form})
    def post(self,request):
        blog=UserRegisterForm(request.POST)
        if blog.is_valid():            
            User.objects.create_user(**blog.cleaned_data)
            messages.success(request,"Registration Succeful")
            return redirect("login")
        else:
            messages.error(request,"user already exist")
            return redirect("register")
        

class UserLoginView(View):
    def get(self,request):
        form=UserLoginForm()
        return render(request,'user_login.html',{'form':form})
    
    def post(self,request):
        username=request.POST.get("username")
        password=request.POST.get("password")
        usertype=request.POST.get("usertype")
        res=authenticate(request,username=username,password=password)
        if res:
            login(request,res)
            messages.success(request,"login success")
            if usertype=="reader":
                return redirect("reader")
            else:
                return redirect("writer")

        else:
            messages.error(request,"invalid User")
            return redirect("login")
        



class WriterView(View):
    def get(self,request):
        user=request.user
        blog=Blog.objects.filter(user_id=request.user)
        return render(request,"writer.html",{"blog":blog,"user":user})

class ReaderView(View):
    def get(self,request):
        blog=Blog.objects.all()  
        return render(request,"reader.html",{"blog":blog})




class CreateView(View):
    def get(self,request):
        form=CreateBlogForm()
        return render(request,"createblog.html",{"form":form})
    
    def post(self,request):
        blog=CreateBlogForm(request.POST,request.FILES)
        if blog.is_valid():
            Blog.objects.create(**blog.cleaned_data,user_id=request.user)
            messages.success(request,"blog added")
            return redirect("writer")
        



class DeleteView(View):
    def get(self,request,**kwargs):
        blog=Blog.objects.get(id=kwargs.get("id"))
        blog.delete()
        messages.warning(request,"blog deleted")
        return redirect("writer")
    





class UpdateBlogView(View):
    def get(self,request,**kwargs):
        blog=Blog.objects.get(id=kwargs.get("id"))
        form=CreateBlogForm(instance=blog)
        return render(request,"updateblog.html",{"form":form})
    def post(self,request,**kwargs):
        blog=Blog.objects.get(id=kwargs.get("id"))
        form_instance=CreateBlogForm(request.POST,request.FILES,instance=blog)
        if form_instance.is_valid():
            form_instance.save()
            messages.success(request,"Blog Updated successfully")
            return redirect("writer")
        else:
            print(form_instance.errors)
            messages.error(request,"Somthing Wrong")
            return redirect("writer")
        




class UpdateProfileView(View):
    def get(self,request,*args,**kwargs):
        user=User.objects.get(id=kwargs.get("id"))
        form=UpdateForm(instance=user)
        return render(request,"updateprofile.html",{"form":form})
    def post(self,request,*args,**kwargs):
        user=User.objects.get(id=kwargs.get("id"))
        form=UpdateForm(request.POST,instance=user)
        if form.is_valid():
            form.save()
            messages.success(request,"profile updated succesfully")
            return redirect("writer")
        else:
            messages.error(request,"somthing went wrong")
            return redirect("updateprofile",user.id)











class ViewMoreView(View):
    def get(self,request,**kwargs):
        blog=Blog.objects.get(id=kwargs.get("id"))
        comment=Comment.objects.filter(blog=kwargs.get("id"))
        
        return render(request,"blog-details.html",{"blog":blog,"comment":comment})
    def post(self,request,**kwargs):
        user=request.user
        blog=Blog.objects.get(id=kwargs.get("id"))
        comment=request.POST.get("comment")
        Comment.objects.create(comment=comment,user=user,blog=blog)
        messages.success(request,"comment added")
        return redirect("viewblog",id=blog.id)




class LogoutView(View):
    def get(self,request):
        logout(request)
        messages.warning(request,"Logout")
        return redirect("login")