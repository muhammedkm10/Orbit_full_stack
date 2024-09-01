from django.db import models


# Create your models here.
class Category(models.Model):
    name = models.CharField(max_length=50, null=True, blank=True)
    image = models.ImageField(upload_to="images", null=True)
    
    def __str__(self) -> str:
        return self.name


class Products(models.Model):
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    product_name = models.CharField(max_length=50, null=True, blank=True)
    image = models.ImageField(
        upload_to="images", height_field=None, width_field=None, max_length=None
    )
    def __str__(self) -> str:
        return self.product_name
