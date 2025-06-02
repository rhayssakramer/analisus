import { useState } from 'react';
import { List, X } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <span className="text-blue-600 font-bold text-xl md:text-2xl">
            Capacitação em Análise de Dados
          </span>
        </Link>

        {/* Menu para desktop */}
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium">
            Início
          </Link>
          <Link to="/videos" className="text-gray-700 hover:text-blue-600 font-medium">
            Vídeos
          </Link>
          <Link to="/materiais" className="text-gray-700 hover:text-blue-600 font-medium">
            Materiais
          </Link>
          <Link to="/ferramentas" className="text-gray-700 hover:text-blue-600 font-medium">
            Ferramentas
          </Link>
          <Link to="/agenda" className="text-gray-700 hover:text-blue-600 font-medium">
            Agenda
          </Link>
          <Link to="/forum" className="text-gray-700 hover:text-blue-600 font-medium">
            Fórum
          </Link>
        </nav>

        {/* Botão de menu para mobile */}
        <button 
          className="md:hidden text-gray-700 hover:text-blue-600 focus:outline-none"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {isMenuOpen ? <X size={24} /> : <List size={24} />}
        </button>
      </div>

      {/* Menu mobile */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="container mx-auto px-4 py-2 flex flex-col space-y-3">
            <Link 
              to="/" 
              className="text-gray-700 hover:text-blue-600 font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Início
            </Link>
            <Link 
              to="/videos" 
              className="text-gray-700 hover:text-blue-600 font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Vídeos
            </Link>
            <Link 
              to="/materiais" 
              className="text-gray-700 hover:text-blue-600 font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Materiais
            </Link>
            <Link 
              to="/ferramentas" 
              className="text-gray-700 hover:text-blue-600 font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Ferramentas
            </Link>
            <Link 
              to="/agenda" 
              className="text-gray-700 hover:text-blue-600 font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Agenda
            </Link>
            <Link 
              to="/forum" 
              className="text-gray-700 hover:text-blue-600 font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Fórum
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
