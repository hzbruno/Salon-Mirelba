import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import categorias from '../datos/categorias';
import './header.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [subMenuOpen, setSubMenuOpen] = useState(null);

  const handleLinkClick = () => {
    setMenuOpen(false);
    setSubMenuOpen(null);
  };

  const toggleSubMenu = (categoria) => {
    setSubMenuOpen(subMenuOpen === categoria ? null : categoria);
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
              {categorias.map((cat, index) => (
                cat.subcategorias ? (
                  <div
                    key={index}
                    className={`menu-subgroup hoverable ${subMenuOpen === cat.nombre ? 'active' : ''}`}
                    onMouseEnter={() => toggleSubMenu(cat.nombre)}
                    onMouseLeave={() => toggleSubMenu(null)}
                  >
                    <Link
                      to={`/categoria/${cat.ruta}`}
                      onClick={handleLinkClick}
                      className="categoria-link"
                    >
                      {cat.nombre} <span className="arrow-menu">›</span>
                    </Link>

                    {subMenuOpen === cat.nombre && (
                      <div className="submenu">
                        {cat.subcategorias.map((sub, i) => (
                          <Link
                            key={i}
                            to={`/categoria/${sub.ruta}`}
                            onClick={handleLinkClick}
                            className="submenu-link"
                          >
                            {sub.nombre}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={index}
                    to={`/categoria/${cat.ruta}`}
                    onClick={handleLinkClick}
                    className={cat.especial ? 'oferta' : ''}
                  >
                    {cat.nombre}
                  </Link>
                )
              ))}
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
