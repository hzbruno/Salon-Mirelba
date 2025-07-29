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
            <img id="logo" src={process.env.PUBLIC_URL + "/img/salon-mirelba-logo.png"} alt="Logo" />
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
              <Link to="/categoria/almacen" onClick={handleLinkClick}>Almacén</Link>
              <Link to="/categoria/frescos" onClick={handleLinkClick}>Frescos</Link>
              <Link to="/categoria/bebidas" onClick={handleLinkClick}>Bebidas</Link>
              <Link to="/categoria/congelados" onClick={handleLinkClick}>Congelados</Link>
              <Link to="/categoria/limpieza" onClick={handleLinkClick}>Limpieza</Link>
              <Link to="/categoria/perfumeria" onClick={handleLinkClick}>Perfumería</Link>
              <Link to="/categoria/tecnologia" onClick={handleLinkClick}>Electro y Tecnología</Link>
              <Link to="/categoria/jugueteria" onClick={handleLinkClick}>Juguetería</Link>
              <Link to="/categoria/deportes" onClick={handleLinkClick}>Deportes y Fitness</Link>
              <Link to="/categoria/hogar" onClick={handleLinkClick}>Hogar y Tiempo Libre</Link>
              <Link to="/categoria/ferreteria" onClick={handleLinkClick}>Ferretería</Link>
              <Link to="/categoria/bebes" onClick={handleLinkClick}>Bebés</Link>
              <Link to="/categoria/ofertas" className="oferta" onClick={handleLinkClick}>Ofertas</Link>
            </div>
            <div className="menu-promo">
              <img src={process.env.PUBLIC_URL + "/img/promo.png"} alt="Promo" />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
