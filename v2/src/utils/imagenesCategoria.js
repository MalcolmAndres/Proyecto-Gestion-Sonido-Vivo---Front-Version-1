// Imágenes genéricas por categoría de instrumento.
// Los archivos están en public/img/categorias/ y se sirven desde "/img/categorias/...".

const IMAGENES = {
  "guitarras acusticas": "/img/categorias/guitarra-acustica.jpg",
  "guitarras electricas": "/img/categorias/guitarra-electrica.jpg",
  "guitarras": "/img/categorias/guitarra-electrica.jpg",
  "bajos electricos": "/img/categorias/bajo.jpg",
  "bajos": "/img/categorias/bajo.jpg",
  "baterias": "/img/categorias/bateria.jpg",
  "teclados y pianos": "/img/categorias/teclado.jpg",
  "teclados": "/img/categorias/teclado.jpg",
  "amplificadores": "/img/categorias/amplificador.jpg",
  "microfonos": "/img/categorias/microfono.jpg",
  "pedales de efectos": "/img/categorias/pedales.jpg",
  "pedales": "/img/categorias/pedales.jpg",
  "estudio y grabacion": "/img/categorias/estudio.jpg",
  "accesorios": "/img/categorias/accesorios.jpg",
};

// "Baterías" -> "baterias" (minúsculas y sin tildes) para comparar sin errores
const normalizar = (texto) =>
  texto.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").trim();

// Devuelve la imagen de la categoría, o null si esa categoría todavía no tiene imagen
export function getImagenCategoria(categoria) {
  if (!categoria) return null;
  return IMAGENES[normalizar(categoria)] || null;
}

// Imagen a mostrar para un producto:
// 1) la que viene del backend (imagenUrl), 2) la de su categoría, 3) un placeholder
export function getImagenProducto(producto) {
  return (
    producto.imagenUrl ||
    getImagenCategoria(producto.categoria) ||
    `https://placehold.co/400x300?text=${encodeURIComponent(producto.categoria || "Producto")}`
  );
}
