import React, { useRef } from 'react';
import productos from '../../datos/productos';
import categorias from '../../datos/categorias';
import ItemProducto from "../itemDisplay/item";
import './productosFila.css';

export default function ProductosFilaSinLink({ categoriasDeseadas, titulo }) {
  const filaRef = useRef();

  const scrollIzquierda = () => {
    filaRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollDerecha = () => {
    filaRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  const obtenerCategoriasExpandida = (categoriasInput) => {
    let categoriasExpandida = [];

    categoriasInput.forEach(catNombre => {
      const catPrincipal = categorias.find(c => c.ruta === catNombre || c.nombre.toLowerCase() === catNombre.toLowerCase());

      if (catPrincipal) {
        if (catPrincipal.subcategorias && catPrincipal.subcategorias.length > 0) {
          categoriasExpandida.push(...catPrincipal.subcategorias.map(sc => sc.ruta));
        } else {
          categoriasExpandida.push(catPrincipal.ruta);
        }
      } else {
        categoriasExpandida.push(catNombre);
      }
    });

    return categoriasExpandida;
  };

  const categoriasInputArray = Array.isArray(categoriasDeseadas)
    ? categoriasDeseadas
    : [categoriasDeseadas];

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
