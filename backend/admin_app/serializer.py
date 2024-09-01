from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Category, Products


class Registration_serializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = ("username", "email", "password")

    def create(self, validate_data):
        user = User.objects.create(
            username=validate_data["username"],
            email=validate_data["email"],
            password=validate_data["password"],
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
