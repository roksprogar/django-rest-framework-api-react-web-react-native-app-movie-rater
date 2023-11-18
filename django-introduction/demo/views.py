from django.http import HttpResponse


def first(request):
    return HttpResponse('First message from views.')
