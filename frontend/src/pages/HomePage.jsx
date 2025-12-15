import React, { useState, useEffect } from 'react';
import apiClient from '../api/client';

const HomePage = () => {
  const [experiencia, setExperiencia] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // ... (Tu función fetchExperiencia es la misma)
    const fetchExperiencia = async () => {
      try {
        setLoading(true);
        const response = await apiClient.get('/experiencia');
        setExperiencia(response.data);
      } catch (err) {
        setError("Error al cargar los datos de experiencia.");
      } finally {
        setLoading(false);
      }
    };
    fetchExperiencia();
  }, []);

  if (loading) return <div className="text-center mt-10 text-xl">Cargando hoja de vida...</div>;
  if (error) return <div className="text-center mt-10 text-red-500 text-xl">{error}</div>;

  return (
    <div className="max-w-4xl mx-auto py-8">
      
      {/* Sección de Datos Personales y Habilidades */}
      <section className="p-6 mb-8 rounded-lg shadow-xl dark:bg-gray-800 bg-white border border-gray-200 dark:border-gray-700">
        <h1 className="text-4xl font-extrabold mb-4 border-b pb-2">
            [Pinduisaca Chasipanta José]
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
            Desarrollador Full Stack | Enfocado en React y APIs REST.
        </p>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
                <h2 className="text-2xl font-semibold mb-3 text-blue-600 dark:text-blue-400">Contacto</h2>
                <ul className="space-y-1">
                    <li><span className="font-bold">Email:</span> jfpinduisaca@puce.edu.ec</li>
                    <li><span className="font-bold">Ubicación:</span> [Quito/Ecuador]</li>
                    <li><span className="font-bold">LinkedIn:</span> En construcción</li>
                </ul>
            </div>
            <div>
                <h2 className="text-2xl font-semibold mb-3 text-blue-600 dark:text-blue-400">Habilidades</h2>
                <div className="flex flex-wrap gap-2">
                    {['React', 'JavaScript', 'Tailwind CSS', 'Axios', 'Node.js', 'Git/GitHub'].map(skill => (
                        <span key={skill} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm dark:bg-blue-900 dark:text-blue-200">
                            {skill}
                        </span>
                    ))}
                </div>
            </div>
        </div>
      </section>

      {/* Sección de Experiencia Profesional (Cargada desde la API) */}
      <section className="mt-10">
        <h2 className="text-3xl font-bold border-b-2 pb-2 mb-6 text-gray-900 dark:text-white">
            Experiencia Profesional
        </h2>
        
        {experiencia.map(item => (
          <div key={item.id} className="mb-6 p-5 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-md transition duration-300">
            <div className="flex justify-between items-start">
              <h3 className="text-xl font-bold text-blue-700 dark:text-blue-300">{item.puesto}</h3>
              <p className="text-sm font-semibold text-gray-500 dark:text-gray-400">{item.duracion}</p>
            </div>
            <p className="text-lg mb-2 italic">{item.empresa}</p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{item.descripcion}</p>
          </div>
        ))}
      </section>
      
      {/* Sección de Estudios (Opcional, estática) */}
      <section className="mt-10">
         <h2 className="text-3xl font-bold border-b-2 pb-2 mb-6 text-gray-900 dark:text-white">
            Estudios
        </h2>
         <div className="p-5 rounded-lg border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-bold text-blue-700 dark:text-blue-300">Tecnologia en desarrollo de Software</h3>
            <p className="text-lg italic">Pontificia Universidad Catolica del Ecuador</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">2025 - 2026</p>
         </div>
      </section>
      
    </div>
  );
};

export default HomePage;