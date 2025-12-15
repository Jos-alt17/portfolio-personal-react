// frontend/postcss.config.cjs (Código CORREGIDO)

module.exports = {
  plugins: {
    // CAMBIO CLAVE: Usamos el nuevo paquete '@tailwindcss/postcss'
    '@tailwindcss/postcss': {}, 
    'autoprefixer': {},
  },
}