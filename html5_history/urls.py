from django.conf.urls import include, url
from django.contrib import admin

from .views import *

urlpatterns = [
    # Examples:
    # url(r'^$', 'html5_history.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),
    url(r'^$', index, name='index'),
    url(r'^contact/$', two_page, name='two_page'),


    url(r'^admin/', include(admin.site.urls)),
]
