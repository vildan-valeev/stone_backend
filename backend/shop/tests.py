from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase

# from myproject.apps.core.models import Account
from shop.models import ItemMaterial


class ItemTests(APITestCase):

    def setUp(self):
        ItemMaterial.objects.create(title='ONE')

    def test_list_item_materials(self):
        """

        """
        url = reverse('item_materials_list')

        response = self.client.get(url, )
        print(response.data)
