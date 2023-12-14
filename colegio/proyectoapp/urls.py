from django.urls import path
from . import views
from django.contrib.auth.decorators import login_required
from .views import *
from django.contrib import admin


urlpatterns = [
    path('', views.index, name='index'),
    path('index',views.index,name='index'),
    path('admin',login_required(admin),name='admin'),
    path('accounts/profile/', login_required(views.profile), name='profile'),
    path('formulario/',login_required(views.formulario),name='formulario'),
    path('revisar',login_required(views.revisar),name='revisar'),
    path('accounts/signup/', login_required(views.CustomSignupView.as_view()), name='account_signup'),
    path('formulario/', views.restar_dias_restantes, name='restar_dias_restantes'),
    path('ListadoFormulario/', login_required(views.Listado), name='Listado'),
    path('historial/', login_required(views.historial), name='historial'),
    path('usuarios/', login_required(views.usuarios), name='usuarios'),
    path('aceptar_formulario/<int:formulario_id>/', views.aceptar_formulario, name='aceptar_formulario'),
    path('denegar_formulario/<int:formulario_id>/', views.denegar_formulario, name='denegar_formulario'),
]