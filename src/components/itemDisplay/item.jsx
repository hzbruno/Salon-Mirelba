import React from 'react';
import './item.css';
import { Link } from 'react-router-dom';

export default function Item({ id, imagen, nombre, precio }) {
  return (
    <Link to={`/producto/${id}`} className="item-link">
      <div className="producto-item">
        <img src={imagen} alt={nombre} className="producto-img" />
        <h3 className="producto-nombre">{nombre}</h3>
        <p className="producto-precio">${precio}</p>
      </div>
    </Link>
  );
}
