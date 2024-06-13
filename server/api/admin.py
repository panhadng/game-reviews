from django.contrib import admin
from .models import *


# Register your models here.
models = [User, Game, News]
for model in models:
    admin.site.register(model)
