from django.db import models
from django.contrib.auth.base_user import BaseUserManager
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin


class AppUserManager(BaseUserManager):
    def create_user(self, username, password=None):
        if not username:
            raise ValueError('A username is required.')
        if not password:
            raise ValueError('A password is required.')
        # email = self.normalize_email(email)
        user = self.model(username=username)
        user.set_password(password)
        user.save()
        return user

    def create_superuser(self, username, password=None):
        if not username:
            raise ValueError('A username is required.')
        if not password:
            raise ValueError('A password is required.')
        user = self.create_user(username, password)
        user.is_superuser = True
        user.is_staff = True
        user.save()
        return user


class AppUser(AbstractBaseUser, PermissionsMixin):
    user_id = models.AutoField(primary_key=True)
    username = models.CharField(max_length=50, unique=True)
    USERNAME_FIELD = 'username'
    # REQUIRED_FIELDS = ['email']
    objects = AppUserManager()

    def __str__(self):
        return self.username


class Game(models.Model):
    title = models.CharField(unique=True, max_length=100)
    imageUrl = models.URLField(blank=True, null=True)
    igdbUrl = models.URLField(blank=True, null=True)
    category = models.CharField(max_length=100)
    genre = models.CharField(max_length=200)
    description = models.TextField(max_length=500, blank=True, null=True)
    published_date = models.DateField()
    rating = models.DecimalField(
        max_digits=3, decimal_places=1, blank=True, null=True)
    developer = models.CharField(max_length=100)
    publisher = models.CharField(max_length=100)

    def __str__(self):
        return self.title


class Playlist(models.Model):
    game = models.ForeignKey(
        Game, on_delete=models.CASCADE)
    user = models.ForeignKey(AppUser, on_delete=models.CASCADE)
    add_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.game} by {self.user}"


class Review(models.Model):
    user = models.ForeignKey(AppUser, on_delete=models.CASCADE)
    game = models.ForeignKey(
        Game, on_delete=models.CASCADE)
    published_date = models.DateTimeField(auto_now_add=True)
    description = models.TextField(max_length=2000)
    likes = models.PositiveBigIntegerField(default=0)

    def __str__(self):
        return f"Made by {self.user} on {self.game}"


class News(models.Model):
    headline = models.CharField(max_length=100)
    thumbnail = models.URLField(blank=True, null=True)
    subtitle = models.TextField(max_length=500)
    clicks = models.PositiveIntegerField(default=0)
    publisher = models.CharField(max_length=100)
    journalist = models.CharField(max_length=100)
    published_date = models.DateTimeField(auto_now_add=True)
    article = models.TextField(max_length=5000)

    def __str__(self):
        return f"{self.headline}, posted on {self.published_date}"
