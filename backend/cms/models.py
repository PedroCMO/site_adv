from django.db import models

# 1. Informações Fixas (Endereço, Contato e Redes Sociais Gerais do Escritório)
class InformacoesEscritorio(models.Model):
    class Meta:
        verbose_name = "Informação do Escritório"
        verbose_name_plural = "Informações do Escritório"

    # Endereço do Escritório
    rua = models.CharField(max_length=200)
    numero = models.CharField(max_length=20)
    complemento = models.CharField(max_length=100, blank=True, help_text="Sala, bloco, andar...")
    cep = models.CharField(max_length=20)
    cidade = models.CharField(max_length=100)
    estado = models.CharField(max_length=2, help_text="Ex: RJ, SP, MG")
    
    # Contatos Gerais da Clínica/Recepção
    telefone = models.CharField(max_length=20, blank=True)
    whatsapp = models.CharField(max_length=20, blank=True)
    email = models.EmailField()

    foto_local = models.ImageField(
        upload_to='escritorio/', 
        blank=True, 
        null=True, 
        help_text="Foto da fachada, recepção ou paisagem clássica do Rio de Janeiro"
    )
    
    # Redes Sociais Oficiais da Marca
    instagram = models.URLField(blank=True)
    linkedin = models.URLField(blank=True)
    facebook = models.URLField(blank=True)
    youtube = models.URLField(blank=True)
    x_twitter = models.URLField(blank=True)

    def __str__(self):
        return "Dados Oficiais do Escritório"

# 2. A Equipe (Advogados e Associados) - Agora com contatos individuais
class Advogado(models.Model):
    # Dados Pessoais e Profissionais
    nome_completo = models.CharField(max_length=200)
    oab = models.CharField(max_length=50)
    formacao = models.TextField(help_text="Resumo da graduação, mestrado, etc.")
    cursos = models.TextField(blank=True, help_text="Outros cursos e certificações")

    foto_perfil = models.ImageField(
        upload_to='equipe/', 
        blank=True, 
        null=True, 
        help_text="Foto profissional de rosto (idealmente quadrada)"
    )
    
    # Contatos Individuais do Advogado
    email_profissional = models.EmailField(blank=True, help_text="E-mail direto do advogado")
    telefone_fixo = models.CharField(max_length=20, blank=True, help_text="Telefone da sala ou ramal")
    
    # Redes Sociais Profissionais do Advogado
    instagram = models.URLField(blank=True, help_text="Instagram profissional")
    linkedin = models.URLField(blank=True, help_text="Perfil do LinkedIn")

    def __str__(self):
        return f"{self.nome_completo} ({self.oab})"

# 3. Os Serviços (Áreas de Atuação)
class AreaAtuacao(models.Model):
    class Meta:
        verbose_name = "Área de Atuação"
        verbose_name_plural = "Áreas de Atuação"

    nome = models.CharField(max_length=150, help_text="Ex: Direito Empresarial")
    especificidades = models.TextField(help_text="Detalhes dos serviços prestados nesta área")

    def __str__(self):
        return self.nome

# 4. Seções de Texto (Conteúdo Flexível)
class SecaoTexto(models.Model):
    class Meta:
        verbose_name = "Seção de Texto"
        verbose_name_plural = "Seções de Texto"

    identificador = models.CharField(max_length=100, unique=True, help_text="Ex: historia_escritorio, missao, visao")
    titulo = models.CharField(max_length=200, blank=True, help_text="Título que aparecerá na tela")
    conteudo = models.TextField(help_text="O texto completo da seção")
    imagem_destaque = models.ImageField(
        upload_to='textos/', 
        blank=True, 
        null=True, 
        help_text="Foto ilustrativa para acompanhar o texto (opcional)"
    )

    def __str__(self):
        return f"Seção: {self.identificador}"
    
class ImagemSite(models.Model):
    # Definimos as opções que vão aparecer no Painel Admin
    PAGINAS_CHOICES = [
        ('home', 'Página Inicial (Home)'),
        ('sobre', 'Página Sobre Nós'),
        ('contato', 'Página de Contato'),
    ]

    pagina_destino = models.CharField(
        max_length=20, 
        choices=PAGINAS_CHOICES,
        help_text="Em qual página esta foto deve aparecer?"
    )
    imagem = models.ImageField(upload_to='site_geral/')
    descricao = models.CharField(
        max_length=150, 
        help_text="Descrição curta da imagem para acessibilidade (ex: 'Fachada do prédio')"
    )

    def __str__(self):
        return f"Imagem para {self.get_pagina_destino_display()} - {self.descricao}"    
