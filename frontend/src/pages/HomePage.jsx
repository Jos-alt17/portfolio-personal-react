import React, { useState, useEffect } from 'react';
import apiClient from '../api/client';

const HomePage = () => {
  const [experiencia, setExperiencia] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchExperiencia = async () => {
      try {
        setLoading(true);
        // Usa la instancia de Axios configurada
        const response = await apiClient.get('/experiencia');
        setExperiencia(response.data);
      } catch (err) {
        console.error("Error al cargar experiencia:", err);
        setError("Error al cargar los datos de experiencia.");
      } finally {
        setLoading(false);
      }
    };

    fetchExperiencia();
  }, []);

  if (loading) return <p>Cargando hoja de vida...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="prose lg:prose-xl">
      <h2>👋 Hoja de Vida Digital</h2>
      {/* Datos personales, estudios, habilidades... (pueden ser estáticos o de otra API) */}
      <section>
        <h3>Datos Personales</h3>
        <p>Nombre: **Tu Nombre Completo**</p>
        <p>Email: **tu.email@ejemplo.com**</p>
        <p>LinkedIn: [Tu Perfil]</p>
      </section>

      <section>
        <h3>Experiencia Profesional</h3>
        {experiencia.map(item => (
          <div key={item.id} className="mb-4 p-3 border rounded shadow-sm">
            <h4>{item.puesto} en {item.empresa}</h4>
            <p className="text-sm text-gray-500">{item.duracion}</p>
            <p>{item.descripcion}</p>
          </div>
        ))}
      </section>
      {/* Otras secciones (Habilidades, Estudios, etc.) */}
    </div>
  );
};

export default HomePage;