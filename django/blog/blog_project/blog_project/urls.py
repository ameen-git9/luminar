"""
URL configuration for blog_project project.

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
from blogapp import views
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path("",views.HomeView.as_view(),name="home"),
    path("register",views.UserRegView.as_view(),name="register"),
    path("login",views.UserLoginView.as_view(),name="login"),
    path("logout",views.LogoutView.as_view(),name="logout"),
    path("write",views.WriterView.as_view(),name="writer"),
    path("reader",views.ReaderView.as_view(),name="reader"),
    path("create",views.CreateView.as_view(),name="create"),
    path("delete/<int:id>",views.DeleteView.as_view(),name="delete"),
    path("updateblog/<int:id>",views.UpdateBlogView.as_view(),name="updateblog"),
    path("updateprofile/<int:id>",views.UpdateProfileView.as_view(),name="updateprofile"),
    path("viewblog/<int:id>",views.ViewMoreView.as_view(),name="viewblog"),



]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
