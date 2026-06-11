from rest_framework import viewsets
from .models import InformacoesEscritorio, Advogado, AreaAtuacao, SecaoTexto, ImagemSite
from .serializers import (
    InformacoesEscritorioSerializer, 
    AdvogadoSerializer, 
    AreaAtuacaoSerializer, 
    SecaoTextoSerializer,
    ImagemSiteSerializer
)

class InformacoesEscritorioViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = InformacoesEscritorio.objects.all()
    serializer_class = InformacoesEscritorioSerializer

class AdvogadoViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Advogado.objects.all()
    serializer_class = AdvogadoSerializer

class AreaAtuacaoViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = AreaAtuacao.objects.all()
    serializer_class = AreaAtuacaoSerializer

class SecaoTextoViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = SecaoTexto.objects.all()
    serializer_class = SecaoTextoSerializer

class ImagemSiteViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = ImagemSite.objects.all()
    serializer_class = ImagemSiteSerializer
