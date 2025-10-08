import uuid
from django.db import models
from django.contrib.auth.models import User

class Product(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
    CATEGORY_CHOICES = [
        ('baju', 'Baju'),
        ('celana', 'Celana'),
        ('sepatu', 'Sepatu'),
        ('topi', 'Topi'),
        ('kaus kaki', 'Kaus kaki'),
        ('sarung tangan', 'Sarung tangan'),
        ('lainnya', 'Lainnya')
    ]
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=50)
    price = models.IntegerField()
    description = models.TextField()
    thumbnail = models.URLField(blank=True, null=True)
    category = models.CharField(max_length=50, choices=CATEGORY_CHOICES, default= 'lainnya')
    is_featured = models.BooleanField(default=False)
    stock = models.IntegerField(default=0)
    brand = models.CharField(max_length=50, blank=True)
    
    def __str__(self):
        return self.name

