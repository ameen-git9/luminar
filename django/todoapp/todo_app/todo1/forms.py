from django import forms
from django.contrib.auth.models import User
from todo1.models import Todo


class UserRegisterForm(forms.ModelForm):
    class Meta:
        model=User
        fields=['username','password','email']


class UserLogin(forms.ModelForm):
    class Meta:
        model=User
        fields=['username','password']


class TodoForm(forms.ModelForm):
    class Meta:
        model=Todo
        fields=['title','content','due_date']
        widgets={
            'title':forms.TextInput(attrs={'class':'form-control'}),
            'content':forms.Textarea(attrs={'class':'form-control'}),
            'due_date':forms.DateInput(attrs={'class':'form-control','type':'date'}),
        }


class TodoEditForm(forms.ModelForm):
    class Meta:
        model=Todo
        fields=['title','content','due_date','status']
        widgets={
            'title':forms.TextInput(attrs={'class':'form-control'}),
            'content':forms.Textarea(attrs={'class':'form-control'}),
            'due_date':forms.DateInput(attrs={'class':'form-control','type':'date'}),
            'status':forms.Select(attrs={'class':'form-select'}),
        }
