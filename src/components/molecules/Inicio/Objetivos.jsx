'use client';
import { useState } from 'react';
import CarruselSlide from '@/components/molecules/Inicio/CarruselSlide';
import CarruselControles from '@/components/molecules/Inicio/CarruselControles';

export default function Objetivos() {
  const videos = [
    'https://www.youtube.com/embed/mYzcKfXN9is?si=7DaIvuciQyTyvXwx',
    'https://www.youtube.com/embed/ce-aL-jI-QU?si=8kxwaQgOlyssMAU2',
    'https://www.youtube.com/embed/3uKdN-I7eUk?si=pwFiQ5KKBvrOrRl6',
  ];

  const [index, setIndex] = useState(0);

  const anterior = () => {
    setIndex((prev) => (prev === 0 ? videos.length - 1 : prev - 1));
  };

  const siguiente = () => {
    setIndex((prev) => (prev === videos.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="grid md:grid-cols-2 gap-8 p-8 bg-white text-gray-800 md:px-20 ">
      <div>
        <h3 className="text-xl font-semibold mb-4">Objetivo General</h3>
        <p>Diseñar e implementar mecanismos de gestión, para apoyar las etapas de implementación, seguimiento y evaluación de la Política Regional de Fomento Productivo, Emprendimiento e Innovación de la Región de Los Ríos.</p>
        <h3 className="text-xl font-semibold mb-4 pt-5">Objetivos Específicos</h3>
        <ul className="list-disc pl-5 space-y-2 mb-5">
          <li>Elaborar e implementar un modelo y sistema de gestión de la política.</li>
          <li>Elaborar un sistema para el seguimiento, monitoreo y análisis para la evaluación periódica de la implementación de la Política de Fomento.
          </li>
          <li>Generar e implementar una estrategia comunicacional para la Política de Fomento.</li>
        </ul>
        <p className="">El <strong>Gobierno Regional de Los Ríos</strong> junto a su <strong>Consejo Regional</strong> mandatan el proyecto <strong>Observa Los Ríos</strong> a través de la <strong>Corporación Regional de Desarrollo Productivo de la Región de los Ríos</strong>, cuyo estudio es realizado por el <u>Centro de Estudios Regionales de la Universidad Austral de Chile</u>.(CÓDIGO BIP 40035171)</p>
      </div>
      <div className="w-full max-w-3xl mx-auto text-center">
        <CarruselSlide src={videos[index]} />
        <CarruselControles onPrev={anterior} onNext={siguiente} />
      </div>
    </div>
  );
}
