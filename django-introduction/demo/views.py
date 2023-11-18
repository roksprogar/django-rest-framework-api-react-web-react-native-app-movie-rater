from django.shortcuts import render

from demo.models import Book


def first(request):
    books = Book.objects.all()
    return render(request, 'first_temp.html', {'books': books})
