import logging
import time
from datetime import datetime

from django.core.management.base import BaseCommand

from shop.models import Item

logger = logging.getLogger(__name__)


class Command(BaseCommand):
    help = 'set_image'

    def handle(self, *args, **options):

        Item.objects.filter().update(image='images/dio_SJEY9hC.jpg')
