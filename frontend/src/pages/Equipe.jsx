import { useQuery } from '@tanstack/react-query'
import { fetchAdvogados } from '../services/api'

export default function Equipe() {
  const { data: advogados, isLoading, isError, error } = useQuery({
    queryKey: ['lista-advogados'],
    queryFn: fetchAdvogados,
  })

  if (isLoading) return <p>Carregando equipe...</p>
  if (isError) return <p>Ocorreu um erro: {error.message}</p>

  return (
    <div>
      <h1>Equipe do Escritório</h1>
      {advogados.map((advogado) => (
        <div key={advogado.id} style={{ marginBottom: '40px' }}>
          
          {/* Se o advogado tiver foto, a imagem aparece aqui com 150px de largura */}
          {advogado.foto_perfil && (
            <img 
              src={advogado.foto_perfil} 
              alt={`Foto de ${advogado.nome_completo}`} 
              style={{ width: '150px', borderRadius: '8px' }} 
            />
          )}

          <h2>{advogado.nome_completo}</h2>
          <p><strong>OAB:</strong> {advogado.oab}</p>
          <pre style={{ whiteSpace: 'pre-wrap', fontFamily: 'inherit' }}>
            {advogado.formacao}
          </pre>
          <hr />
        </div>
      ))}
    </div>
  )
}