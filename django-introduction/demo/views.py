from django.http import HttpResponse
from django.views import View


class Another(View):
    def get(self, request):
        return HttpResponse('Another message from views.')


def first(request):
    return HttpResponse('First message from views.')
