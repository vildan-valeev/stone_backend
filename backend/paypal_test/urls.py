from django.urls import path
from . import views
from .views import ProductListCreate, ProductDetail

urlpatterns = [
    path('', views.store, name="store"),
    path('checkout/<int:pk>/', views.checkout, name="checkout"),
    path('complete/', views.paymentComplete, name="complete"),

    path('paypal/product/', ProductListCreate.as_view()),
    path('paypal/product/<int:pk>/', ProductDetail.as_view()),

    path('paypal/order/', ProductListCreate.as_view()),
    path('paypal/order/<int:pk>/', ProductDetail.as_view()),
]
