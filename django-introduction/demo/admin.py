from django.contrib import admin
from demo.models import Book, BookNumber


@admin.register(Book)
class BookAdmin(admin.ModelAdmin):
    # fields = ['title', 'description']
    list_display = ['id', 'title', 'description']
    list_filter = ['is_published']
    search_fields = ['title', 'description']


@admin.register(BookNumber)
class BookNumberAdmin(admin.ModelAdmin):
    pass
