from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import (
    InformacoesEscritorioViewSet, 
    AdvogadoViewSet, 
    AreaAtuacaoViewSet, 
    SecaoTextoViewSet,
    ImagemSiteViewSet
)
router = DefaultRouter()
router.register(r'escritorio', InformacoesEscritorioViewSet)
router.register(r'advogados', AdvogadoViewSet)
router.register(r'areas-atuacao', AreaAtuacaoViewSet)
router.register(r'textos', SecaoTextoViewSet)
router.register(r'imagens', ImagemSiteViewSet)

urlpatterns = [
    path('', include(router.urls)),
]