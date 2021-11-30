from rest_framework import serializers

from .models import Product, Order


class OrderSerializer(serializers.ModelSerializer):
    """Сериализатор товара в корзине"""

    class Meta:
        model = Order
        fields = '__all__'


class ProductSerializer(serializers.ModelSerializer):
    """Сериализатор сообщения в техподдержку"""

    class Meta:
        model = Product
        fields = '__all__'
