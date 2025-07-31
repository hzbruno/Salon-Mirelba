// src/componentes/Breadcrumb.jsx
import React from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import productos from '../../datos/productos';
import './breadcrumbs.css';

export default function Breadcrumb() {
  const { id, nombre } = useParams();
  const location = useLocation();

  const items = [
    <Link key="inicio" to="/" className="breadcrumb-link">Inicio</Link>
  ];

  if (location.pathname.includes('/producto/')) {
    const producto = productos.find(p => p.id === parseInt(id));
    if (!producto) return null;

    const partes = producto.categoria.split('-');
    const grupo = partes[0];
    const subgrupo = partes[1];

    items.push(
      <Separador key="sep1" />,
      <Link key="grupo" to={`/categoria/${grupo}`} className="breadcrumb-link">
        {capitalizar(grupo)}
      </Link>
    );

    if (subgrupo) {
      items.push(
        <Separador key="sep2" />,
        <Link key="subgrupo" to={`/categoria/${grupo}-${subgrupo}`} className="breadcrumb-link">
          {capitalizar(subgrupo)}
        </Link>
      );
    }

    items.push(
      <Separador key="sep3" />,
      <span key="final" className="breadcrumb-final">{producto.nombre}</span>
    );
  }

  else if (location.pathname.includes('/categoria/')) {
    if (!nombre) return null;

    const partes = nombre.split('-');
    const grupo = partes[0];
    const subgrupo = partes[1];

    items.push(
      <Separador key="sep1" />,
      subgrupo ? (
        <Link key="grupo" to={`/categoria/${grupo}`} className="breadcrumb-link">
          {capitalizar(grupo)}
        </Link>
      ) : (
        <span key="grupo" className="breadcrumb-final">{capitalizar(grupo)}</span>
      )
    );

    if (subgrupo) {
      items.push(
        <Separador key="sep2" />,
        <span key="subgrupo" className="breadcrumb-final">{capitalizar(subgrupo)}</span>
      );
    }
  }

  return (
    <div className="breadcrumb-container">
      {items}
    </div>
  );
}

function Separador() {
  return <span className="breadcrumb-separator">/</span>;
}

function capitalizar(texto) {
  return texto.charAt(0).toUpperCase() + texto.slice(1);
}
