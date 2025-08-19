'use client';

import { useState, useEffect } from 'react';
import Imagen1 from '@/assets/img/Gobernanza1.jpg';
import Imagen2 from '@/assets/img/Gobernanza2.jpg';
import Imagen3 from '@/assets/img/Gobernanza3.jpg';
import Imagen4 from '@/assets/img/Gobernanza4.jpg';
import Imagen5 from '@/assets/img/Gobernanza5.jpg';
import Imagen6 from '@/assets/img/Gobernanza6.jpg';
import Imagen7 from '@/assets/img/Gobernanza7.jpg';
import Imagen8 from '@/assets/img/Gobernanza8.jpg';

const images = [Imagen1, Imagen2, Imagen8, Imagen3, Imagen4, Imagen5, Imagen6, Imagen7];

export default function GaleriaGobernanza() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const getTransform = (index) => {
    if (index === currentIndex) return 'z-30 scale-100 rotate-0';
    if (index === (currentIndex - 1 + images.length) % images.length) return 'z-20 scale-90 -rotate-12 -translate-x-32 opacity-60 blur-sm';
    if (index === (currentIndex + 1) % images.length) return 'z-20 scale-90 rotate-12 translate-x-32 opacity-60 blur-sm';
    return 'opacity-0 pointer-events-none';
  };

  const handleClick = (index) => setCurrentIndex(index);

  // ⏱️ Cambio automático de imagen cada 4 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Cambiar cada 4 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex items-center justify-center h-[400px] w-full overflow-hidden mb-8">
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`Slide ${index}`}
          onClick={() => handleClick(index)}
          className={`
            absolute cursor-pointer transition-all duration-700 ease-in-out rounded-xl object-cover w-2/5 shadow-xl
            ${getTransform(index)}
          `}
          style={{ height: '100%' }}
        />
      ))}
    </div>
  );
}
