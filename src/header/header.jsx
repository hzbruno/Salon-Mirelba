import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './header.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <header className="header">
        <div className="left-section">
          <Link to="/" onClick={handleLinkClick}>
            <img id="logo" src="/img/salon-mirelba-logo.png" alt="Logo" />
          </Link>
          <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)}>
            ☰ MENÚ
          </button>
        </div>
        <div className="right-section">
          <a href="#about" className="about-link">Sobre Nosotros</a>
        </div>
      </header>

      {menuOpen && (
        <div className="mega-menu">
          <div className="menu-inside">
            <div className="menu-categories">
              <a href="#almacen" onClick={handleLinkClick}>Almacén</a>
              <a href="#frescos" onClick={handleLinkClick}>Frescos</a>
              <a href="#bebidas" onClick={handleLinkClick}>Bebidas</a>
              <a href="#congelados" onClick={handleLinkClick}>Congelados</a>
              <a href="#limpieza" onClick={handleLinkClick}>Limpieza</a>
              <a href="#perfumeria" onClick={handleLinkClick}>Perfumería</a>
              <a href="#tecnologia" onClick={handleLinkClick}>Electro y Tecnología</a>
              <a href="#jugueteria" onClick={handleLinkClick}>Juguetería</a>
              <a href="#deportes" onClick={handleLinkClick}>Deportes y Fitness</a>
              <a href="#hogar" onClick={handleLinkClick}>Hogar y Tiempo Libre</a>
              <a href="#ferreteria" onClick={handleLinkClick}>Ferretería</a>
              <a href="#bebes" onClick={handleLinkClick}>Bebés</a>
              <a href="#ofertas" className="oferta" onClick={handleLinkClick}>Ofertas</a>
            </div>
            <div className="menu-promo">
              <img src="/img/promo.png" alt="Promo" />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
