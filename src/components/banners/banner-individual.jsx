import React, { useState, useEffect } from 'react';
import "./bannerIndividual.css"

export default function BannerIndividual() {
  return (
    <div className="individual-Banner">
        <div className="grupoBanner">
            <img key="banner-1" src= {process.env.PUBLIC_URL + "/carrusel/banner1.png"} alt={`Banner`} className="GrandeBanner" />
        </div>
    </div>
  )
}
