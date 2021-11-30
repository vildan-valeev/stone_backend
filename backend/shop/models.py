from django.db import models
from versatileimagefield.fields import VersatileImageField, PPOIField
from users.models import UserAccount


class BaseModel(models.Model):
    created = models.DateTimeField(auto_now_add=True, editable=False, null=True, )
    updated = models.DateTimeField(auto_now=True, editable=False, null=True)


class ItemMaterial(BaseModel):
    title = models.CharField(max_length=255, )

    class Meta:
        verbose_name_plural = 'Item Materials'

    def __str__(self):
        return self.title


class ItemType(BaseModel):
    title = models.CharField(max_length=255)

    class Meta:
        verbose_name_plural = 'Item Types'

    def __str__(self):
        return self.title


class ItemMaterialColor(BaseModel):
    title = models.CharField(max_length=255, )
    image = VersatileImageField(
        'Image',
        upload_to='images/',
        ppoi_field='image_ppoi'
    )
    image_ppoi = PPOIField()
    color = models.CharField(max_length=15, default='#000000', null=True, blank=True)

    def __str__(self):
        return self.title


class Item(BaseModel):
    """Товары"""
    title = models.CharField(max_length=255, )
    image = VersatileImageField(
        'Image',
        upload_to='images/',
        ppoi_field='image_ppoi'
    )
    image_ppoi = PPOIField()
    type = models.ForeignKey(ItemType, on_delete=models.CASCADE, )
    material = models.ForeignKey(ItemMaterial, on_delete=models.CASCADE, )
    item_material_color = models.ManyToManyField(ItemMaterialColor, blank=True, related_name='items')
    description = models.TextField(null=True, blank=True, )
    price = models.DecimalField(max_digits=5, decimal_places=2, default=0)
    is_tile = models.BooleanField(default=False)
    published = models.BooleanField(default=False, help_text='published in front')

    def __str__(self):
        return self.title


class CartItem(BaseModel):
    """Товары в корзине"""
    customer = models.ForeignKey(UserAccount, on_delete=models.CASCADE, blank=True)
    cart = models.ForeignKey('Cart', on_delete=models.CASCADE, related_name='related_items', null=True, blank=True)
    item = models.ForeignKey(Item, on_delete=models.CASCADE)
    comment = models.CharField(max_length=255, blank=True)
    image = VersatileImageField(
        'Image',
        upload_to='images/',
        ppoi_field='image_ppoi',
        null=True,
        blank=True,
    )
    image_ppoi = PPOIField(null=True, blank=True)
    height = models.PositiveIntegerField(default=1, )
    width = models.PositiveIntegerField(default=1, )
    length = models.PositiveIntegerField(default=1, )

    armierung = models.BooleanField(default=False)
    bohrung = models.PositiveIntegerField(default=1, )
    ausschnitt = models.PositiveIntegerField(default=1, )
    ausklinkung = models.PositiveIntegerField(default=1, )
    polierte_kante = models.BooleanField(default=False)
    qty_item = models.PositiveIntegerField(default=1, help_text='количество плит')
    total_price = models.DecimalField(max_digits=10, decimal_places=2, default=0, help_text='Общая цена')

    def __str__(self):
        return f'CartItem {self.id}'

    def save(self, *args, **kwargs):
        """save price by formula, by type, height, width and etc."""
        # self.total_price = self.qty_item * self.item.price
        super().save(*args, **kwargs)


class Cart(BaseModel):
    """
    Корзина
    """
    customer = models.ForeignKey(UserAccount, on_delete=models.CASCADE, blank=True)
    total_items = models.PositiveIntegerField(default=0, blank=True)
    final_price = models.DecimalField(max_digits=10, decimal_places=2, default=0.00, null=True, blank=True)

    def __str__(self):
        return str(self.id)

    def save(self, *args, **kwargs):
        cart_items = self.related_items
        self.total_items = cart_items.count()
        self.final_price = 0
        for i in cart_items.all():
            self.final_price += i.total_price
        super().save(*args, **kwargs)


class OrderStatus(models.Model):
    title = models.CharField(max_length=255, blank=True)
    tag = models.CharField(max_length=255, blank=True)

    def __str__(self):
        return f'{self.title}'


class Order(BaseModel):
    """
    Заказ
    """
    customer = models.ForeignKey(UserAccount, on_delete=models.CASCADE)
    cart = models.ForeignKey('Cart', on_delete=models.CASCADE)
    comment = models.TextField(null=True, blank=True)
    paypal_id = models.CharField(max_length=255, blank=True)
    status = models.ForeignKey('OrderStatus', on_delete=models.CASCADE)

    def __str__(self):
        return f'{self.id}'


# TODO: перенести в отдельный App
class Page(BaseModel):
    """
    Posts, news and actions
    """
    title = models.CharField(max_length=20, blank=True, null=True)
    image = models.ImageField(blank=True, null=True)
    text = models.TextField(null=True)
    published = models.BooleanField(default=False)

    def __str__(self):
        return self.title


class Constants(models.Model):
    title = models.CharField(max_length=20, blank=True, null=True)
    tag = models.CharField(max_length=20, blank=True, null=True)

    def __str__(self):
        return self.title


class Support(BaseModel):
    user = models.ForeignKey(UserAccount, on_delete=models.CASCADE)
    subject = models.CharField(max_length=20, )
    message = models.CharField(max_length=20, )
    email = models.EmailField(max_length=255, unique=True)

    def __str__(self):
        return self.subject
