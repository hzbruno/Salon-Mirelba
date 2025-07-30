import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header/header';
import Carrusel from './components/carrusel/banner';
import ProductosFila from './components/filaProductos/productosFila';
import DisplayProduct from './paginas/displayProduct';
import DisplayCategoria from './paginas/displayCategoria';
import Footer from './components/footer/footer';
import WhatsAppButton from './components/whatsapp/whatsapp';
import FilaCategorias from './components/filaCategorias/filaCategorias';


function App() {
  return (
    <BrowserRouter basename="/Salon-Mirelba">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={
            <>
              <Carrusel />
              <FilaCategorias/>
              <ProductosFila categoriasDeseadas={['ofertas']} titulo="Ofertas" />
              <ProductosFila categoriasDeseadas={['electrodomesticos']} titulo="Electrodomesticos" />
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
