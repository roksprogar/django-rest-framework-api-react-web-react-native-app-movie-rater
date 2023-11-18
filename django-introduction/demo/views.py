from django.http import HttpResponse
from django.views import View
from demo.models import Book


class Another(View):
    books = Book.objects.filter(is_published=True)
    output = ''

    for book in books:
        output += f"We have {book.title} books with ID {book.id}<br>"

    def get(self, request):
        return HttpResponse(self.output)


def first(request):
    return HttpResponse('First message from views.')
