import { useQuery } from '@tanstack/react-query'
import { fetchTextos, fetchImagensSite } from '../services/api'

export default function Sobre() {
  const { data: textos, isLoading, isError } = useQuery({
    queryKey: ['textos-site'],
    queryFn: fetchTextos,
  })

  const { data: imagens } = useQuery({
    queryKey: ['imagens-site'],
    queryFn: fetchImagensSite,
  })

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gold-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Carregando informações...</p>
        </div>
      </div>
    )
  }
  if (isError) return <p>Ocorreu um erro ao carregar as informações.</p>

  // Filtrar imagem da página sobre
  const sobreImagem = imagens?.find(img => img.pagina_destino === 'sobre')

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-navy-900 text-white py-20">
        <div className="absolute inset-0 opacity-20">
          {sobreImagem?.imagem ? (
            <img 
              src={sobreImagem.imagem} 
              alt="Sobre Background" 
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-navy-800 to-navy-950"></div>
          )}
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Sobre o Escritório
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Conheça nossa história, valores e compromisso com a excelência jurídica
          </p>
        </div>
      </section>

      {/* Conteúdo Principal */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {!textos || textos.length === 0 ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <p className="text-gray-500 text-lg">Nenhum texto cadastrado no sistema.</p>
            </div>
          ) : (
            <div className="space-y-16">
              {textos.map((texto, index) => (
                <div 
                  key={texto.id} 
                  className={`md:flex items-center gap-12 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
                >
                  {texto.imagem_destaque && (
                    <div className="md:w-1/2 mb-8 md:mb-0">
                      <div className="relative">
                        <img 
                          src={texto.imagem_destaque} 
                          alt={texto.titulo || 'Imagem ilustrativa'} 
                          className="rounded-xl shadow-2xl w-full h-96 object-cover"
                        />
                        <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gold-600 rounded-lg opacity-20"></div>
                      </div>
                    </div>
                  )}
                  <div className={texto.imagem_destaque ? 'md:w-1/2' : 'w-full max-w-4xl mx-auto'}>
                    {texto.titulo && (
                      <div className="mb-6">
                        <div className="w-16 h-1 bg-gold-600 mb-4"></div>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy-900">
                          {texto.titulo}
                        </h2>
                      </div>
                    )}
                    <div className="text-gray-700 text-lg leading-relaxed whitespace-pre-wrap">
                      {texto.conteudo}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Valores Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy-900 mb-4">
              Nossos Valores
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Os princípios que guiam nossa atuação profissional
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-gold-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-serif font-bold text-navy-900 mb-3">Integridade</h3>
              <p className="text-gray-600">Atuamos com transparência e ética em todas as nossas relações profissionais.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-gold-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-serif font-bold text-navy-900 mb-3">Excelência</h3>
              <p className="text-gray-600">Buscamos sempre a melhor qualidade técnica e profissional em nossos serviços.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-gold-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-serif font-bold text-navy-900 mb-3">Compromisso</h3>
              <p className="text-gray-600">Dedicados plenamente aos interesses e objetivos de cada cliente.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}