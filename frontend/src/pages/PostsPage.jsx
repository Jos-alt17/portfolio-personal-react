import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import apiClient from '../api/client';

const PostsPage = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        // GET de todos los posts
        const response = await apiClient.get('/posts'); 
        setPosts(response.data);
      } catch (error) {
        console.error("Error al cargar posts:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  if (loading) return <p>Cargando posts del blog...</p>;

  return (
    <div>
      <h2>📰 Blog Técnico</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {posts.map(post => (
          <div key={post.id} className="border p-4 rounded shadow hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold mb-2">{post.title}</h3>
            <p className="text-sm text-gray-500 mb-3">Fecha: {post.date}</p>
            {/* Link al detalle del post */}
            <Link 
              to={`/posts/${post.id}`} 
              className="text-blue-600 hover:underline"
            >
              Leer más...
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostsPage;