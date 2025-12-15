# Portafolio Personal y Blog Técnico

Es un portafolio personal funcional desarrollado como una Single Page Application (SPA) utilizando **React** y **Vite**. Simula un *backend* RESTful local con **JSON Server** y gestiona la comunicación con **Axios**.

## Características y Requisitos Técnicos

* **Frontend:** React (Vite)
* **Backend Simulado:** JSON Server (`http://localhost:3000`)
* **Comunicación:** Axios para todas las peticiones (GET).
* **Rutas:** React Router DOM para manejar la navegación:
    * `/`: Hoja de Vida (carga `experiencia`).
    * `/posts`: Listado de Blog (carga `posts`).
    * `/posts/:id`: Detalle de un post específico.
* **Diseño:** Interfaz profesional con soporte para **Modo Claro/Oscuro** persistente vía `localStorage` y `ThemeContext`.
* **Contenido:** Dos posts técnicos detallados alojados en `db.json`.

# 💻 Portafolio Personal - [Tu Nombre Aquí]

Bienvenido al repositorio de mi Portafolio Personal, desarrollado para mostrar mi experiencia profesional, proyectos y habilidades en un entorno moderno y escalable.

El proyecto está dividido en dos partes:
1.  **Frontend:** Una aplicación Single Page Application (SPA) construida con React y Vite.
2.  **Backend:** Una API simulada con JSON Server para servir los datos de experiencia y posts de manera local.

## ✨ Características Principales

* **Diseño Responsivo:** Visualización óptima en dispositivos móviles, tabletas y escritorio.
* **Modo Oscuro (Dark Mode):** Alterna el tema de la interfaz con persistencia a través de `localStorage` y Tailwind CSS.
* **Gestión de Rutas:** Navegación fluida entre la Hoja de Vida, la lista de Posts (Blog) y el detalle de cada Post.
* **API Falsa:** Uso de Axios para consumir datos simulados de experiencia y blog desde `http://localhost:3000`.

## 🛠️ Tecnologías Utilizadas

| Categoría | Tecnología | Descripción |
| :--- | :--- | :--- |
| **Frontend** | `React` (con Vite) | Librería principal para la construcción de la interfaz de usuario. |
| **Estilos** | `Tailwind CSS` | Framework utility-first para estilos rápidos y responsivos. |
| **API/Datos** | `JSON Server` | Backend liviano y simulado para servir datos JSON desde `db.json`. |
| **Peticiones** | `Axios` | Cliente HTTP basado en promesas para la comunicación con la API. |
| **Rutas** | `React Router DOM` | Manejo de navegación y rutas dentro de la SPA. |

## 🚀 Instalación y Uso Local

Para correr el proyecto en tu máquina local, debes iniciar el **Backend (API)** y luego el **Frontend (Aplicación React)** en dos terminales separadas.

### Requisitos

Necesitas tener instalado [Node.js](https://nodejs.org/es) (versión LTS recomendada).

### 1. Iniciar el Backend (API)

Abre la **Terminal 1** y sigue estos pasos:

```bash
# Navega a la carpeta del backend
cd backend

# Instala las dependencias del backend (solo la primera vez)
npm install

# Inicia JSON Server en http://localhost:3000
npm start
Nota: La terminal debe mostrar: JSON Server is running on http://localhost:3000. Mantén esta terminal abierta.
2. Iniciar el Frontend (React)

Abre la Terminal 2 y sigue estos pasos:
# Navega a la carpeta del frontend
cd frontend

# Instala las dependencias del frontend (solo la primera vez)
npm install

# Inicia la aplicación React en http://localhost:5173
npm run dev
Una vez que ambos servidores estén activos, abre tu navegador en http://localhost:5173/ para ver el portafolio.
### Estructura del Proyecto
portafolio-personal/
├── backend/                  # Contiene JSON Server y db.json
│   ├── db.json               # Datos simulados de experiencia y posts
│   └── package.json
└── frontend/                 # Aplicación React/Vite
    ├── src/
    │   ├── api/              # Configuración de Axios (client.js)
    │   ├── components/       # Elementos reutilizables (Header, Footer, etc.)
    │   ├── context/          # Lógica del ThemeContext
    │   ├── pages/            # Componentes de ruta (HomePage, PostsPage)
    │   ├── App.jsx
    │   └── main.jsx
    └── tailwind.config.cjs   # Configuración de Tailwind (darkMode: 'class')