from django.shortcuts import render


def index(request):
    return render(request, 'index.html')


def two_page(request):
    return render(request, 'two_page.html')
