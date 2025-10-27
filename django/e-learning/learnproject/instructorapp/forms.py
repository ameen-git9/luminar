from django import forms
from instructorapp.models import User


class InstructorCreateForm(forms.ModelForm):
    class Meta:
        model=User
        fields=['first_name','username','email','password']
        widgets={
            'first_name':forms.TextInput(attrs={'class':'w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent'}),
            'username':forms.TextInput(attrs={'class':'w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent'}),
            'email':forms.EmailInput(attrs={'class':'w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent'}),
            'password':forms.PasswordInput(attrs={'class':'w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent'}),
        }