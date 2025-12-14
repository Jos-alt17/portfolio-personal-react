import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import apiClient from '../api/client';

const PostDetailPage = () => {
  // Obtiene el ID de la URL
  const { id } = useParams(); 
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true);
        // GET de un post específico por ID
        const response = await apiClient.get(`/posts/${id}`); 
        setPost(response.data);
      } catch (error) {
        console.error(`Error al cargar post ${id}:`, error);
        setPost(null);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]); // Dependencia del ID para recargar si cambia la URL

  if (loading) return <p>Cargando detalle del post...</p>;
  if (!post) return <p>El post solicitado no existe.</p>;

  // Función simple para manejar saltos de línea (\n)
  const formatContent = (content) => content.split('\n').map((line, index) => (
    <p key={index} className="mb-4">{line}</p>
  ));

  return (
    <div className="prose lg:prose-xl">
      <h1>{post.title}</h1>
      <p className="text-sm text-gray-500 border-b pb-2">Publicado el {post.date} por {post.author}</p>
      <div className="mt-6">
        {formatContent(post.content)}
      </div>
    </div>
  );
};

export default PostDetailPage;