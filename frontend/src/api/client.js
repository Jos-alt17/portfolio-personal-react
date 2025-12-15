// frontend/src/api/client.js

import axios from 'axios';

// 1. Creación de la instancia Axios
const apiClient = axios.create({
  // Asegúrate de que la URL apunta a tu JSON Server
  baseURL: 'http://localhost:3000', 
  timeout: 5000,
});

// 2. CORRECCIÓN CLAVE: Usar export default
export default apiClient;