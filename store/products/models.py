from django.db import models

# Create your models here.

# Создание модели category

# 1. Создаем класс ProductCategory и указываем, что он наследуется от встроенного
# в джанго класса с уже готовым набором функционала models.Model
class ProductCategory(models.Model):

# 2. Создаем первое поле name и с помощью пакета models задаем тип поля на
# понятном для sql языке. Атрибут max_length обязателен для данного типа
# поля. Unique - чтобы имена не повторялись
    name = models.CharField(max_length=128, unique=True)

# 3. Следующее - поле описания категории. Здесь в качестве типа данных указан
# textfield - тот же текст, но неограничен по длине. Поле может быть пустым
# благодаря указанным параметрам и blank со значениями true
    description = models.TextField(null=True, blank=True)

# 4. Все. Поле id автоматически предусмотрено в классе Model

    def __str__ (self):
        return self.name


 

# Создание модели products

class Product(models.Model):

    goodVideo = models.FileField(upload_to='videos')
    goodPrice = models.IntegerField()
    goodOldPrice = models.IntegerField()
    goodReviews = models.IntegerField()
    goodName = models.CharField(max_length=256)
    goodStars = models.FloatField(null=False)
    category = models.ForeignKey(to=ProductCategory, on_delete=models.CASCADE)
    
    def __str__(self):
        return f'Сон: {self.goodName}'

