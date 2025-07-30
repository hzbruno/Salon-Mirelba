import React, { useRef } from 'react';
import productos from '../../datos/productos';
import categorias from '../../datos/categorias'; // importa el listado de categorías
import ItemProducto from "../itemDisplay/item";
import './productosFila.css';

export default function ProductosFila({ categoriasDeseadas, titulo }) {
  const filaRef = useRef();

  const scrollIzquierda = () => {
    filaRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollDerecha = () => {
    filaRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  // Función para obtener todas las rutas válidas según categorías deseadas
  const obtenerCategoriasExpandida = (categoriasInput) => {
    let categoriasExpandida = [];

    categoriasInput.forEach(catNombre => {
      // Buscar categoría principal por nombre o ruta
      const catPrincipal = categorias.find(c => c.ruta === catNombre || c.nombre.toLowerCase() === catNombre.toLowerCase());

      if (catPrincipal) {
        if (catPrincipal.subcategorias && catPrincipal.subcategorias.length > 0) {
          // Agregar las rutas de las subcategorias
          categoriasExpandida.push(...catPrincipal.subcategorias.map(sc => sc.ruta));
        } else {
          // No tiene subcategorias, agregar la ruta de la categoria principal
          categoriasExpandida.push(catPrincipal.ruta);
        }
      } else {
        // Si no encontró la categoría principal, agregar tal cual
        categoriasExpandida.push(catNombre);
      }
    });

    return categoriasExpandida;
  };

  // Asegurar que categoriasDeseadas sea un array
  const categoriasInputArray = Array.isArray(categoriasDeseadas)
    ? categoriasDeseadas
    : [categoriasDeseadas];

  // Expandir las categoriasDeseadas para incluir subcategorias si existen
  const categoriasParaFiltro = obtenerCategoriasExpandida(categoriasInputArray);

  const productosFiltrados = productos.filter(producto => {
    const categoriasProd = Array.isArray(producto.categoria)
      ? producto.categoria
      : [producto.categoria];
    return categoriasProd.some(cat =>
      categoriasParaFiltro.includes(cat.toLowerCase())
    );
  });

  return (
    <div className="seccion-fila">
      <h2 className="titulo-fila">{titulo}</h2>

      <div className="contenedor-fila">
        <button className="arrow izquierda" onClick={scrollIzquierda}>‹</button>

        <div className="productos-fila" ref={filaRef}>
          {productosFiltrados.map(p => (
            <ItemProducto
              key={p.id}
              id={p.id}
              imagen={process.env.PUBLIC_URL + p.imagen}
              nombre={p.nombre}
              precio={p.precio}
            />
          ))}
        </div>

        <button className="arrow derecha" onClick={scrollDerecha}>›</button>
      </div>
    </div>
  );
}
