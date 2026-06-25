import { Link } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { fetchEscritorio } from '../services/api'

export default function Footer() {
  const { data: escritorios } = useQuery({
    queryKey: ['dados-escritorio'],
    queryFn: fetchEscritorio,
  })

  const escritorio = escritorios && escritorios.length > 0 ? escritorios[0] : null

  return (
    <footer className="bg-slate-950 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {}
          {/* Column 1: About */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
              </svg>
              <span className="text-white font-serif text-xl font-semibold tracking-wide">
                Oliveira <span className="text-blue-500">&</span> Advogados
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Excelência jurídica com compromisso e integridade. 
              Garantimos a defesa incansável dos seus direitos com o rigor que a justiça exige.
            </p>
          </div>

          {}
          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-white font-serif text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm">
                  Início
                </Link>
              </li>
              <li>
                <Link to="/sobre" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link to="/equipe" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm">
                  Nossa Equipe
                </Link>
              </li>
              <li>
                <Link to="/contato" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm">
                  Contato
                </Link>
              </li>
              <li>
                <Link to="/legislacao" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm">
                  Legislação
                </Link>
              </li>
            </ul>
          </div>

          {}
          {/* Column 3: Contact Info */}
          <div>
            <h3 className="text-white font-serif text-lg font-semibold mb-4">Contato</h3>
            {escritorio ? (
              <div className="space-y-3 text-sm">
                <div className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <p className="text-gray-400">{escritorio.rua}, {escritorio.numero}</p>
                    {escritorio.complemento && <p className="text-gray-400">{escritorio.complemento}</p>}
                    <p className="text-gray-400">{escritorio.cep}</p>
                    <p className="text-gray-400">{escritorio.cidade} - {escritorio.estado}</p>
                  </div>
                </div>

                {escritorio.telefone && (
                  <div className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-blue-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <a href={`tel:${escritorio.telefone}`} className="text-gray-400 hover:text-blue-400 transition-colors">
                      {escritorio.telefone}
                    </a>
                  </div>
                )}

                {escritorio.whatsapp && (
                  <div className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-blue-500 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    <a href={`https://wa.me/${escritorio.whatsapp.replace(/\D/g, '')}`} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
                      {escritorio.whatsapp}
                    </a>
                  </div>
                )}

                {escritorio.email && (
                  <div className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-blue-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <a href={`mailto:${escritorio.email}`} className="text-gray-400 hover:text-blue-400 transition-colors">
                      {escritorio.email}
                    </a>
                  </div>
                )}
              </div>
            ) : (
              <p className="text-gray-500 text-sm">Informações de contato não disponíveis</p>
            )}
          </div>
        </div>

        {}
        {/* Social Media */}
        {escritorio && (
          <div className="mt-8 pt-8 border-t border-slate-800">
            <div className="flex flex-wrap gap-4">
              {escritorio.instagram && (
                <a href={escritorio.instagram} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
              )}
              {escritorio.linkedin && (
                <a href={escritorio.linkedin} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
              )}
              {escritorio.facebook && (
                <a href={escritorio.facebook} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
              )}
            </div>
          </div>
        )}

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-slate-800 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Oliveira & Advogados. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}