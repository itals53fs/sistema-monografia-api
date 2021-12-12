from django.contrib import admin
from .models import Monografia


admin.site.register(Monografia)
# Register your models here.

""" @admin.register(Monografia.author)
class AuthorAdmin(admin.ModelAdmin):
    pass """