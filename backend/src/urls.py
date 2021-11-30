from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path, include

from shop.views import main_page
from . import settings
from .yasg import urlpatterns as swagger_urls

urlpatterns = [
    path("", main_page, name="main"),
    path('admin/', admin.site.urls),
    path('api/shop/', include('shop.api.urls')),
    # path('paypal/$', paypal.views.Payment.as_view(), name='PayPal Payment API')

    path('api/users/', include('users.urls')),
    path('api/auth/', include('djoser.urls')),
    path('api/auth/', include('djoser.urls.authtoken')),

    # path('api/users/', include('djoser.urls.authtoken')),

    path('test/', include('paypal_test.urls')),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
urlpatterns += swagger_urls
