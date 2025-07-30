// src/productos/productos.js
const productos = [
  // Juguetería
  ...Array.from({ length: 8 }, (_, i) => ({
    id: `juguete-${i}`,
    nombre: `Juguete ${i + 1}`,
    imagen: `/img/promo.png`,
    precio: 399 + i * 20,
    categoria: 'jugueteria',
  })),

  // Vestimenta subcategorías
  ...['vestimenta-hombre', 'vestimenta-mujer', 'vestimenta-bebe', 'vestimenta-invierno', 'vestimenta-verano'].flatMap(ruta =>
    Array.from({ length: 5 }, (_, i) => ({
      id: `${ruta}-${i}`,
      nombre: `Ropa ${ruta.split('-')[1]} ${i + 1}`,
      imagen: `/img/promo.png`,
      precio: 899 + i * 50,
      categoria: ruta,
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
    }))
  ),

  // Electrodomésticos subcategorías
  ...['cocina', 'refrigeracion', 'lavado'].flatMap(ruta =>
    Array.from({ length: 3 }, (_, i) => ({
      id: `electro-${ruta}-${i}`,
      nombre: `Electro ${ruta.charAt(0).toUpperCase() + ruta.slice(1)} ${i + 1}`,
      imagen: `/img/promo.png`,
      precio: 5499 + i * 1000,
      categoria: ruta,
    }))
  ),

  // Celulares
  ...Array.from({ length: 5 }, (_, i) => ({
    id: `celular-${i}`,
    nombre: `Celular ${i + 1}`,
    imagen: `/img/promo.png`,
    precio: 19999 + i * 1000,
    categoria: 'celulares',
  })),

  // Smartwatches
  ...Array.from({ length: 4 }, (_, i) => ({
    id: `watch-${i}`,
    nombre: `Smartwatch ${i + 1}`,
    imagen: `/img/promo.png`,
    precio: 5999 + i * 500,
    categoria: 'smartwatches',
  })),

  // Juegos de Mesa
  ...Array.from({ length: 6 }, (_, i) => ({
    id: `juego-${i}`,
    nombre: `Juego de Mesa ${i + 1}`,
    imagen: `/img/promo.png`,
    precio: 1799 + i * 200,
    categoria: 'juegosdemesa',
  })),

  // Peluches
  ...Array.from({ length: 5 }, (_, i) => ({
    id: `peluche-${i}`,
    nombre: `Peluche ${i + 1}`,
    imagen: `/img/promo.png`,
    precio: 899 + i * 80,
    categoria: 'peluches',
  })),

  // Hogar subcategorías
  ...['decoracion', 'organizacion', 'textiles'].flatMap(ruta =>
    Array.from({ length: 3 }, (_, i) => ({
      id: `hogar-${ruta}-${i}`,
      nombre: `Artículo ${ruta.charAt(0).toUpperCase() + ruta.slice(1)} ${i + 1}`,
      imagen: `/img/promo.png`,
      precio: 1399 + i * 300,
      categoria: ruta,
    }))
  ),

  // Ofertas
  ...Array.from({ length: 10 }, (_, i) => ({
    id: `oferta-${i}`,
    nombre: `Producto en Oferta ${i + 1}`,
    imagen: `/img/promo.png`,
    precio: 999 + i * 150,
    categoria: 'ofertas',
  })),
];

export default productos;
