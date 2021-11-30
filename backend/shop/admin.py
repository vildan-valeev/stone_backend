from django.contrib import admin
from django.contrib.auth.models import Group

from shop.models import Item, ItemType, ItemMaterialColor, ItemMaterial, Page, CartItem, Cart, Order, Support, \
    OrderStatus


class ItemMaterialAdmin(admin.ModelAdmin):
    list_filter = ['title']
    list_display = ['id', 'title']
    list_display_links = ['id', 'title', ]
    readonly_fields = ['created', 'updated']


class ItemTypeAdmin(admin.ModelAdmin):
    list_filter = ['title']
    list_display = ['id', 'title']
    list_display_links = ['id', 'title', ]
    readonly_fields = ['created', 'updated']


class ItemMaterialColorAdmin(admin.ModelAdmin):
    list_filter = ['title']
    list_display = ['id', 'title']
    list_display_links = ['id', 'title', ]
    readonly_fields = ['created', 'updated']


class ItemAdmin(admin.ModelAdmin):
    list_filter = ['type', 'material', 'is_tile']
    list_display = ['id', 'title', 'type', 'material', 'description', 'published']
    list_display_links = ['id', 'title', ]
    readonly_fields = ['created', 'updated']


class CartItemAdmin(admin.StackedInline):
    model = CartItem
    extra = 0


class CartAdmin(admin.ModelAdmin):
    inlines = [CartItemAdmin, ]
    list_display = ['id', 'customer', 'final_price', 'created']


class OrderAdmin(admin.ModelAdmin):

    list_display = ['id', 'customer', 'status']


admin.site.register(ItemType, ItemTypeAdmin)
# admin.site.register(ItemImage, ItemImageAdmin)
admin.site.register(ItemMaterialColor, ItemMaterialColorAdmin)
admin.site.register(ItemMaterial)
admin.site.register(Item, ItemAdmin)
admin.site.register(Page, )
# admin.site.register(CartItem, )
admin.site.register(Cart, CartAdmin)
admin.site.register(Order, OrderAdmin)
admin.site.register(Support, )
admin.site.register(OrderStatus, )

admin.site.unregister(Group)
