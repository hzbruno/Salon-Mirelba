import React, { useState, useEffect } from 'react';
import './banner.css';

const imagenes = [
  '/carrusel/banner1.png',
  '/carrusel/banner2.png',
  '/carrusel/banner3.png',
];

export default function BannerCarrusel() {
  const [indice, setIndice] = useState(0);
  const total = imagenes.length;

  const siguiente = () => {
    setIndice((prevIndice) => (prevIndice + 1) % total);
  };

  const anterior = () => {
    setIndice((prevIndice) => (prevIndice - 1 + total) % total);
  };

  // ⏱ Auto-cambio cada 5 segundos
  useEffect(() => {
    const intervalo = setInterval(() => {
      siguiente();
    }, 5000); // 5000ms = 5 segundos

    // 🧹 Limpiar el intervalo al desmontar
    return () => clearInterval(intervalo);
  }, []); // solo una vez al montar

  return (
    <div className="banner-carrusel">
      <div
        className="carrusel-slider"
        style={{
          transform: `translateX(-${indice * 100}%)`,
        }}
      >
        {imagenes.map((src, i) => (
          <img key={i} src={src} alt={`Banner ${i + 1}`} className="banner-imagen" />
        ))}
      </div>

      <button className="flecha flecha-izquierda" onClick={anterior} aria-label="Anterior">‹</button>
      <button className="flecha flecha-derecha" onClick={siguiente} aria-label="Siguiente">›</button>
    </div>
  );
}
