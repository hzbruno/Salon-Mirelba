import React from 'react';
import './item.css';
import { Link, useLocation } from 'react-router-dom';

export default function Item({ id, imagen, nombre, precio }) {
  const location = useLocation();

  // Detectar la categoría actual desde la URL: /categoria/:nombre
  const categoriaActual = location.pathname.startsWith('/categoria/')
    ? location.pathname.split('/').pop()
    : null;

  return (
    <Link
      to={`/producto/${id}`}
      state={{ categoria: categoriaActual }}
      className="item-link"
    >
      <div className="producto-item">
        <img src={imagen} alt={nombre} className="producto-img" />
        <h3 className="producto-nombre">{nombre}</h3>
        <p className="producto-precio">${precio}</p>
      </div>
    </Link>
  );
}
