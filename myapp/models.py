from django.db import models
from phone_field import PhoneField

# Create your models here.
class User(models.Model):
	first_name = models.CharField(max_length=20)
	last_name = models.CharField(max_length=20)
	email = models.CharField(max_length=50)
	phone = PhoneField(blank=True, help_text="Contact Phone Number")