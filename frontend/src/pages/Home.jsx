import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import { fetchAreasAtuacao, fetchTextos, fetchImagensSite } from '../services/api';

export default function Home() {
  const { data: textos, isLoading: loadingTextos } = useQuery({
    queryKey: ['textos-site'],
    queryFn: fetchTextos,
    staleTime: 0,
    cacheTime: 0,
  });

  const { data: areas, isLoading: loadingAreas } = useQuery({
    queryKey: ['areas-atuacao', 'v2'], // 'v2' para garantir nova busca
    queryFn: fetchAreasAtuacao,
    staleTime: 0,
    cacheTime: 0,
  });

  const { data: imagens, isLoading: loadingImagens } = useQuery({
    queryKey: ['imagens-site'],
    queryFn: fetchImagensSite,
    staleTime: 0,
    cacheTime: 0,
  });

  if (loadingTextos || loadingAreas || loadingImagens) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-gold-600 border-solid"></div>
      </div>
    );
  }

  const imagemCapa = imagens.find(img => img.pagina_destino === 'home')?.imagem;
  const textoDestaque = textos.find(t => t.identificador === 'capa_home') || textos[0];
  const textosSecundarios = textos.filter(t => t.id !== textoDestaque?.id);

  return (
    <div className="min-h-screen bg-white font-sans">
      
      {/* SEÇÃO 1: HERO */}
      <section className="relative w-full h-[85vh] flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-navy-950 bg-cover bg-center"
          style={imagemCapa ? { backgroundImage: `url(${imagemCapa})` } : {}}
        ></div>
        <div className="absolute inset-0 bg-black/65 z-10"></div>

        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto mt-16">
          <div className="w-20 h-1 bg-gold-600 mx-auto mb-8"></div>
          <h1 className="text-4xl md:text-6xl text-white font-serif font-bold mb-6 drop-shadow-lg leading-tight">
            {textoDestaque.titulo}
          </h1>
          <p className="text-lg md:text-2xl text-gray-200 mb-10 font-light max-w-3xl mx-auto whitespace-pre-wrap">
            {textoDestaque.conteudo}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contato" className="inline-block bg-gold-600 hover:bg-gold-500 text-white px-8 py-4 rounded-sm uppercase tracking-widest font-semibold transition-all duration-300 shadow-lg">
              Fale com um Especialista
            </Link>
          </div>
        </div>
      </section>

      {/* SEÇÃO 2: Áreas de Atuação */}
      <section className="py-24 bg-gray-50 border-t-8 border-gold-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy-900 mb-4">Áreas de Atuação</h2>
            <div className="w-24 h-1 bg-gold-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {areas.map((area) => (
              <div key={area.id} className="bg-white p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group rounded-lg relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-gold-600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                <svg className="w-12 h-12 text-gold-600 mb-6 transform group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                </svg>
                <h3 className="text-xl font-bold text-navy-900 mb-4 font-serif">{area.nome}</h3>
                <p className="text-gray-600 leading-relaxed whitespace-pre-wrap text-sm">
                  {area.especificidades}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEÇÃO 3: Outros Textos */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {textosSecundarios.map((texto) => (
            <div key={texto.id} className="flex flex-col md:flex-row items-center gap-12 mb-20">
              {texto.imagem_destaque && (
                <div className="w-full md:w-1/2">
                  <img src={texto.imagem_destaque} alt={texto.titulo} className="w-full h-[400px] object-cover rounded-lg shadow-xl border-4 border-white" />
                </div>
              )}
              <div className={texto.imagem_destaque ? "w-full md:w-1/2" : "w-full max-w-4xl mx-auto text-center"}>
                <h2 className="text-3xl font-serif font-bold text-navy-900 mb-6">{texto.titulo}</h2>
                <div className="w-16 h-1 bg-gold-600 mb-6 mx-auto"></div>
                <p className="text-gray-700 leading-relaxed whitespace-pre-wrap font-sans text-lg">
                  {texto.conteudo}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}