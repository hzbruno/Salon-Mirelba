import React from 'react';
import { useParams } from 'react-router-dom';
import productos from '../datos/productos';
import categorias from '../datos/categorias';
import ProductosFila from '../components/filaProductos/productosFila';
import ItemProducto from '../components/itemDisplay/item';
import Breadcrumbs from '../components/Breadcrumbs/BreadcrumbsCategory';
import './displayCategoria.css';

export default function DisplayCategoria() {
  const { nombre } = useParams();

  // Buscar categoría principal (por ruta)
  const categoriaPrincipal = categorias.find(cat => cat.ruta === nombre);

  // Buscar subcategoría si no se encontró en principal
  let subcategoriaEncontrada = null;
  let categoriaPadre = null;

  if (!categoriaPrincipal) {
    for (let cat of categorias) {
      if (cat.subcategorias) {
        const sub = cat.subcategorias.find(s => s.ruta === nombre);
        if (sub) {
          subcategoriaEncontrada = sub;
          categoriaPadre = cat;
          break;
        }
      }
    }
  }

  // Si es una subcategoría
  if (subcategoriaEncontrada) {
    const productosFiltrados = productos.filter(p => p.categoria === subcategoriaEncontrada.ruta);

    return (
      <>
        <Breadcrumbs />
        <div className="categoria-container">
          <h1 className="categoria-titulo">
            {categoriaPadre.nombre} / {subcategoriaEncontrada.nombre}
          </h1>
          <div className="productos-grid">
            {productosFiltrados.length > 0 ? (
              productosFiltrados.map(p => (
                <div key={p.id} className="producto-item-wrapper">
                  <ItemProducto
                    id={p.id}
                    imagen={process.env.PUBLIC_URL + p.imagen}
                    nombre={p.nombre}
                    precio={p.precio}
                  />
                </div>
              ))
            ) : (
              <p className="no-productos">No hay productos en esta subcategoría.</p>
            )}
          </div>
        </div>
      </>
    );
  }

  // Si es una categoría con subcategorías
  if (categoriaPrincipal?.subcategorias && categoriaPrincipal.subcategorias.length > 0) {
    return (
      <>
        <Breadcrumbs />
        <div className="categoria-container">
          <h1 className="categoria-titulo">{categoriaPrincipal.nombre}</h1>
          {categoriaPrincipal.subcategorias.map((sub, idx) => (
            <ProductosFila
              key={idx}
              categoriasDeseadas={[sub.ruta]}
              titulo={sub.nombre}
            />
          ))}
        </div>
      </>
    );
  }

  // Si es una categoría sin subcategorías
  if (categoriaPrincipal) {
    const productosFiltrados = productos.filter(p => p.categoria === categoriaPrincipal.ruta);

    return (
      <>
        <Breadcrumbs />
        <div className="categoria-container">
          <h1 className="categoria-titulo">{categoriaPrincipal.nombre}</h1>
          <div className="productos-grid">
            {productosFiltrados.length > 0 ? (
              productosFiltrados.map(p => (
                <div key={p.id} className="producto-item-wrapper">
                  <ItemProducto
                    id={p.id}
                    imagen={process.env.PUBLIC_URL + p.imagen}
                    nombre={p.nombre}
                    precio={p.precio}
                  />
                </div>
              ))
            ) : (
              <p className="no-productos">No hay productos en esta categoría.</p>
            )}
          </div>
        </div>
      </>
    );
  }

  // Si no coincide nada
  return <p className="no-productos">Categoría no encontrada.</p>;
}
