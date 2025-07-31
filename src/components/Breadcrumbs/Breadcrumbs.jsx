import React from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';
import productos from '../../datos/productos';
import './breadcrumbs.css';

export default function Breadcrumb() {
  const { id } = useParams();
  const location = useLocation();
  const producto = productos.find(p => p.id === id || p.id === parseInt(id));

  if (!producto) return null;

  const categoriaDesdeState = location.state?.categoria;

  // Asegura que categoria sea array
  const categorias = Array.isArray(producto.categoria)
    ? producto.categoria
    : [producto.categoria];

  // Buscar una categoría del producto que coincida con la activa (si vino del estado)
  const categoriaActiva = categoriaDesdeState && categorias.includes(categoriaDesdeState)
    ? categoriaDesdeState
    : categorias[0]; // fallback

  const partes = categoriaActiva?.split('-') || [];
  const grupo = partes[0];
  const subgrupo = partes[1];

  return (
    <div className="breadcrumb-container">
      <Link to="/" className="breadcrumb-link">Inicio</Link>
      <span className="breadcrumb-separator">/</span>

      {grupo && (
        <>
          <Link to={`/categoria/${grupo}`} className="breadcrumb-link">
            {capitalizar(grupo)}
          </Link>
        </>
      )}

      {subgrupo && (
        <>
          <span className="breadcrumb-separator">/</span>
          <Link to={`/categoria/${grupo}-${subgrupo}`} className="breadcrumb-link">
            {capitalizar(subgrupo)}
          </Link>
        </>
      )}

      <span className="breadcrumb-separator">/</span>
      <span className="breadcrumb-final">{producto.nombre}</span>
    </div>
  );
}

function capitalizar(texto) {
  return texto.charAt(0).toUpperCase() + texto.slice(1);
}
