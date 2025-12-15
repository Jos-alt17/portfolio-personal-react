import React from 'react';
import { useTheme } from '../context/ThemeContext.jsx';
import { Link } from 'react-router-dom';


const Header = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-10 shadow-md transition-colors duration-300 dark:bg-gray-800 bg-white">
      <div className="container mx-auto flex justify-between items-center p-4">
        
        {/* Logo/Título del Portafolio */}
        <Link 
          to="/" 
          className="text-2xl font-bold tracking-wider text-gray-900 dark:text-white hover:text-blue-500 transition-colors"
        >
        Soy Jose Pinduisaca 
        </Link>
        
        {/* Navegación y Botón de Tema */}
        <nav className="flex items-center space-x-6">
          <Link 
            to="/" 
            className="text-lg hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
          >
            Hoja de Vida
          </Link>
          <Link 
            to="/posts" 
            className="text-lg hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
          >
            Blog
          </Link>

          {/* Botón de Alternar Tema */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full border border-gray-300 dark:border-gray-600 shadow-sm transition-all duration-300 hover:bg-gray-200 dark:hover:bg-gray-700"
            aria-label={`Cambiar a modo ${theme === 'light' ? 'oscuro' : 'claro'}`}
          >
            {/* Ícono de Luna (oscuro) o Sol (claro) */}
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;