from django.urls import path

from users.views import UserActivationView

urlpatterns = [
    # path('auth/users/activate/(?P<uid>[\w-]+)/(?P<token>[\w-]+)/$', UserActivationView.as_view()),
    # path('activate/<str:uid>/<str:token>/', UserActivationView.as_view()),

]
