from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Category, Products
from django.contrib.auth.hashers import make_password



class Registration_serializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = ("username", "email", "password")

    def create(self, validate_data):
        hashed_password = make_password(validate_data["password"])
        user = User.objects.create(
            username=validate_data["username"],
            email=validate_data["email"],
            password=hashed_password,
            is_staff = True,
            is_superuser=True
        )
        return user


class category_serializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ("id", "name", "image")


class product_serializer(serializers.ModelSerializer):
    class Meta:
        model = Products
        fields = ("id", "product_name", "image")
