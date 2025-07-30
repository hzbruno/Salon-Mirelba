import React from 'react';
import './footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-section about">
          <h3>Sobre Nosotros</h3>
          <p>
            Somos una tienda comprometida con ofrecer productos de calidad para vos y tu familia.
            Atención personalizada y envíos a todo el país.
          </p>
        </div>

        <div className="footer-section links">
          <h3>Enlaces rápidos</h3>
          <ul>
            <li><a href="/">Inicio</a></li>
            <li><a href="#almacen">Almacén</a></li>
            <li><a href="#bebidas">Bebidas</a></li>
            <li><a href="#ofertas">Ofertas</a></li>
            <li><a href="#contacto">Contacto</a></li>
          </ul>
        </div>

        <div className="footer-section contact">
          <h3>Contacto</h3>
          <p>Email: contacto@tu-tienda.com</p>
          <p>Teléfono: +54 123 456 789</p>
          <p>Dirección: Calle Falsa 123, Ciudad</p>
        </div>

        <div className="footer-section social">
          <h3>Redes Sociales</h3>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <i className="fab fa-facebook-f"></i> Facebook
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <i className="fab fa-instagram"></i> Instagram
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <i className="fab fa-twitter"></i> Twitter
            </a>
          </div>
        </div>

      </div>
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Tu Tienda - Todos los derechos reservados.
      </div>
    </footer>
  );
}
