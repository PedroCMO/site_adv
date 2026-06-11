from django.contrib import admin
from .models import InformacoesEscritorio, Advogado, AreaAtuacao, SecaoTexto, ImagemSite

admin.site.register(InformacoesEscritorio)
admin.site.register(Advogado)
admin.site.register(AreaAtuacao)
admin.site.register(SecaoTexto)
admin.site.register(ImagemSite)