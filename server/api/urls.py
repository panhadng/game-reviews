from . import views
from rest_framework.routers import DefaultRouter
from django.urls import path, include


# api routes
router = DefaultRouter()
router.register("news", views.NewsViewSet, basename="news")
router.register("review", views.ReviewViewSet, basename="review")
router.register("game", views.GameViewSet, basename="game")
router.register("playlist", views.PlaylistViewSet, basename="playlist")

urlpatterns = [
    path('', include(router.urls)),
    path('register', views.UserRegister.as_view(), name='register'),
    path('login', views.UserLogin.as_view(), name='login'),
    path('logout', views.UserLogout.as_view(), name='logout'),
    path('user', views.UserList.as_view(), name='user-list'),
    path('user/<int:pk>', views.UserDetail.as_view(), name='user-detail'),
]
