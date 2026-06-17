import os
from django.conf import settings
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAdminUser
from rest_framework.response import Response
from .models import ArtigoLei
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

@api_view(['GET'])
@permission_classes([IsAdminUser])
def sincronizar_leis(request):

    pasta_base = os.path.join(settings.BASE_DIR, 'dados_leis')

    lista_de_leis = [
        {"txt": "base_constitucional/SUPER_BASE_CONSTITUCIONAL.txt", "categoria": "constituicao"},
        {"txt": "bloco_oab_etica/SUPER_BLOCO_OAB_ETICA.txt", "categoria": "etica_oab"},
        {"txt": "bloco_penal/SUPER_BLOCO_PENAL.txt", "categoria": "codigo_penal"},
        {"txt": "bloco_administrativo/SUPER_BLOCO_ADMINISTRATIVO.txt", "categoria": "codigo_adm"},
        {"txt": "bloco_especializado/SUPER_BLOCO_ESPECIALIZADO.txt", "categoria": "especializado"},
        {"txt": "bloco_publico/SUPER_BLOCO_PUBLICO.txt", "categoria": "publico"},
        {"txt": "bloco_trabalhista/SUPER_BLOCO_TRABALHISTA.txt", "categoria": "trabalhista"},
        {"txt": "bloco_tributario/SUPER_BLOCO_TRIBUTARIO.txt", "categoria": "tributario"},
        {"txt": "bloco_humanidades_extra/SUPER_BLOCO_HUMANIDADES_EXTRA.txt", "categoria": "humanidades"}
    ]

    total_processado = 0

    for lei in lista_de_leis:
        caminho_do_arquivo = os.path.join(pasta_base, lei['txt'])
    
        if not os.path.exists(caminho_do_arquivo):
            continue

        acumulador = ""
        chave = [] 
        
        with open(caminho_do_arquivo, "r", encoding="utf-8") as arquivo:
            for linha in arquivo:
                linha_limpa = linha.replace("\xa0", " ").replace("~~", "").strip()
                
                if linha_limpa == "":
                    continue

                linha_fatiada = linha_limpa.split()

                if len(linha_fatiada) > 1 and linha_fatiada[0] == "Art.":
                    if acumulador != "":
                        # A MÁGICA: Em vez do dicionário, salvamos no PostgreSQL!
                        ArtigoLei.objects.update_or_create(
                            categoria=lei['categoria'],
                            numero=acumulador,
                            defaults={'conteudo': "\n".join(chave)}
                        )
                        total_processado += 1

                    chave = []
                    acumulador = f"{linha_fatiada[0]} {linha_fatiada[1]}"

                chave.append(linha_limpa)
                
                if "Disposições Constitucionais Transitórias" in linha_limpa:
                    break
                    
            if acumulador != "":
                ArtigoLei.objects.update_or_create(
                    categoria=lei['categoria'],
                    numero=acumulador,
                    defaults={'conteudo': "\n".join(chave)}
                )
                total_processado += 1

    return Response({
        "status": "Sucesso",
        "mensagem": f"Operação concluída! {total_processado} artigos foram sincronizados com a base de dados."
    })


