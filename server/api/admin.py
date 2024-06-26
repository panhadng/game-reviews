from django.contrib import admin
from .models import *


# Register your models here.
models = [AppUser, Game, News, Playlist, Review]
for model in models:
    admin.site.register(model)
