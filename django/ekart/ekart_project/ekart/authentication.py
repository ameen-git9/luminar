from django.shortcuts import redirect
from django.contrib import messages


def login_requied(fn):
    def wrapper(request,*args,**kwargs):
        if not request.user.is_authenticated:
            messages.warning(request,"You must login first!")
            return redirect("userloginview")
        else:
            return fn(request,*args,**kwargs)
    return wrapper