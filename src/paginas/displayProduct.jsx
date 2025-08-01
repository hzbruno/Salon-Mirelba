import React from 'react';
import { useParams } from 'react-router-dom';
import productos from '../datos/productos';
import './displayProduct.css';
import ProductosFila from '../components/filaProductos/productosFila';
import Breadcrumbs from '../components/Breadcrumbs/Breadcrumbs';

export default function DisplayProduct() {
  const { id } = useParams();
  const producto = productos.find(p => p.id === id);



  if (!producto) return <p style={{ textAlign: 'center', marginTop: 50 }}>Producto no encontrado</p>;

  return (
    <>
          <Breadcrumbs />
    <div className="display-product-container">
      <img src={process.env.PUBLIC_URL + producto.imagen} alt={producto.nombre} className="product-image" />
      <div className="product-details">
        <h1 className="product-title">{producto.nombre}</h1>
        <p className="product-price">${producto.precio.toFixed(2)}</p>
        <p className="product-description">
          {producto.descripcion}
        </p>
      </div>
    </div>
  
     <ProductosFila categoriasDeseadas={producto.categoria} titulo="Productos Similares" />
  </>
    
  );
}
