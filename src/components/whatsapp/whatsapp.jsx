import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import './whatsapp.css'; // Estilos abajo

function WhatsAppButton() {
  const phoneNumber = '59891961613'; // Reemplazá con tu número de WhatsApp en formato internacional

  return (
    <a
      href={`https://wa.me/${phoneNumber}`}
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaWhatsapp size={32} />
    </a>
  );
}

export default WhatsAppButton;
