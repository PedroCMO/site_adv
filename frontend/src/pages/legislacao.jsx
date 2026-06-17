import { useState, useEffect } from 'react';
import { categoriasLeis, getLeis } from './api';

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
    <div className="flex min-h-screen bg-gray-50">
      
      {/* MENU LATERAL ESCURO */}
      <aside className="w-64 bg-slate-900 text-white flex-shrink-0">
        <div className="p-6">
          <h2 className="text-xl font-bold mb-6">Códigos e Leis</h2>
          <nav className="space-y-2">
            {categoriasLeis.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setCategoriaAtiva(cat.id)}
                className={`w-full text-left px-4 py-3 rounded transition-colors ${
                  categoriaAtiva === cat.id 
                    ? 'bg-blue-600 text-white font-semibold' 
                    : 'text-gray-300 hover:bg-slate-800'
                }`}
              >
                {cat.nome}
              </button>
            ))}
          </nav>
        </div>
      </aside>

      {/* ÁREA DE CONTEÚDO PRINCIPAL (BRANCA) */}
      <main className="flex-1 p-10 overflow-y-auto max-h-screen">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-serif text-gray-800 border-b pb-4 mb-8 capitalize">
            {categoriasLeis.find(c => c.id === categoriaAtiva)?.nome}
          </h1>

          <div className="space-y-6">
            {leisFiltradas.map((artigo) => (
              <div key={artigo.id} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="font-bold text-lg text-blue-900 mb-2">{artigo.numero}</h3>
                <p className="text-gray-700 whitespace-pre-wrap leading-relaxed">
                  {artigo.conteudo}
                </p>
              </div>
            ))}
            
            {leis.length === 0 && (
              <p className="text-gray-500 italic">Carregando artigos...</p>
            )}
            
            {leis.length > 0 && leisFiltradas.length === 0 && (
              <p className="text-gray-500 italic">Nenhum artigo encontrado para esta categoria.</p>
            )}
          </div>
        </div>
      </main>

    </div>
  );
}