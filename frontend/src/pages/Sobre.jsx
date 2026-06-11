import { useQuery } from '@tanstack/react-query'
import { fetchTextos } from '../services/api'

export default function Sobre() {
  const { data: textos, isLoading, isError, error } = useQuery({
    queryKey: ['textos-site'],
    queryFn: fetchTextos,
  })

  if (isLoading) return <p>Carregando informações...</p>
  if (isError) return <p>Ocorreu um erro: {error.message}</p>

  return (
    <div>
      <h1>Sobre o Escritório</h1>
      
      {textos.length === 0 ? (
        <p>Nenhum texto cadastrado no sistema.</p>
      ) : (
        textos.map((texto) => (
          <div key={texto.id}>
            {/* O && faz o título só aparecer se ele existir no banco */}
            {texto.titulo && <h2>{texto.titulo}</h2>} 
            
            {/* A tag pre mantém as quebras de linha exatas que você digitou no painel admin */}
            <pre style={{ whiteSpace: 'pre-wrap', fontFamily: 'inherit' }}>
              {texto.conteudo}
            </pre>
            <hr />
          </div>
        ))
      )}
    </div>
  )
}