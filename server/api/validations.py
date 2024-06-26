from django.core.exceptions import ValidationError
from django.contrib.auth import get_user_model


UserModel = get_user_model()


def custom_validation(data):
    username = data['username'].strip()
    password = data['password'].strip()
    confirm_password = data['confirm_password'].strip()

    if not password or password != confirm_password:
        raise ValidationError(
            'choose another password, password does not match the confirmation password')

    if not username:
        raise ValidationError('choose another username')
    return data


def validate_username(data):
    username = data['username'].strip()
    if not username:
        raise ValidationError('choose another username')
    return True


def validate_password(data):
    password = data['password'].strip()
    if not password:
        raise ValidationError('a password is needed')
    return True
