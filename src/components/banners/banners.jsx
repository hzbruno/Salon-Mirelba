import React, { useState, useEffect } from 'react';
import "./banners.css"

export default function banners() {
  return (
    <div className="banners-Group">
        <div className="banner">
            <img key="banner-1" src= {process.env.PUBLIC_URL + "/carrusel/banner1.png"} alt={`Banner`} className="banner-ind" />
        </div>
        <div className="banner">
            <img key="banner-2" src= {process.env.PUBLIC_URL + "/carrusel/banner2.png"} alt={`Banner`} className="banner-ind" />
        </div>


    </div>
  )
}
