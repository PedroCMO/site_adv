import { useState, useEffect } from 'react';
import { categoriasLeis, getLeis } from '../services/api';

export default function Legislacao() {
  const [leis, setLeis] = useState([]);
  const [categoriaAtiva, setCategoriaAtiva] = useState('constituicao');

  useEffect(() => {
    const carregarLeis = async () => {
      const dados = await getLeis();
      setLeis(dados);
    };
    
    carregarLeis();
  }, []);

  const leisFiltradas = leis.filter(lei => lei.categoria === categoriaAtiva);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-navy-900 text-white py-20">
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full bg-gradient-to-br from-navy-800 to-navy-950"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Legislação
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Consulte códigos, leis e artigos jurídicos de forma rápida e organizada
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row min-h-screen bg-gray-50">
        
        {/* MENU LATERAL - Mobile First */}
        <aside className="lg:w-72 bg-navy-900 text-white flex-shrink-0">
          <div className="p-6">
            <h2 className="text-xl font-serif font-bold mb-6 text-gold-400">Códigos e Leis</h2>
            <nav className="space-y-2">
              {categoriasLeis.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setCategoriaAtiva(cat.id)}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-300 ${
                    categoriaAtiva === cat.id 
                      ? 'bg-gold-600 text-white font-semibold shadow-lg' 
                      : 'text-gray-300 hover:bg-navy-800 hover:text-white'
                  }`}
                >
                  {cat.nome}
                </button>
              ))}
            </nav>
          </div>
        </aside>

        {/* ÁREA DE CONTEÚDO PRINCIPAL */}
        <main className="flex-1 p-6 lg:p-10 overflow-y-auto">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-6 lg:p-8 mb-8">
              <h2 className="text-2xl lg:text-3xl font-serif font-bold text-navy-900 mb-2 capitalize">
                {categoriasLeis.find(c => c.id === categoriaAtiva)?.nome}
              </h2>
              <div className="w-20 h-1 bg-gold-600 mb-6"></div>
              
              {leis.length === 0 && (
                <div className="text-center py-12">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gold-600 mx-auto mb-4"></div>
                  <p className="text-gray-500">Carregando artigos...</p>
                </div>
              )}
              
              {leis.length > 0 && leisFiltradas.length === 0 && (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <p className="text-gray-500 text-lg">Nenhum artigo encontrado para esta categoria.</p>
                </div>
              )}

              <div className="space-y-4">
                {leisFiltradas.map((artigo, index) => (
                  <div 
                    key={artigo.id} 
                    className="bg-gray-50 rounded-lg p-6 border border-gray-200 hover:border-gold-400 hover:shadow-md transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-gold-100 rounded-full flex items-center justify-center">
                        <span className="text-gold-600 font-bold text-sm">{index + 1}</span>
                      </div>
                      <div className="flex-grow">
                        <h3 className="font-bold text-lg text-navy-900 mb-3 font-serif">
                          {artigo.numero}
                        </h3>
                        <p className="text-gray-700 whitespace-pre-wrap leading-relaxed">
                          {artigo.conteudo}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Info Box */}
            <div className="bg-navy-100 rounded-xl p-6 border border-navy-200">
              <div className="flex items-start gap-4">
                <svg className="w-6 h-6 text-navy-600 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h4 className="font-semibold text-navy-900 mb-2">Informação Importante</h4>
                  <p className="text-navy-700 text-sm">
                    Os textos apresentados aqui têm caráter informativo e educacional. 
                    Para orientação jurídica específica, consulte um advogado de nossa equipe.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>

      </div>
    </div>
  );
}