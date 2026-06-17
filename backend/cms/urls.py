from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import sincronizar_leis
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
    path('api/admin/sincronizar-leis/', sincronizar_leis, name='sincronizar_leis'),
]