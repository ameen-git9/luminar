from django import forms
from django.contrib.auth.models import User
from blogapp.models import Blog



class UserRegisterForm(forms.ModelForm):
    class Meta:
        model=User
        fields=["username","password","email"]

        widgets={
            'username':forms.TextInput(attrs={'class':'form-control'}),
            'password':forms.PasswordInput(attrs={'class':'form-control'}),
            'email':forms.EmailInput(attrs={'class':'form-control'}),
        }


class UserLoginForm(forms.Form):
    username=forms.CharField(widget=forms.TextInput(attrs={'class':'form-control'}))
    password=forms.CharField(widget=forms.PasswordInput(attrs={'class':'form-control'}))
    options=(
        ('reader','reader'),
        ('writer','writer')
    )
    usertype=forms.ChoiceField(choices=options,widget=forms.Select(attrs={'class':'form-select'}))


class CreateBlogForm(forms.ModelForm):
    class Meta:
        model=Blog
        fields=["title","content","blog_pic"]
        widgets={
            'title':forms.TextInput(attrs={'class':'form-control'}),
            'content':forms.Textarea(attrs={'class':'form-control'})
        }


class UpdateForm(forms.ModelForm):
    class Meta:
        model = User
        fields=["username","email"]

        widgets={
            'username':forms.TextInput(attrs={'class':'form-control'}),
            'email':forms.EmailInput(attrs={'class':'form-control'})
        }