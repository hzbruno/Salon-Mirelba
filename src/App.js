import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/header/header';
import Carrusel from './components/carrusel/banner';
import ProductosFila from './components/filaProductos/productosFila';
import DisplayProduct from './paginas/displayProduct';
import DisplayCategoria from './paginas/displayCategoria';
import Footer from './components/footer/footer';
import WhatsAppButton from './components/whatsapp/whatsapp';
import FilaCategorias from './components/filaCategorias/filaCategorias';
import BannersDisplay from './components/banners/banners';
import BannerGrande from './components/banners/banner-individual';

import ScrollToTop from './ScrollToTop';

function App() {
  const [mostrarCategorias, setMostrarCategorias] = useState(true);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px) and (orientation: portrait)');

    const manejarCambio = (e) => {
      setMostrarCategorias(!e.matches); // si coincide, es móvil vertical → ocultar
    };

    manejarCambio(mediaQuery); // ejecutar al cargar
    mediaQuery.addEventListener('change', manejarCambio);

    return () => {
      mediaQuery.removeEventListener('change', manejarCambio);
    };
  }, []);

  return (
    <BrowserRouter basename="/Salon-Mirelba">
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={
            <>
              <Carrusel />
              {mostrarCategorias && <FilaCategorias />}
              <ProductosFila categoriasDeseadas={['ofertas']} titulo="Ofertas" />
              <BannersDisplay/>
              <ProductosFila categoriasDeseadas={['electrodomesticos']} titulo="Electrodomésticos" />
              <BannerGrande/>
              <ProductosFila categoriasDeseadas={['celulares','peluches']} titulo="Celulares y Peluches" />
            </>
          } />
          <Route path="/producto/:id" element={<DisplayProduct />} />
          <Route path="/categoria/:nombre" element={<DisplayCategoria />} />
        </Routes>
        <WhatsAppButton />
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
