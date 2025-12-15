import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PostsPage from './pages/PostsPage';
import PostDetailPage from './pages/PostDetailPage';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    // 1. BrowserRouter envuelve toda la aplicación
    <BrowserRouter>
      {/* 2. Contenedor principal para fijar el footer abajo (flex-col y min-h-screen) */}
      <div className="flex flex-col min-h-screen"> 
        
        {/* 3. El Header se renderiza en todas las rutas */}
        <Header /> 
        
        {/* 4. Contenido principal: crece para empujar el footer y tiene padding centralizado */}
        <main className="container mx-auto p-4 flex-grow">
          {/* 5. Routes define el manejo de rutas */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/posts" element={<PostsPage />} />
            {/* Ruta dinámica para ver el detalle del post por ID */}
            <Route path="/posts/:id" element={<PostDetailPage />} /> 
            {/* Ruta para capturar cualquier URL no definida */}
            <Route path="*" element={<h1 className="text-3xl text-red-500 text-center mt-10">404: Página no encontrada</h1>} /> 
          </Routes>
        </main>

        {/* 6. El Footer se renderiza en todas las rutas */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;