from django.urls import path

from shop.api.views import *

urlpatterns = [
    # urls for api
    path('item/', ItemList.as_view(), name='item_list'),
    path('item/<int:pk>/', ItemDetail.as_view()),

    path('item_material/', ItemMaterialList.as_view(), name='item_materials_list'),
    # path('item_material/<int:pk>/', ItemMaterialDetail.as_view()),

    path('item_material_color/', ItemMaterialColorList.as_view()),
    # path('item_material_color/<int:pk>/', ItemMaterialColorDetail.as_view()),

    path('item_type/', ItemTypeList.as_view()),
    # path('item_type/<int:pk>/', ItemTypeDetail.as_view()),

    path('cart_item/', CartItemCreate.as_view()),

    path('cart_item/<int:pk>/', CartItemDetail.as_view()),

    path('cart/', CartCreate.as_view()),
    path('cart/me/', CartUser.as_view()),
    path('cart/<int:pk>/', CartDetail.as_view()),

    path('order/', OrderCreate.as_view()),
    path('order/me/', OrderUser.as_view()),
    path('order/<int:pk>/', OrderDetail.as_view()),

    path('paypal_order/', PayPalOrder.as_view()),

    path('support/', SupportCreate.as_view()),
]
