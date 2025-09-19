from django import forms


class Employeesform(forms.Form):
    name=forms.CharField(widget=forms.TextInput(attrs={'class':'form-control','placeholder':'Name'}))
    salary=forms.IntegerField(widget=forms.TextInput(attrs={'class':'form-control','placeholder':'salary'}))
    designation=forms.CharField(widget=forms.TextInput(attrs={'class':'form-control','placeholder':'designation'}))
    email=forms.CharField(widget=forms.TextInput(attrs={'class':'form-control','placeholder':'email'}))
    phone=forms.IntegerField(widget=forms.TextInput(attrs={'class':'form-control','placeholder':'phone'}))