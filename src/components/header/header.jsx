import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import categorias from '../../datos/categorias';
import './header.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [subMenuOpen, setSubMenuOpen] = useState(null);
  const location = useLocation();

  useEffect(() => {
    // Cierra el menú cada vez que la ruta cambia
    setMenuOpen(false);
    setSubMenuOpen(null);
  }, [location]);

  const isTouchDevice = () => {
    return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  };

  const toggleSubMenu = (categoria) => {
    setSubMenuOpen(subMenuOpen === categoria ? null : categoria);
  };

  const handleCategoryClick = (e, cat) => {
    if (isTouchDevice()) {
      if (subMenuOpen !== cat.nombre) {
        e.preventDefault(); // Previene la navegación en el primer toque
        setSubMenuOpen(cat.nombre); // Muestra el submenu
      }
      // Si ya estaba abierto, dejamos que navegue naturalmente
    }
  };

  return (
    <header className="header">
      <div className="left-section">
        <Link to="/" onClick={() => { setMenuOpen(false); setSubMenuOpen(null); }}>
          <img id="logo" src={process.env.PUBLIC_URL + "/img/salon-mirelba-logo.png"} alt="Logo" />
        </Link>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)}>
          ☰ CATÁLOGO
        </button>
      </div>
      <div className="right-section">
        
      </div>

      {menuOpen && (
        <div className="mega-menu">
          <div className="menu-inside">
            <div className="menu-categories">
              {categorias.map((cat, index) => (
                cat.subcategorias ? (
                  <div
                    key={index}
                    className={`menu-subgroup hoverable ${subMenuOpen === cat.nombre ? 'active' : ''}`}
                    onMouseEnter={() => !isTouchDevice() && toggleSubMenu(cat.nombre)}
                    onMouseLeave={() => !isTouchDevice() && toggleSubMenu(null)}
                  >
                    <Link
                      to={`/categoria/${cat.ruta}`}
                      onClick={(e) => handleCategoryClick(e, cat)}
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
                            onClick={() => {
                              setMenuOpen(false);
                              setSubMenuOpen(null);
                            }}
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
                    onClick={() => {
                      setMenuOpen(false);
                      setSubMenuOpen(null);
                    }}
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
    </header>
  );
}

export default Header;
