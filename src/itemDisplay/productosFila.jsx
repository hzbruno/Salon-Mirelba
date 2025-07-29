import React, { useRef } from 'react';
import productos from '../productos/productos';
import ItemProducto from "./item";
import './productosFila.css';

export default function ProductosFila({ categoriasDeseadas, titulo }) {
  const filaRef = useRef();

  const scrollIzquierda = () => {
    filaRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollDerecha = () => {
    filaRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  const productosFiltrados = productos.filter(producto => {
    const categorias = Array.isArray(producto.categoria)
      ? producto.categoria
      : [producto.categoria];
    return categorias.some(cat =>
      categoriasDeseadas.includes(cat.toLowerCase())
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
