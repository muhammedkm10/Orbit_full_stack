from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializer import Registration_serializer, category_serializer, product_serializer
from django.contrib.auth.models import User
from django.contrib.auth import authenticate
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework_simplejwt.tokens import RefreshToken
from django.core.files.base import ContentFile
import base64
from .models import Category, Products



# registarion
class Registration(APIView):
    def post(self, request):
        serializer = Registration_serializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


#  login
class Login(APIView):
    def post(self, request):
        username = request.data.get("username")
        password = request.data.get("password")
        try:
            user = User.objects.get(username=username,is_staff = True)
        except:
            return Response(
                {"message": "Invalid credentials"}, status=status.HTTP_401_UNAUTHORIZED
            )
        if user is not None and user.check_password(password):
            refresh_token = RefreshToken.for_user(user)
            return Response(
                {
                    "access_token": str(refresh_token.access_token),
                    "refresh_token": str(refresh_token),
                    "user_id": user.id,
                    "username": user.username,
                },
                status=status.HTTP_200_OK,
            )
        else:
            return Response(
                {"message": "Invalid credentials"}, status=status.HTTP_401_UNAUTHORIZED
            )


# category management
class Category_management(APIView):
    def post(self, request):
        category_name = request.data.get("categoryname")
        if request.data.get("image"):
            image1_file = request.data.get("image")
            format, imgstr = image1_file.split(";base64,")
            ext = format.split("/")[-1]
            image_file = ContentFile(base64.b64decode(imgstr), name=f"image1.{ext}")
            category = Category(name=category_name, image=image_file)
            category.save()
        return Response(status=status.HTTP_201_CREATED)

    def get(self, request):
        queryset = Category.objects.all()
        serializer = category_serializer(queryset, many=True).data
        return Response({"data": serializer}, status=status.HTTP_200_OK)


# product management
class Product_management(APIView):
    def post(self, request, id):
        productname = request.data.get("productname")
        cat = Category.objects.get(id=id)
        if request.data.get("image"):
            image1_file = request.data.get("image")
            format, imgstr = image1_file.split(";base64,")
            ext = format.split("/")[-1]
            image_file = ContentFile(base64.b64decode(imgstr), name=f"image1.{ext}")
            product = Products(product_name=productname, image=image_file, category=cat)
            product.save()

        return Response(status=status.HTTP_201_CREATED)

    def get(self, request, id):
        queryset = Products.objects.filter(category__id=id)
        serializer = product_serializer(queryset, many=True).data
        return Response({"data": serializer}, status=status.HTTP_201_CREATED)


class CustomTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        token["email"] = user.email
        return token


class CustomTokenObtainPairView(TokenObtainPairView):
    serializer_class = CustomTokenObtainPairSerializer
