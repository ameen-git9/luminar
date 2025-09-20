from django import forms
from empapp1.models import Employee


class Employeesform(forms.Form):
    name=forms.CharField(widget=forms.TextInput(attrs={'class':'form-control','placeholder':'Name'}))
    salary=forms.IntegerField(widget=forms.TextInput(attrs={'class':'form-control','placeholder':'salary'}))
    designation=forms.CharField(widget=forms.TextInput(attrs={'class':'form-control','placeholder':'designation'}))
    email=forms.EmailField(widget=forms.TextInput(attrs={'class':'form-control','placeholder':'email'}))
    phone=forms.IntegerField(widget=forms.TextInput(attrs={'class':'form-control','placeholder':'phone'}))


    # modelform

class EmployeeModelForm(forms.ModelForm):
    class Meta:
        model=Employee
        fields="__all__"
        widgets={
            'name':forms.TextInput(attrs={'class':'form-control','placeholder':'Name'}),
            'salary':forms.NumberInput(attrs={'class':'form-control','placeholder':'Name'}),
            'designation':forms.TextInput(attrs={'class':'form-control','placeholder':'Name'}),
            'email':forms.EmailField(attrs={'class':'form-control','placeholder':'Name'}),
            'phone':forms.NumberInput(attrs={'class':'form-control','placeholder':'Name'})
        }

