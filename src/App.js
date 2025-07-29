import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './header/header';
import Carrusel from './bannerDisplay/banner';
import ProductosFila from './itemDisplay/productosFila';
import DisplayProduct from './paginas/displayProduct';
import DisplayCategoria from './paginas/displayCategoria';
import Footer from './footer/footer';

function App() {
  return (
    <BrowserRouter basename="/Salon-Mirelba">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={
            <>
              <Carrusel />
              <ProductosFila categoriasDeseadas={['bebidas', 'ofertas', 'frescos', 'almacen']} titulo="Bebidas, Ofertas, Frescos y Almacen" />
              <ProductosFila categoriasDeseadas={['bebes']} titulo="Bebes" />
            </>
          } />
          <Route path="/producto/:id" element={<DisplayProduct />} />
          <Route path="/categoria/:nombre" element={<DisplayCategoria />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
