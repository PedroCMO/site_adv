import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;
  
  const baseLinkClass = "px-4 py-2 rounded-md transition-all duration-300 font-medium";
  const activeLinkClass = "bg-gold-600 text-white shadow-md";
  const inactiveLinkClass = "text-gray-300 hover:text-white hover:bg-navy-800";

  return (
    <nav className="bg-navy-900 border-b-2 border-gold-600 sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo / Nome do Escritório (Fixo, pois não existe no models.py) */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gold-600 rounded flex items-center justify-center shadow-lg">
                <span className="text-white font-serif font-bold text-xl">C</span>
              </div>
              <span className="text-white font-serif font-bold text-xl tracking-wide uppercase">
                Carvalho <span className="text-gold-500">&</span> Oliveira
              </span>
            </Link>
          </div>

          {/* Menu Desktop */}
          <div className="hidden md:flex space-x-2">
            <Link to="/" className={`${baseLinkClass} ${isActive('/') ? activeLinkClass : inactiveLinkClass}`}>
              Início
            </Link>
            <Link to="/sobre" className={`${baseLinkClass} ${isActive('/sobre') ? activeLinkClass : inactiveLinkClass}`}>
              Sobre Nós
            </Link>
            <Link to="/equipe" className={`${baseLinkClass} ${isActive('/equipe') ? activeLinkClass : inactiveLinkClass}`}>
              A Equipe
            </Link>
            <Link to="/legislacao" className={`${baseLinkClass} ${isActive('/legislacao') ? activeLinkClass : inactiveLinkClass}`}>
              Legislação
            </Link>
          </div>

          {/* Botão de Contato Desktop */}
          <div className="hidden md:flex items-center">
            <Link 
              to="/contato" 
              className="border-2 border-gold-600 text-gold-500 hover:bg-gold-600 hover:text-white px-5 py-2 rounded-md font-semibold transition-all duration-300 shadow-md"
            >
              Fale Conosco
            </Link>
          </div>

          {/* Botão Menu Mobile */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-300 hover:text-white focus:outline-none"
          >
            <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

        </div>
      </div>

      {/* Menu Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-navy-800 border-t border-navy-700 pb-4">
          <div className="px-4 pt-4 space-y-3">
            <Link to="/" onClick={() => setIsOpen(false)} className="block text-white hover:text-gold-400 font-medium">Início</Link>
            <Link to="/sobre" onClick={() => setIsOpen(false)} className="block text-white hover:text-gold-400 font-medium">Sobre</Link>
            <Link to="/equipe" onClick={() => setIsOpen(false)} className="block text-white hover:text-gold-400 font-medium">Equipe</Link>
            <Link to="/legislacao" onClick={() => setIsOpen(false)} className="block text-white hover:text-gold-400 font-medium">Legislação</Link>
            <Link to="/contato" onClick={() => setIsOpen(false)} className="block bg-gold-600 text-white text-center py-2 rounded-md font-semibold">Contato</Link>
          </div>
        </div>
      )}
    </nav>
  );
}