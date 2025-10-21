from django import forms
from instructorapp.models import User


class InstructorCreateForm(forms.ModelForm):
    class Meta:
        model=User
        fields=['first_name','username','email','password']
        widgets={
            'first_name':forms.TextInput(attrs={'class':'form-control'}),
            'username':forms.TextInput(attrs={'class':'form-control'}),
            'email':forms.EmailInput(attrs={'class':'form-control'}),
            'password':forms.PasswordInput(attrs={'class':'form-control'}),
        }