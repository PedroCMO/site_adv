import { useQuery } from '@tanstack/react-query'
import { fetchEscritorio } from '../services/api'

export default function Contato() {
  const { data: escritorios, isLoading, isError, error } = useQuery({
    queryKey: ['dados-escritorio'],
    queryFn: fetchEscritorio,
  })

  if (isLoading) return <p>Carregando as informações de contato...</p>

  if (isError) return <p>Ocorreu um erro ao buscar os dados: {error.message}</p>

  if (!escritorios || escritorios.length === 0) {
    return <p>Nenhum endereço ou contato cadastrado no sistema do escritório.</p>
  }

  return (
    <div>
      <h1>Nossos Escritórios</h1>

      {escritorios.map((local) => (
        <div key={local.id} style={{ marginBottom: '50px', borderBottom: '1px solid #ccc', paddingBottom: '20px' }}>
          
          <h2>Sede: {local.cidade} - {local.estado}</h2>
          
          {/* Mostra a foto se houver */}
          {local.foto_local && (
             <img 
               src={local.foto_local} 
               alt={`Escritório em ${local.cidade}`} 
               style={{ width: '300px', borderRadius: '8px', marginBottom: '15px' }} 
             />
          )}

          <div>
            <p><strong>Endereço:</strong> {local.rua}, {local.numero} {local.complemento}</p>
            <p>CEP: {local.cep} | {local.cidade} - {local.estado}</p>
            <p><strong>Telefone:</strong> {local.telefone}</p>
            <p><strong>WhatsApp:</strong> {local.whatsapp}</p>
            <p><strong>E-mail Comercial:</strong> {local.email}</p>
          </div>
        </div>
      ))}

      {/* Redes sociais gerais. Puxamos as infos do primeiro escritório, 
          pois geralmente são links unificados do escritório todo */}
      <div>
        <h2>Acompanhe-nos nas redes</h2>
        {escritorios[0].instagram && (
          <p>
            <strong>Instagram:</strong> <a href={escritorios[0].instagram} target="_blank" rel="noreferrer">{escritorios[0].instagram}</a>
          </p>
        )}
        {escritorios[0].linkedin && (
          <p>
            <strong>LinkedIn:</strong> <a href={escritorios[0].linkedin} target="_blank" rel="noreferrer">{escritorios[0].linkedin}</a>
          </p>
        )}
      </div>
    </div>
  )
}