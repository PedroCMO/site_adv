import { useQuery } from '@tanstack/react-query'
import { fetchAreasAtuacao, fetchTextos, fetchImagensSite } from '../services/api'
import { Link } from 'react-router-dom'

export default function Home() {
  // 1. Busca os textos da página inicial
  const { data: textos, isLoading: loadingTextos, isError: errorTextos } = useQuery({
    queryKey: ['textos-site'],
    queryFn: fetchTextos,
  })

  // 2. Busca as áreas de atuação
  const { data: areas, isLoading: loadingAreas, isError: errorAreas } = useQuery({
    queryKey: ['areas-atuacao'],
    queryFn: fetchAreasAtuacao,
  })

  // 3. Busca imagens do site
  const { data: imagens } = useQuery({
    queryKey: ['imagens-site'],
    queryFn: fetchImagensSite,
  })

  // Controle de carregamento e erro unificado
  if (loadingTextos || loadingAreas) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gold-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Carregando...</p>
        </div>
      </div>
    )
  }
  if (errorTextos || errorAreas) return <p>Ocorreu um erro ao carregar os dados.</p>

  // Filtrar imagem da home
  const homeImagem = imagens?.find(img => img.pagina_destino === 'home')

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-navy-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          {homeImagem?.imagem ? (
            <img 
              src={homeImagem.imagem} 
              alt="Hero Background" 
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-navy-800 to-navy-950"></div>
          )}
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 leading-tight">
              Excelência Jurídica e
              <span className="text-gold-400"> Compromisso</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
              Há mais de [anos] anos oferecendo soluções jurídicas personalizadas com 
              integridade, dedicação e excelência profissional.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/contato" 
                className="bg-gold-600 hover:bg-gold-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300 shadow-lg"
              >
                Agende uma Consulta
              </Link>
              <Link 
                to="/sobre" 
                className="border-2 border-white text-white hover:bg-white hover:text-navy-900 px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
              >
                Conheça o Escritório
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Seções de Texto */}
      {textos && textos.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {textos.map((texto, index) => (
              <div 
                key={texto.id} 
                className={`mb-16 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className="md:flex items-center gap-12">
                  {texto.imagem_destaque && (
                    <div className="md:w-1/2 mb-6 md:mb-0">
                      <img 
                        src={texto.imagem_destaque} 
                        alt={texto.titulo} 
                        className="rounded-lg shadow-xl w-full h-80 object-cover"
                      />
                    </div>
                  )}
                  <div className={texto.imagem_destaque ? 'md:w-1/2' : 'w-full'}>
                    {texto.titulo && (
                      <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy-900 mb-6">
                        {texto.titulo}
                      </h2>
                    )}
                    <div className="text-gray-700 text-lg leading-relaxed whitespace-pre-wrap">
                      {texto.conteudo}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Áreas de Atuação */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy-900 mb-4">
              Nossas Áreas de Atuação
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Oferecemos assessoria jurídica completa em diversas áreas do direito, 
              sempre com foco na excelência e nas necessidades específicas de cada cliente.
            </p>
          </div>

          {areas && areas.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {areas.map((area) => (
                <div 
                  key={area.id} 
                  className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-xl transition-all duration-300 hover:border-gold-400 group"
                >
                  <div className="w-14 h-14 bg-gold-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-gold-600 transition-colors duration-300">
                    <svg className="w-8 h-8 text-gold-600 group-hover:text-white transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-serif font-bold text-navy-900 mb-4">
                    {area.nome}
                  </h3>
                  <div className="text-gray-600 leading-relaxed whitespace-pre-wrap">
                    {area.especificidades}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500">Nenhuma área de atuação cadastrada no sistema.</p>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Precisa de Assessoria Jurídica?
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Entre em contato conosco para agendar uma consulta e discutir como podemos 
            ajudá-lo a proteger seus direitos e interesses.
          </p>
          <Link 
            to="/contato" 
            className="bg-gold-600 hover:bg-gold-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-300 shadow-lg inline-block"
          >
            Fale Conosco
          </Link>
        </div>
      </section>
    </div>
  )
}