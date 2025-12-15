import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import apiClient from '../api/client';

const PostsPage = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        // GET de todos los posts
        const response = await apiClient.get('/posts'); 
        setPosts(response.data);
      } catch (err) {
        console.error("Error al cargar posts:", err);
        setError("No se pudieron cargar los posts del blog.");
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  if (loading) return <p className="text-center mt-10 text-xl">Cargando posts...</p>;
  if (error) return <p className="text-center mt-10 text-red-500 text-xl">{error}</p>;

  return (
    <div className="py-8">
      <h1 className="text-4xl font-extrabold mb-8 border-b-2 pb-2 text-gray-900 dark:text-white">
        📰 *** Blog Técnico *** 📰
      </h1>
      
      {/* Grid para el listado de posts (responsive) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map(post => (
          <div 
            key={post.id} 
            className="flex flex-col border border-gray-200 dark:border-gray-700 rounded-lg shadow-md hover:shadow-xl transition duration-300 overflow-hidden dark:bg-gray-800 bg-white"
          >
            <div className="p-5 flex-grow">
              {/* Título */}
              <h2 className="text-2xl font-bold mb-2 text-blue-600 dark:text-blue-400">
                {post.title}
              </h2>
              
              {/* Fecha y Autor */}
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                Publicado el {post.date}
              </p>
              
              {/* Vista previa del contenido (opcional, para ser más atractivo) */}
              <p className="text-gray-700 dark:text-gray-300 line-clamp-3 mb-4">
                {post.content.substring(0, 100)}... 
              </p>
              
              {/* Enlace para leer más */}
              <Link 
                to={`/posts/${post.id}`} 
                className="mt-auto inline-block text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200 font-semibold"
              >
                Leer Post Completo &rarr;
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostsPage;