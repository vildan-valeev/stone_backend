from django.core.mail import send_mail
from django.db.utils import IntegrityError
from rest_framework import status
from rest_framework.authentication import TokenAuthentication
from rest_framework.generics import ListAPIView, CreateAPIView, RetrieveAPIView, RetrieveDestroyAPIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework_json_api.django_filters import DjangoFilterBackend

from shop.api.serializers import *
from shop.models import *
from src.settings import DEFAULT_FROM_EMAIL, DOMAIN
from users.models import UserAccount


class ItemList(ListAPIView):
    queryset = Item.objects.all()
    serializer_class = ItemDetailedSerializer
    filter_backends = (DjangoFilterBackend,)
    filterset_fields = {'type': ('in',), 'material': ('in',), 'is_tile': ('exact',), 'price': ('gte', 'lte',)}


class ItemDetail(RetrieveAPIView):
    queryset = Item.objects.all()
    serializer_class = ItemSerializer


class ItemMaterialList(ListAPIView):
    queryset = ItemMaterial.objects.all()
    serializer_class = ItemMaterialSerializer


class ItemMaterialDetail(RetrieveAPIView):
    queryset = ItemMaterial.objects.all()
    serializer_class = ItemMaterialSerializer


class ItemMaterialColorList(ListAPIView):
    queryset = ItemMaterialColor.objects.all()
    serializer_class = ItemMaterialColorSerializer


class ItemMaterialColorDetail(RetrieveAPIView):
    queryset = ItemMaterialColor.objects.all()
    serializer_class = ItemMaterialColorSerializer


class ItemTypeList(ListAPIView):
    queryset = ItemType.objects.all()
    serializer_class = ItemTypeSerializer


class ItemTypeDetail(RetrieveAPIView):
    queryset = ItemType.objects.all()
    serializer_class = ItemTypeSerializer


class CartItemCreate(CreateAPIView):
    queryset = CartItem.objects.all()
    serializer_class = CartItemSerializer
    authentication_classes = (TokenAuthentication,)
    permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(customer=self.request.user)


class CartItemDetail(RetrieveDestroyAPIView):
    queryset = CartItem.objects.all()
    serializer_class = CartItemSerializer
    authentication_classes = (TokenAuthentication,)
    permission_classes = [IsAuthenticated]


class CartCreate(CreateAPIView):
    queryset = Cart.objects.all()
    serializer_class = CartSerializer
    authentication_classes = (TokenAuthentication,)
    permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(customer=self.request.user)


class CartUser(APIView):
    authentication_classes = (TokenAuthentication,)
    permission_classes = [IsAuthenticated]

    def get(self, request, *args, **kwargs):

        print(args)
        print(kwargs)
        print(request.user)
        # serializer.save(customer=self.request.user)
        carts = Cart.objects.filter(customer=request.user).exclude(order__customer=request.user)
        if carts.exists():
            cart = carts.last()
            serializer = CartRetrieveSerializer(cart)
            return Response(serializer.data, status=status.HTTP_200_OK, )
        else:
            cart = Cart.objects.create(customer=request.user)
            serializer = CartRetrieveSerializer(cart)
            return Response(serializer.data, status=status.HTTP_201_CREATED, )


class CartDetail(RetrieveAPIView):
    queryset = Cart.objects.all()
    serializer_class = CartRetrieveSerializer
    authentication_classes = (TokenAuthentication,)
    permission_classes = [IsAuthenticated]


class OrderCreate(CreateAPIView):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer
    authentication_classes = (TokenAuthentication,)
    permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(customer=self.request.user)


class OrderDetail(RetrieveAPIView):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer
    authentication_classes = (TokenAuthentication,)
    permission_classes = [IsAuthenticated]


class OrderUser(ListAPIView):
    serializer_class = OrderDetailSerializer
    authentication_classes = (TokenAuthentication,)
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return Order.objects.filter(customer=self.request.user.pk)


class SupportCreate(CreateAPIView):
    queryset = Support.objects.all()
    serializer_class = SupportSerializer
    authentication_classes = (TokenAuthentication,)
    permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


class PayPalOrder(APIView):
    """
    {
        "email": "dddd@ddd.ru",
        "first_name": "ddd",
        "last_name": "ddd",
        "phone": "ddd",
        "address": "ddd",
        "city": "ddd",
        "state": "ddd",
        "zip": "ddd",
        "paypal_id":"sgdrhgfchdghrthrtgh56456",
        "total_items": 1,
        "final_price": 245,
        "cart_items": [
            {
                "comment": "string",
                "height": 0,
                "width": 0,
                "length": 0,
                "armierung": true,
                "bohrung": 0,
                "ausschnitt": 0,
                "ausklinkung": 0,
                "polierte_kante": true,
                "qty_item": 0,
                "total_price": 888,
                "item": 1
            }
        ]
    }
    """

    # serializer_class = PayPalOrderSerializer()

    def post(self, request, *args, **kwargs):
        serializer = PayPalOrderSerializer(data=request.data)
        if serializer.is_valid():
            print('is valid data')
            data = serializer.data
            print(serializer.data)
            # create user
            password = None
            try:
                user = UserAccount.objects.get(
                    email=data['email'],
                )
            # except DoesNotExist:
            except (IntegrityError, UserAccount.DoesNotExist) as exc:
                print(f'{exc}')
                user = UserAccount.objects.create(
                    email=data['email'],
                    first_name=data['first_name'],
                    last_name=data['last_name'],
                    phone=data['phone'],
                    city=data['city'],
                    state=data['state'],
                    zip=data['zip'],
                )
                password = UserAccount.objects.make_random_password()
                print(f'{password=}')
                user.set_password(password)
                user.save()
            print(f'{user=}')
            # create cart
            cart = Cart.objects.create(
                customer=user,
                total_items=data['total_items'],
                final_price=data['final_price'],
            )

            # create cart_item
            for i in data['cart_items']:
                CartItem.objects.create(
                    customer=user,
                    comment=i['comment'],
                    height=i['height'],
                    width=i['width'],
                    length=i['length'],
                    armierung=i['armierung'],
                    bohrung=i['bohrung'],
                    ausschnitt=i['ausschnitt'],
                    ausklinkung=i['ausklinkung'],
                    polierte_kante=i['polierte_kante'],
                    qty_item=i['qty_item'],
                    total_price=i['total_price'],
                    item=Item.objects.get(pk=i['item']),
                    cart=cart,
                )
            # create order
            order = Order.objects.create(
                customer=user,
                cart=cart,
                paypal_id=data['paypal_id'],
                status=OrderStatus.objects.get(tag='payed'),
            )
            # send email
            send_mail(
                subject='Order Complete',
                message=f'Ваш заказ №{order.id} {data["paypal_id"]} создан и оплачен! \n'
                        f'Мы будем оповещать Вас о статусе заказа... \n'
                        f'Подробную информацию о заказе можете посмотреть в своем личном кабинете \n'
                        f'{DOMAIN} \n'
                        f'Логин: {data["email"]}\n'
                        f'Пароль: {password}',
                from_email=DEFAULT_FROM_EMAIL,
                recipient_list=[data['email'], ],
                fail_silently=False,
            )
            return Response(
                data={'detail': f'Заказ принят. Для отслеживания заказа необходимо пройти в личный кабинет. '
                                f'На Ваш Email {data["email"]} отправлены детали заказа и инструкция для '
                                f'входа в личный кабинет'}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST, )
