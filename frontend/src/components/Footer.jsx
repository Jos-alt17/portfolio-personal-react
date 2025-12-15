import React from 'react';

const Footer = () => {
  return (
    <footer className="mt-12 border-t border-gray-200 dark:border-gray-700 p-6 text-center text-sm text-gray-600 dark:text-gray-400">
      <div className="container mx-auto">
        <p>Desarrollado con React, Tailwind CSS y JSON Server.</p>
        <p>&copy; {new Date().getFullYear()} [Pinduisaca Jose]. Todos los derechos reservados.</p>
        <div className="mt-2 space-x-4">
          <a href="https://github.com/Jos-alt17" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">GitHub</a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;