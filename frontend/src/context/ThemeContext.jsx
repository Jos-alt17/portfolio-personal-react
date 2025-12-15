import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext(null);

export const ThemeProvider = ({ children }) => {
  // 1. INICIALIZACIÓN DEL ESTADO (Corrigiendo el ReferenceError)
  const [theme, setTheme] = useState(
    () => localStorage.getItem('theme') || 'light'
  );

  // 2. EFECTO PARA APLICAR LA CLASE 'dark'
  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [theme]);

  // 3. FUNCIÓN PARA CAMBIAR EL TEMA
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Hook personalizado
export const useTheme = () => {
  const context = useContext(ThemeContext);
  
  if (context === null) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};