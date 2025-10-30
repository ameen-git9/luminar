"""
URL configuration for learnproject project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from instructorapp import views
from studentapp import views as studView
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('instructor/reg',views.InstructorView.as_view(),name='instructorreg'),
    path('student/home',studView.StudentHome.as_view(),name='studenthome'),
    path('course/details/<int:id>',studView.CourseDetails.as_view(),name='coursedetails'),
    path('student/register',studView.StudentReg.as_view(),name='studentregister'),
    path('student/login',studView.StudentLogin.as_view(),name='studentlogin'),
    path('addtocart/<int:id>',studView.AddToCart.as_view(),name='addtocart'),
    path('studentlogout',studView.StudentLogout.as_view(),name='logout'),
    path('cart/summary',studView.CartSummary.as_view(),name='cartsummary'),
    path('delete/cart/<int:id>',studView.DeleteCart.as_view(),name='deletecart'),
    path('payment',studView.CheckoutView.as_view(),name='payment'),
]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
