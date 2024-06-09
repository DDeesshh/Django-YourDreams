from django.shortcuts import render
# Create your views here.
from products.models import ProductCategory, Product

def index(request):
    
    return render(request, "products/index.html")

def products(request):

        context = {
        'title': 'qq555q',
        
        'products': Product.objects.all(),
        'categoties': ProductCategory.objects.all(),
          
        }
        
        return render(request, "products/products.html", context)
        

        # 'products': [
        #       {
        #       'goodVideo': '/static/img/Mystery-of-the-Universe.mp4',
        #       'goodPrice': '5999',
        #       'goodOldPrice': '6999',
        #       'goodReviews': '5320',
        #       'goodName': 'Тайна вселенной',
        #       'goodStars': '4.4',
        #       },
              
        #         {
        #       'goodVideo': '/static/img/On-top-of-the-world.mp4',
        #       'goodPrice': '7999',
        #       'goodOldPrice': '8999',
        #       'goodReviews': '4428',
        #       'goodName': 'На вершине мира',
        #       'goodStars': '4.7',
        #       },
                
        #           {
        #       'goodVideo': '/static/img/Paradise-world.mp4',
        #       'goodPrice': '6999',
        #       'goodOldPrice': '7999',
        #       'goodReviews': '627',
        #       'goodName': 'Лучезарный пляж',
        #       'goodStars': '4.9',
        #       },
                  
        #                   {
        #       'goodVideo': '/static/img/The-world-after-the-end.mp4',
        #       'goodPrice': '4999',
        #       'goodOldPrice': '5999',
        #       'goodReviews': '4920',
        #       'goodName': 'Мир после конца',
        #       'goodStars': '4.8',
        #       },
                          
        #                           {
        #       'goodVideo': '/static/img/Night-in-an-old-house.mp4',
        #       'goodPrice': '5999',
        #       'goodOldPrice': '6999',
        #       'goodReviews': '2639',
        #       'goodName': 'Ночь в старом доме',
        #       'goodStars': '4.3',
        #       },
                                  
        #                                   {
        #       'goodVideo': '/static/img/Monarch-of-the Empire.mp4',
        #       'goodPrice': '6999',
        #       'goodOldPrice': '7999',
        #       'goodReviews': '1849',
        #       'goodName': 'Монарх империи',
        #       'goodStars': '4.8',
        #       },
                                          
        #                                           {
        #       'goodVideo': '/static/img/Future-world.mp4',
        #       'goodPrice': '3999',
        #       'goodOldPrice': '4999',
        #       'goodReviews': '4006',
        #       'goodName': 'Мир через 100 лет',
        #       'goodStars': '4.9',
        #       },
                                                  
        #                                                   {
        #       'goodVideo': '/static/img/Night-racing.mp4',
        #       'goodPrice': '4999',
        #       'goodOldPrice': '5999',
        #       'goodReviews': '3998',
        #       'goodName': 'Ночные гонщики',
        #       'goodStars': '4.6',
        #       },
        # ]
    #  }
        # return render(request, "products/products.html", context)
