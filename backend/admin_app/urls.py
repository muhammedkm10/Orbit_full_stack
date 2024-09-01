from django.urls import path
from .views import Registration, Login, Category_management, Product_management
from .views import CustomTokenObtainPairView
from rest_framework_simplejwt.views import TokenRefreshView

urlpatterns = [
    path("api/token", CustomTokenObtainPairView.as_view(), name="token_obtain_pair"),
    path("api/token/refresh", TokenRefreshView.as_view(), name="token_refresh"),
    path("adminside/registration/", Registration.as_view()),
    path("adminside/login/", Login.as_view()),
    path("adminside/categorymanagement/", Category_management.as_view()),
    path("adminside/product_management/<str:id>", Product_management.as_view()),
]
