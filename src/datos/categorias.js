// src/datos/categorias.js
const categorias = [
  {
    nombre: 'Juguetería',
    ruta: 'jugueteria',
  },
  {
    nombre: 'Vestimenta',
    ruta: 'vestimenta',
    subcategorias: [
      { nombre: 'Hombre', ruta: 'vestimenta-hombre' },
      { nombre: 'Mujer', ruta: 'vestimenta-mujer' },
      { nombre: 'Bebé', ruta: 'vestimenta-bebe' },
      { nombre: 'Invierno', ruta: 'vestimenta-invierno' },
      { nombre: 'Verano', ruta: 'vestimenta-verano' },
    ]
  },
  {
    nombre: 'Calzado',
    ruta: 'calzado',
    subcategorias: [
      { nombre: 'Hombre', ruta: 'calzado-hombre' },
      { nombre: 'Mujer', ruta: 'calzado-mujer' },
      { nombre: 'Niño', ruta: 'calzado-nino' },
      { nombre: 'Deportivo', ruta: 'calzado-deportivo' },
    ]
  },
  {
    nombre: 'Electrodomésticos',
    ruta: 'electrodomesticos',
    subcategorias: [
      { nombre: 'Cocina', ruta: 'electrodomesticos-cocina' },
      { nombre: 'Refrigeración', ruta: 'electrodomesticos-refrigeracion' },
      { nombre: 'Lavado', ruta: 'electrodomesticos-lavado' },
    ]
  },
  {
    nombre: 'Celulares',
    ruta: 'celulares',
  },
  {
    nombre: 'Smartwatches',
    ruta: 'smartwatches',
  },
  {
    nombre: 'Juegos de Mesa',
    ruta: 'juegosdemesa',
  },
  {
    nombre: 'Peluches',
    ruta: 'peluches',
  },
  {
    nombre: 'Hogar',
    ruta: 'hogar',
    subcategorias: [
      { nombre: 'Decoración', ruta: 'hogar-decoracion' },
      { nombre: 'Organización', ruta: 'hogar-organizacion' },
      { nombre: 'Textiles', ruta: 'hogar-textiles' },
    ]
  },
  {
    nombre: 'Ofertas',
    ruta: 'ofertas',
    especial: true // para aplicar color rojo o icono
  },
];

export default categorias;
