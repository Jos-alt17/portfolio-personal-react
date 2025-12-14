import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext'; // 👈 Importa

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="dark:bg-gray-800 dark:text-white bg-gray-100 text-gray-900 shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          Mi Portafolio
        </Link>
        <nav className="flex items-center space-x-4">
          <Link to="/" className="hover:text-blue-500 dark:hover:text-blue-300">Hoja de Vida</Link>
          <Link to="/posts" className="hover:text-blue-500 dark:hover:text-blue-300">Blog</Link>
          
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full dark:bg-gray-700 bg-white shadow-inner"
            aria-label={`Cambiar a modo ${theme === 'light' ? 'oscuro' : 'claro'}`}
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;