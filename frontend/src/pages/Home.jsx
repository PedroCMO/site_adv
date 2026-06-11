import { useQuery } from '@tanstack/react-query'
import { fetchAreasAtuacao, fetchTextos } from '../services/api' // Importamos os dois serviços

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

  // Controle de carregamento e erro unificado
  if (loadingTextos || loadingAreas) return <p>Carregando a página inicial...</p>
  if (errorTextos || errorAreas) return <p>Ocorreu um erro ao carregar os dados.</p>

  return (
    <div>
      {/* SEÇÃO 1: Textos de Boas-Vindas (O código que você enviou) */}
      <div>
        {textos.length === 0 ? (
          <p>Nenhum texto cadastrado no sistema.</p>
        ) : (
          textos.map((texto) => (
            <div key={texto.id} style={{ marginBottom: '40px' }}>
              {texto.titulo && <h2>{texto.titulo}</h2>} 

              {texto.imagem_destaque && (
                <img 
                  src={texto.imagem_destaque} 
                  alt={texto.titulo} 
                  style={{ width: '400px', borderRadius: '8px', marginBottom: '15px' }} 
                />
              )}
              
              <pre style={{ whiteSpace: 'pre-wrap', fontFamily: 'inherit' }}>
                {texto.conteudo}
              </pre>
              <hr />
            </div>
          ))
        )}
      </div>

      {/* SEÇÃO 2: Áreas de Atuação */}
      <div>
        <h2>Nossas Áreas de Atuação</h2>
        
        {areas.length === 0 ? (
          <p>Nenhuma área de atuação cadastrada no sistema.</p>
        ) : (
          areas.map((area) => (
            <div key={area.id} style={{ marginBottom: '20px' }}>
              <h3>{area.nome}</h3>
              <pre style={{ whiteSpace: 'pre-wrap', fontFamily: 'inherit' }}>
                {area.especificidades}
              </pre>
            </div>
          ))
        )}
      </div>
    </div>
  )
}