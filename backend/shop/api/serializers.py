from rest_framework import serializers

from shop.models import Item, ItemMaterial, ItemMaterialColor, ItemType, CartItem, Cart, Order, Support, OrderStatus


class ItemMaterialSerializer(serializers.ModelSerializer):
    """Сериализатор материала товара"""

    class Meta:
        model = ItemMaterial
        fields = '__all__'


class ItemMaterialColorSerializer(serializers.ModelSerializer):
    """Сериализатор цвет товара"""

    class Meta:
        model = ItemMaterialColor
        fields = '__all__'


class ItemTypeSerializer(serializers.ModelSerializer):
    """Сериализатор тип товара"""

    class Meta:
        model = ItemType
        fields = '__all__'


class ItemDetailedSerializer(serializers.ModelSerializer):
    """Сериализатор товара"""
    type = ItemTypeSerializer()
    material = ItemMaterialSerializer()
    item_material_color = ItemMaterialColorSerializer(many=True)

    class Meta:
        model = Item
        fields = '__all__'


class ItemSerializer(serializers.ModelSerializer):
    """Сериализатор товара"""

    class Meta:
        model = Item
        fields = '__all__'


class CartItemSerializer(serializers.ModelSerializer):
    """Сериализатор товара в корзине"""
    customer = serializers.PrimaryKeyRelatedField(read_only=True,)

    class Meta:
        model = CartItem
        fields = '__all__'


class CartItemDetailSerializer(serializers.ModelSerializer):
    """Сериализатор товара в корзине"""
    customer = serializers.PrimaryKeyRelatedField(read_only=True,)
    item = ItemSerializer()

    class Meta:
        model = CartItem
        fields = '__all__'


class CartSerializer(serializers.ModelSerializer):
    """Сериализатор корзины"""
    customer = serializers.PrimaryKeyRelatedField(read_only=True,)

    class Meta:
        model = Cart
        fields = '__all__'


class CartRetrieveSerializer(serializers.ModelSerializer):
    """Сериализатор корзине - просмотр"""
    customer = serializers.PrimaryKeyRelatedField(read_only=True,)
    related_items = CartItemDetailSerializer(many=True)

    class Meta:
        model = Cart
        # TODO: add exclude instead of fields
        fields = ['id', 'customer', 'total_items', 'final_price', 'created', 'related_items', 'updated', ]


class OrderSerializer(serializers.ModelSerializer):
    """Сериализатор заказа"""
    customer = serializers.PrimaryKeyRelatedField(read_only=True,)

    class Meta:
        model = Order
        fields = '__all__'


class OrderStatusSerializer(serializers.ModelSerializer):
    class Meta:
        model = OrderStatus
        fields = '__all__'


class OrderDetailSerializer(serializers.ModelSerializer):
    """Сериализатор заказа - просмотр"""
    cart = CartRetrieveSerializer()
    status = OrderStatusSerializer()

    class Meta:
        model = Order
        fields = '__all__'


class SupportSerializer(serializers.ModelSerializer):
    """Сериализатор сообщения в техподдержку"""
    user = serializers.PrimaryKeyRelatedField(read_only=True,)

    class Meta:
        model = Support
        fields = '__all__'


class PayPalOrderSerializer(serializers.ModelSerializer):
    """Сериализатор оплаты"""
    email = serializers.EmailField(required=True)
    first_name = serializers.CharField(max_length=200, required=False)
    last_name = serializers.CharField(max_length=200, required=False)
    phone = serializers.CharField(max_length=200, required=False)
    address = serializers.CharField(max_length=200, required=False)
    city = serializers.CharField(max_length=200, required=False)
    state = serializers.CharField(max_length=200, required=False)
    zip = serializers.CharField(max_length=200, required=False)
    paypal_id = serializers.CharField(max_length=200, required=False)
    cart_items = CartItemSerializer(many=True)

    class Meta:
        model = Cart
        fields = ['email',
                  'first_name',
                  'last_name',
                  'phone',
                  'address',
                  'city',
                  'state',
                  'zip',
                  'paypal_id',
                  'cart_items',
                  'total_items',
                  'final_price'
                  ]
