import { useQuery } from '@tanstack/react-query'
import { fetchAdvogados } from '../services/api'

export default function Equipe() {
  const { data: advogados, isLoading, isError } = useQuery({
    queryKey: ['lista-advogados'],
    queryFn: fetchAdvogados,
  })

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Carregando equipe...</p>
        </div>
      </div>
    )
  }
  if (isError) return <p>Ocorreu um erro ao carregar a equipe.</p>

  return (
    <div>
      {}
      <section className="relative bg-slate-900 text-white py-20">
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full bg-gradient-to-br from-slate-800 to-slate-950"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Nossa Equipe
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Conheça os profissionais dedicados a defender seus direitos com excelência
          </p>
        </div>
      </section>

      {}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {!advogados || advogados.length === 0 ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <p className="text-gray-500 text-lg">Nenhum advogado cadastrado no sistema.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {advogados.map((advogado) => (
                <div 
                  key={advogado.id} 
                  className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 group"
                >
                  {/* Photo Section */}
                  <div className="relative h-64 bg-gradient-to-br from-slate-800 to-slate-900 overflow-hidden">
                    {advogado.foto_perfil ? (
                      <img 
                        src={advogado.foto_perfil} 
                        alt={`Foto de ${advogado.nome_completo}`} 
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center">
                          <span className="text-white font-serif font-bold text-3xl">
                            {advogado.nome_completo.charAt(0)}
                          </span>
                        </div>
                      </div>
                    )}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900 to-transparent h-20"></div>
                  </div>

                  {/* Info Section */}
                  <div className="p-6">
                    <h3 className="text-2xl font-serif font-bold text-slate-900 mb-2">
                      {advogado.nome_completo}
                    </h3>
                    <div className="flex items-center gap-2 mb-4">
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                        OAB {advogado.oab}
                      </span>
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                          Formação
                        </h4>
                        <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-wrap">
                          {advogado.formacao}
                        </p>
                      </div>

                      {advogado.cursos && (
                        <div>
                          <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                            Cursos e Certificações
                          </h4>
                          <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-wrap">
                            {advogado.cursos}
                          </p>
                        </div>
                      )}

                      {/* Contact Info */}
                      <div className="pt-4 border-t border-gray-100">
                        <div className="flex flex-wrap gap-3">
                          {advogado.email_profissional && (
                            <a 
                              href={`mailto:${advogado.email_profissional}`}
                              className="flex items-center gap-2 text-sm text-slate-700 hover:text-blue-600 transition-colors"
                            >
                              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                              </svg>
                              E-mail
                            </a>
                          )}
                          {advogado.telefone_fixo && (
                            <a 
                              href={`tel:${advogado.telefone_fixo}`}
                              className="flex items-center gap-2 text-sm text-slate-700 hover:text-blue-600 transition-colors"
                            >
                              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                              </svg>
                              Telefone
                            </a>
                          )}
                          {advogado.linkedin && (
                            <a 
                              href={advogado.linkedin}
                              target="_blank"
                              rel="noreferrer"
                              className="flex items-center gap-2 text-sm text-slate-700 hover:text-blue-600 transition-colors"
                            >
                              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                              </svg>
                              LinkedIn
                            </a>
                          )}
                          {advogado.instagram && (
                            <a 
                              href={advogado.instagram}
                              target="_blank"
                              rel="noreferrer"
                              className="flex items-center gap-2 text-sm text-slate-700 hover:text-blue-600 transition-colors"
                            >
                              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                              </svg>
                              Instagram
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}