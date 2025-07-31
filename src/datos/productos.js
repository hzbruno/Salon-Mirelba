// src/productos/productos.js
const productos = [
  // Juguetería
  ...Array.from({ length: 8 }, (_, i) => ({
    id: `juguete-${i}`,
    nombre: `Juguete ${i + 1}`,
    imagen: `/img/promo.png`,
    precio: 399 + i * 20,
    categoria: 'jugueteria',
    descripcion: 'Si has llegado hasta aquí es porque las descripciones de producto son un aspecto clave de cualquier tienda en línea. A continuación te mostraremos como hacer una gran descripción de producto con ejemplos.',
  })),

  // Vestimenta subcategorías
  ...['vestimenta-hombre', 'vestimenta-mujer', 'vestimenta-bebe', 'vestimenta-invierno', 'vestimenta-verano'].flatMap(ruta =>
    Array.from({ length: 5 }, (_, i) => ({
      id: `${ruta}-${i}`,
      nombre: `Ropa ${ruta.split('-')[1]} ${i + 1}`,
      imagen: `/img/promo.png`,
      precio: 899 + i * 50,
      categoria: ruta,
      descripcion: 'Si has llegado hasta aquí es porque las descripciones de producto son un aspecto clave de cualquier tienda en línea. A continuación te mostraremos como hacer una gran descripción de producto con ejemplos.',
    }))
  ),

  // Calzado subcategorías
  ...['calzado-hombre', 'calzado-mujer', 'calzado-nino', 'calzado-deportivo'].flatMap(ruta =>
    Array.from({ length: 4 }, (_, i) => ({
      id: `${ruta}-${i}`,
      nombre: `Calzado ${ruta.split('-')[1]} ${i + 1}`,
      imagen: `/img/promo.png`,
      precio: 1199 + i * 80,
      categoria: ruta,
      descripcion: 'Si has llegado hasta aquí es porque las descripciones de producto son un aspecto clave de cualquier tienda en línea. A continuación te mostraremos como hacer una gran descripción de producto con ejemplos.',
    }))
  ),

  // Electrodomésticos subcategorías
  ...['electrodomesticos-cocina', 'electrodomesticos-refrigeracion', 'electrodomesticos-lavado'].flatMap(ruta =>
    Array.from({ length: 3 }, (_, i) => ({
      id: `${ruta}-${i}`,
      nombre: `Electrodomésticos ${ruta.split('-')[1].charAt(0).toUpperCase() + ruta.split('-')[1].slice(1)} ${i + 1}`,
      imagen: `/img/promo.png`,
      precio: 5499 + i * 1000,
      categoria: ruta,
      descripcion: 'Si has llegado hasta aquí es porque las descripciones de producto son un aspecto clave de cualquier tienda en línea. A continuación te mostraremos como hacer una gran descripción de producto con ejemplos.',
    }))
  ),

  // Celulares
  ...Array.from({ length: 5 }, (_, i) => ({
    id: `celular-${i}`,
    nombre: `Celular ${i + 1}`,
    imagen: `/img/promo.png`,
    precio: 19999 + i * 1000,
    categoria: 'celulares',
    descripcion: 'Si has llegado hasta aquí es porque las descripciones de producto son un aspecto clave de cualquier tienda en línea. A continuación te mostraremos como hacer una gran descripción de producto con ejemplos.',
  })),

  // Smartwatches
  ...Array.from({ length: 4 }, (_, i) => ({
    id: `watch-${i}`,
    nombre: `Smartwatch ${i + 1}`,
    imagen: `/img/promo.png`,
    precio: 5999 + i * 500,
    categoria: 'smartwatches',
    descripcion: 'Si has llegado hasta aquí es porque las descripciones de producto son un aspecto clave de cualquier tienda en línea. A continuación te mostraremos como hacer una gran descripción de producto con ejemplos.',
  })),

  // Juegos de Mesa
  ...Array.from({ length: 6 }, (_, i) => ({
    id: `juego-${i}`,
    nombre: `Juego de Mesa ${i + 1}`,
    imagen: `/img/promo.png`,
    precio: 1799 + i * 200,
    categoria: 'juegosdemesa',
    descripcion: 'Si has llegado hasta aquí es porque las descripciones de producto son un aspecto clave de cualquier tienda en línea. A continuación te mostraremos como hacer una gran descripción de producto con ejemplos.',
  })),

  // Peluches
  ...Array.from({ length: 5 }, (_, i) => ({
    id: `peluche-${i}`,
    nombre: `Peluche ${i + 1}`,
    imagen: `/img/promo.png`,
    precio: 899 + i * 80,
    categoria: 'peluches',
    descripcion: 'Si has llegado hasta aquí es porque las descripciones de producto son un aspecto clave de cualquier tienda en línea. A continuación te mostraremos como hacer una gran descripción de producto con ejemplos.',
  })),

  // Hogar subcategorías
  ...['hogar-decoracion', 'hogar-organizacion', 'hogar-textiles'].flatMap(ruta =>
    Array.from({ length: 3 }, (_, i) => ({
      id: `${ruta}-${i}`,
      nombre: `Artículo ${ruta.charAt(0).toUpperCase() + ruta.slice(1)} ${i + 1}`,
      imagen: `/img/promo.png`,
      precio: 1399 + i * 300,
      categoria: ruta,
      descripcion: 'Si has llegado hasta aquí es porque las descripciones de producto son un aspecto clave de cualquier tienda en línea. A continuación te mostraremos como hacer una gran descripción de producto con ejemplos.',
    }))
  ),

  // Ofertas
  ...Array.from({ length: 10 }, (_, i) => ({
    id: `oferta-${i}`,
    nombre: `Producto en Oferta ${i + 1}`,
    imagen: `/img/promo.png`,
    precio: 999 + i * 150,
    categoria: 'ofertas',
    descripcion: 'Si has llegado hasta aquí es porque las descripciones de producto son un aspecto clave de cualquier tienda en línea. A continuación te mostraremos como hacer una gran descripción de producto con ejemplos.',
  })),
];

export default productos;
