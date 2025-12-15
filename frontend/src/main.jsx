// frontend/src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css'; 

// Importación del Proveedor (asegúrate de la ruta correcta)
import { ThemeProvider } from './context/ThemeContext.jsx'; 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* ¡CORRECCIÓN OBLIGATORIA! ThemeProvider debe envolver a App */}
    <ThemeProvider> 
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);