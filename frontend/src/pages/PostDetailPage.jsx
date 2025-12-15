import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import apiClient from '../api/client';

const PostDetailPage = () => {
  // Obtiene el ID de la URL
  const { id } = useParams(); 
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true);
        // GET de un post específico por ID
        const response = await apiClient.get(`/posts/${id}`); 
        setPost(response.data);
      } catch (err) {
        console.error(`Error al cargar post ${id}:`, err);
        setError("El post solicitado no existe o hubo un error de conexión.");
        setPost(null);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]); 

  // Función para manejar saltos de línea (\n) y devolver párrafos
  const formatContent = (content) => {
    return content.split('\n').map((line, index) => (
      // Si la línea empieza con negrita (típico de Markdown/tu contenido), úsalo como encabezado.
      line.startsWith('**') 
        ? <h3 key={index} className="text-2xl font-bold mt-6 mb-3 text-gray-900 dark:text-white">{line.replace(/\*\*/g, '')}</h3>
        : <p key={index} className="mb-4 leading-relaxed text-lg">{line}</p>
    ));
  };


  if (loading) return <p className="text-center mt-10 text-xl">Cargando post...</p>;
  if (error || !post) return <p className="text-center mt-10 text-red-500 text-xl">Error: {error || "Post no encontrado."}</p>;

  return (
    <div className="py-8">
      {/* Contenedor centralizado para la lectura */}
      <div className="max-w-3xl mx-auto"> 
        
        {/* Título */}
        <h1 className="text-5xl font-extrabold mb-4 text-gray-900 dark:text-white leading-tight">
          {post.title}
        </h1>
        
        {/* Metadatos */}
        <p className="text-md text-gray-500 dark:text-gray-400 mb-8 border-b pb-4">
          Publicado el {post.date}
          {post.author && ` por ${post.author}`}
        </p>

        {/* Contenido del Post */}
        {/* Aquí es donde la función formatContent entra en acción */}
        <div className="text-gray-700 dark:text-gray-200">
          {formatContent(post.content)}
        </div>
        
        {/* Botón de regreso */}
        <div className="mt-12 text-center">
            <Link to="/posts" className="inline-block px-6 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
                &larr; Volver al Blog
            </Link>
        </div>
      </div>
    </div>
  );
};

export default PostDetailPage;