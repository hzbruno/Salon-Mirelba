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

        <div className="footer-section contact">
          <h3>Contacto</h3>
          <p>Email: contacto@tu-tienda.com</p>
          <p>Teléfono: +54 123 456 789</p>
          <p>Dirección: Avenida España 2171, Salto, Uruguay</p>
        </div>



        <div className="footer-section social">
          <h3>Redes Sociales</h3>
          <div className="social-icons">
            <a href="https://www.facebook.com/salon.mirelba/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <i className="fab fa-facebook-f"></i> Facebook
            </a>
            <a href="https://www.instagram.com/salonmirelba/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <i className="fab fa-instagram"></i> Instagram
            </a>
            <a href="https://www.tiktok.com/@mirelbasas" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
              <i className="fab fa-tiktok"></i> TikTok
            </a>
          </div>
        </div>


        <div className="footer-section contact">
          <h3>Ubicación</h3>
          {/* Mapa de Google Maps embebido */}
          <div className="map-container">
            <iframe
              title="Ubicación"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.119396815263!2d-56.0668125!3d-34.6516875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a03109d1101293%3A0x8b03b3f555e4ba8b!2sSal%C3%B3n%20Mirelba!5e0!3m2!1ses-419!2suy!4v1753906293346!5m2!1ses-419!2suy"
              width="100%"
              height="200"
              style={{ border: 0, marginTop: '10px', borderRadius: '8px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Salón Mirelba - Todos los derechos reservados.
      </div>
    </footer>
  );
}
