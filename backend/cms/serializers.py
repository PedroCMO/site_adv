from rest_framework import serializers
from .models import InformacoesEscritorio, Advogado, AreaAtuacao, SecaoTexto, ImagemSite, ArtigoLei

class InformacoesEscritorioSerializer(serializers.ModelSerializer):
    class Meta:
        model = InformacoesEscritorio
        fields = '__all__' 
class AdvogadoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Advogado
        fields = '__all__'

class AreaAtuacaoSerializer(serializers.ModelSerializer):
    class Meta:
        model = AreaAtuacao
        fields = '__all__'

class SecaoTextoSerializer(serializers.ModelSerializer):
    class Meta:
        model = SecaoTexto
        fields = '__all__'

class ImagemSiteSerializer(serializers.ModelSerializer):
    class Meta:
        model = ImagemSite
        fields = '__all__'

        from .models import ArtigoLei

class ArtigoLeiSerializer(serializers.ModelSerializer):
    class Meta:
        model = ArtigoLei
        fields = '__all__'
