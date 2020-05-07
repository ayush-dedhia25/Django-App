from django.shortcuts import render, redirect
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
import requests
import json
from . models import User

# Create your views here.
def index(request):
	if request.session.has_key('date1'):
		dateOne = request.session['date1']
		print("From Index", dateOne)
	
	if request.session.has_key('date2'):
		dateTwo = request.session['date2']
		print(dateTwo)
	print("From index view")
	
	return render(request, 'app/app.html')

@csrf_exempt
def post(request):
	if request.method == "POST":
		date1 = request.POST['date_first']
		date2 = request.POST['date_last']
		
		print(date1)
		
		request.session['date1'] = date1
		request.session['date2'] = date2
		
		return redirect('/')