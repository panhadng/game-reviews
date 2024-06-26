from django.contrib.auth import login, logout
from rest_framework import viewsets, permissions, status
from rest_framework.decorators import action
from rest_framework.authentication import SessionAuthentication
from rest_framework.views import APIView
from rest_framework.response import Response
from django.http import Http404
from .models import *
from .serializers import *
from .validations import custom_validation, validate_username, validate_password


class UserRegister(APIView):
    permission_classes = (permissions.AllowAny,)

    def post(self, request):
        clean_data = custom_validation(request.data)
        serializer = UserRegisterSerializer(data=clean_data)
        if serializer.is_valid(raise_exception=True):
            user = serializer.create(clean_data)
            if user:
                return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(status=status.HTTP_400_BAD_REQUEST)


class UserLogin(APIView):
    permission_classes = (permissions.AllowAny,)
    authentication_classes = (SessionAuthentication,)

    def post(self, request):
        data = request.data
        assert validate_username(data)
        assert validate_password(data)
        serializer = UserLoginSerializer(data=data)
        if serializer.is_valid(raise_exception=True):
            user = serializer.check_user(data)
            login(request, user)
            return Response(serializer.data, status=status.HTTP_200_OK)


class UserLogout(APIView):
    permission_classes = (permissions.AllowAny,)
    authentication_classes = ()

    def post(self, request):
        logout(request)
        return Response(status=status.HTTP_200_OK)


class UserView(APIView):
    permission_classes = (permissions.IsAuthenticated,)
    authentication_classes = (SessionAuthentication,)

    def get(self, request):
        serializer = UserSerializer(request.user)
        return Response({'user': serializer.data}, status=status.HTTP_200_OK)


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
            user = AppUser.objects.get(id=user_id)
        except AppUser.DoesNotExist:
            return Response(status=status.HTTP_204_NO_CONTENT)

        queryset = self.queryset.filter(user=user)
        serializer = self.serializer_class(queryset, many=True)
        return Response(serializer.data)

    def create(self, request):
        user_id = request.data.get('user')
        game_id = request.data.get('game')

        try:
            user = AppUser.objects.get(id=user_id)
            game = Game.objects.get(id=game_id)
        except AppUser.DoesNotExist:
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
            user = AppUser.objects.get(id=user_id)
            game = Game.objects.get(id=game_id)
        except AppUser.DoesNotExist:
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
