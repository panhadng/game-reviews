from rest_framework import serializers
from .models import *
from django.forms import ValidationError
from django.contrib.auth import get_user_model, authenticate


# auth serializers
UserModel = get_user_model()


class UserSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(source='user_id')

    class Meta:
        model = UserModel
        fields = ('username', 'id')


class UserRegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserModel
        fields = "__all__"

    def create(self, clean_data):
        user_obj = UserModel.objects.create_user(
            username=clean_data['username'],
            password=clean_data['password']
        )
        user_obj.save()
        return user_obj


class UserLoginSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField()

    def check_user(self, clean_data):
        username = clean_data.get('username')
        password = clean_data.get('password')

        if username and password:
            user = authenticate(username=username, password=password)
            if user:
                return user
            raise ValidationError('Invalid username or password')

        raise ValidationError('Username and password must be provided')
    
    
# class UserLoginSerializer(serializers.Serializer):
#     username = serializers.CharField()
#     password = serializers.CharField()

#     def check_user(self, clean_data):
#         user = authenticate(
#             username=clean_data['username'],
#             password=clean_data['password'],
#         )
#         if not user:
#             raise ValidationError('user not found')
#         return user


# app serializers
class NewsSerializer(serializers.ModelSerializer):
    class Meta:
        model = News
        fields = '__all__'


class ReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = '__all__'


class GameSerializer(serializers.ModelSerializer):
    class Meta:
        model = Game
        fields = '__all__'


class PlaylistSerializer(serializers.ModelSerializer):
    class Meta:
        model = Playlist
        fields = '__all__'
