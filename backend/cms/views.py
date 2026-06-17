import os
from django.conf import settings
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAdminUser
from rest_framework.response import Response
from .models import ArtigoLei
from rest_framework import viewsets
from .models import InformacoesEscritorio, Advogado, AreaAtuacao, SecaoTexto, ImagemSite, ArtigoLei
from .serializers import (
    InformacoesEscritorioSerializer, 
    AdvogadoSerializer, 
    AreaAtuacaoSerializer, 
    SecaoTextoSerializer,
    ImagemSiteSerializer,
    ArtigoLeiSerializer
)
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAdminUser
from rest_framework.response import Response
from .services import processar_e_injetar_leis

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

class ArtigoLeiViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = ArtigoLei.objects.all()
    serializer_class = ArtigoLeiSerializer

@api_view(['GET'])
@permission_classes([IsAdminUser])
def sincronizar_leis(request):
    total_artigos = processar_e_injetar_leis()

    return Response({
        "status": "Sucesso",
        "mensagem": f"Operação Turbo concluída! {total_artigos} artigos foram injetados no banco de dados."
    })
