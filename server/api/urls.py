from . import views
from rest_framework.routers import DefaultRouter
from django.urls import path, include


# api routes
router = DefaultRouter()
router.register("user", views.UserViewSet, basename="user")
router.register("news", views.NewsViewSet, basename="news")
router.register("review", views.ReviewViewSet, basename="review")
router.register("game", views.GameViewSet, basename="game")
router.register("playlist", views.PlaylistViewSet, basename="playlist")

urlpatterns = [
    path('', include(router.urls)),
    path('csrf', views.csrf_token, name='csrf'),
    path('register', views.register, name='register'),
    path('login', views.login_view, name='login'),
    path('logout', views.logout_view, name='logout'),
]
