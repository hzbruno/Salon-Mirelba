import React from 'react';
import { useParams } from 'react-router-dom';
import productos from '../productos/productos';
import ItemProducto from '../itemDisplay/item';
import './displayCategoria.css';

export default function DisplayCategoria() {
  const { nombre } = useParams();

  const productosFiltrados = productos.filter(p =>
    Array.isArray(p.categoria)
      ? p.categoria.includes(nombre)
      : p.categoria === nombre
  );

  if (productosFiltrados.length === 0) {
    return <p className="no-productos">No hay productos en esta categoría.</p>;
  }

  return (
    <div className="categoria-container">
      <h1 className="categoria-titulo">{nombre}</h1>
      <div className="productos-grid">
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
    </div>
  );
}
