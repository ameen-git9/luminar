from ekart.models import Cart,Order



def cart_count(request):
    if request.user.is_authenticated:
        count=Cart.objects.filter(user=request.user,status="in-cart").count()
        return {'count':count}
    else:
        return {'count':0}
    

def order_count(request):
    if request.user.is_authenticated:
        count=Order.objects.filter(user=request.user).count()
        return {'orderCount':count}
    else:
        return {'orderCount':0}