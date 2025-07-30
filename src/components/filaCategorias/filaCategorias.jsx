import React from 'react';
import { Link } from 'react-router-dom';
import categorias from '../../datos/categorias';
import './filaCategorias.css';

export default function FilaCategorias() {
  return (
    <div className="fila-categorias-container">
      <div className="fila-categorias">
        {categorias
        .filter(cat => cat.nombre.toLowerCase() !== 'ofertas') // Filtra "Ofertas"
        .map((cat, index) => (
            <Link
            key={index}
            to={`/categoria/${cat.ruta}`}
            className={`categoria-item ${cat.especial ? 'categoria-oferta' : ''}`}
            >
            {cat.nombre}
            </Link>
        ))}
      </div>
    </div>
  );
}
