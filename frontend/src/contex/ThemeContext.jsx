import React, { createContext, useState, useEffect, useContext } from 'react';

// 1. Crear el Contexto
const ThemeContext = createContext();

// 2. Custom Hook para usar el contexto fácilmente
export const useTheme = () => useContext(ThemeContext);

// 3. Proveedor del Contexto
export const ThemeProvider = ({ children }) => {
  // Inicializar el tema desde localStorage o usar 'light' por defecto
  const initialTheme = localStorage.getItem('theme') || 'light';
  const [theme, setTheme] = useState(initialTheme);

  // Efecto para aplicar la clase al <html> (necesario para Tailwind)
  useEffect(() => {
    const root = window.document.documentElement;
    
    // Remover clases viejas
    root.classList.remove(theme === 'dark' ? 'light' : 'dark');
    
    // Agregar clase actual
    root.classList.add(theme);

    // Guardar la preferencia en localStorage
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Función para alternar el tema
  const toggleTheme = () => {
    setTheme(currentTheme => (currentTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};