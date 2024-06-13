from django.middleware.csrf import get_token
from rest_framework import viewsets, permissions, status
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.authtoken.models import Token
from django.contrib.auth import authenticate, login, logout
from django.http import Http404, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.db import IntegrityError
from .models import *
from .serializers import *
import json


# Login view
@csrf_exempt
def login_view(request):
    if request.method == "POST":
        data = json.loads(request.body.decode("utf-8"))
        username = data.get("username")
        password = data.get("password")

        if username and password:
            user = authenticate(request, username=username, password=password)

            if user is not None:
                login(request, user)
                token, _ = Token.objects.get_or_create(user=user)
                return JsonResponse({
                    "message": "Login successful.",
                    "user_id": user.pk,
                    "username": user.username,
                    "token": token.key
                })
            else:
                return JsonResponse({"error": "Invalid username and/or password."}, status=400)
        else:
            return JsonResponse({"error": "Username and password are required."}, status=400)
    else:
        return JsonResponse({"error": "Only POST requests are allowed."}, status=405)


# Logout View
@csrf_exempt
def logout_view(request):
    if request.method == "POST":
        logout(request)
        return JsonResponse({"message": "Logout successful."})
    else:
        return JsonResponse({"error": "Only POST requests are allowed."}, status=405)


# Registration View
@csrf_exempt
def register(request):
    if request.method == "POST":
        username = request.POST.get("username")
        password = request.POST.get("password")
        confirmation = request.POST.get("confirm_password")

        if password != confirmation:
            return JsonResponse({"error": "Passwords must match."}, status=400)

        try:
            user = User.objects.create_user(
                username=username, password=password)
        except IntegrityError:
            return JsonResponse({"error": "Username already taken."}, status=400)

        login(request, user)
        return JsonResponse({"message": "User created successfully.", "user_id": user.pk, "username": user.username})
    else:
        return JsonResponse({"error": "Only POST requests are allowed."}, status=405)


# Separate CSRF Token
def csrf_token(request):
    csrf_token = get_token(request)
    return JsonResponse({'csrfToken': csrf_token})


# User
class UserViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer


# Game ViewSet
class GameViewSet(viewsets.ModelViewSet):
    permission_classes = [permissions.AllowAny]
    queryset = Game.objects.all()
    serializer_class = GameSerializer

    def list(self, request):
        queryset = self.queryset
        serializer = self.serializer_class(queryset, many=True)
        return Response(serializer.data)

    def create(self, request):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def retrieve(self, request, pk=None):
        try:
            game = self.queryset.get(pk=pk)
        except Game.DoesNotExist:
            raise Http404
        serializer = self.serializer_class(game)
        return Response(serializer.data)

    def update(self, request, pk=None):
        try:
            game = self.queryset.get(pk=pk)
        except Game.DoesNotExist:
            raise Http404
        serializer = self.serializer_class(game, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def destroy(self, request, pk=None):
        try:
            game = self.queryset.get(pk=pk)
        except Game.DoesNotExist:
            raise Http404
        game.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


class PlaylistViewSet(viewsets.ModelViewSet):
    permission_classes = [permissions.AllowAny]
    queryset = Playlist.objects.all()
    serializer_class = PlaylistSerializer

    def list(self, request):
        user_id = request.query_params.get('user')
        try:
            user = User.objects.get(id=user_id)
        except User.DoesNotExist:
            return Response(status=status.HTTP_204_NO_CONTENT)

        queryset = self.queryset.filter(user=user)
        serializer = self.serializer_class(queryset, many=True)
        return Response(serializer.data)

    def create(self, request):
        user_id = request.data.get('user')
        game_id = request.data.get('game')

        try:
            user = User.objects.get(id=user_id)
            game = Game.objects.get(id=game_id)
        except User.DoesNotExist:
            return Response({'error': 'User does not exist'}, status=status.HTTP_400_BAD_REQUEST)
        except Game.DoesNotExist:
            return Response({'error': 'Game does not exist'}, status=status.HTTP_400_BAD_REQUEST)

        playlist_data = {
            'user': user.id,
            'game': game.id
        }
        serializer = PlaylistSerializer(data=playlist_data)
        if serializer.is_valid():
            serializer.save(user=user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    @action(detail=False, methods=['delete'], url_path='delete')
    def delete(self, request):
        user_id = request.data.get('user')
        game_id = request.data.get('game')

        try:
            user = User.objects.get(id=user_id)
            game = Game.objects.get(id=game_id)
        except User.DoesNotExist:
            return Response({'error': 'User does not exist'}, status=status.HTTP_400_BAD_REQUEST)
        except Game.DoesNotExist:
            return Response({'error': 'Game does not exist'}, status=status.HTTP_400_BAD_REQUEST)

        playlist_items = Playlist.objects.filter(user=user, game=game)
        if not playlist_items.exists():
            return Response({'error': 'No playlist items found for the given user and game'}, status=status.HTTP_404_NOT_FOUND)

        playlist_items.delete()
        return Response({'message': 'Playlist items deleted successfully'}, status=status.HTTP_204_NO_CONTENT)


# Review ViewSet
class ReviewViewSet(viewsets.ModelViewSet):
    permission_classes = [permissions.AllowAny]
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer

    def list(self, request):
        queryset = self.queryset
        serializer = self.serializer_class(queryset, many=True)
        return Response(serializer.data)

    def create(self, request):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def retrieve(self, request, pk=None):
        try:
            review = self.queryset.get(pk=pk)
        except Review.DoesNotExist:
            raise Http404
        serializer = self.serializer_class(review)
        return Response(serializer.data)

    def update(self, request, pk=None):
        try:
            review = self.queryset.get(pk=pk)
        except Review.DoesNotExist:
            raise Http404
        serializer = self.serializer_class(review, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def destroy(self, request, pk=None):
        try:
            review = self.queryset.get(pk=pk)
        except Review.DoesNotExist:
            raise Http404
        review.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


# News ViewSet
class NewsViewSet(viewsets.ModelViewSet):
    permission_classes = [permissions.AllowAny]
    queryset = News.objects.all()
    serializer_class = NewsSerializer

    def list(self, request):
        queryset = self.queryset
        serializer = self.serializer_class(queryset, many=True)
        return Response(serializer.data)

    def create(self, request):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def retrieve(self, request, pk=None):
        try:
            news = self.queryset.get(pk=pk)
        except News.DoesNotExist:
            raise Http404
        serializer = self.serializer_class(news)
        return Response(serializer.data)

    def update(self, request, pk=None):
        try:
            news = self.queryset.get(pk=pk)
        except News.DoesNotExist:
            raise Http404
        serializer = self.serializer_class(news, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def destroy(self, request, pk=None):
        try:
            news = self.queryset.get(pk=pk)
        except News.DoesNotExist:
            raise Http404
        news.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
