import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-navy-900 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gold-600 rounded flex items-center justify-center">
              <span className="text-white font-serif font-bold text-xl">J</span>
            </div>
            <span className="text-white font-serif text-xl font-semibold tracking-wide">
              Juris Consultoria
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className="text-gray-300 hover:text-gold-400 transition-colors duration-300 font-medium"
            >
              Início
            </Link>
            <Link 
              to="/sobre" 
              className="text-gray-300 hover:text-gold-400 transition-colors duration-300 font-medium"
            >
              Sobre
            </Link>
            <Link 
              to="/equipe" 
              className="text-gray-300 hover:text-gold-400 transition-colors duration-300 font-medium"
            >
              Equipe
            </Link>
            <Link 
              to="/contato" 
              className="text-gray-300 hover:text-gold-400 transition-colors duration-300 font-medium"
            >
              Contato
            </Link>
            <Link 
              to="/legislacao" 
              className="text-gray-300 hover:text-gold-400 transition-colors duration-300 font-medium"
            >
              Legislação
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-300 hover:text-white focus:outline-none"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-navy-800 border-t border-navy-700">
          <div className="px-4 pt-2 pb-4 space-y-2">
            <Link
              to="/"
              className="block text-gray-300 hover:text-gold-400 hover:bg-navy-700 px-3 py-2 rounded-md transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Início
            </Link>
            <Link
              to="/sobre"
              className="block text-gray-300 hover:text-gold-400 hover:bg-navy-700 px-3 py-2 rounded-md transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Sobre
            </Link>
            <Link
              to="/equipe"
              className="block text-gray-300 hover:text-gold-400 hover:bg-navy-700 px-3 py-2 rounded-md transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Equipe
            </Link>
            <Link
              to="/contato"
              className="block text-gray-300 hover:text-gold-400 hover:bg-navy-700 px-3 py-2 rounded-md transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Contato
            </Link>
            <Link
              to="/legislacao"
              className="block text-gray-300 hover:text-gold-400 hover:bg-navy-700 px-3 py-2 rounded-md transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Legislação
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}