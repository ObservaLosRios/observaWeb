import InicialBotonesLogo from '@/components/molecules/Inicio/InicialBotonesLogo';
import DescripcionConVideos from '@/components/molecules/Inicio/DescripcionConVideos';
import ImagenBanner from '@/components/atoms/Inicio/ImagenBanner';
import Objetivos from '@/components/molecules/Inicio/Objetivos';
import NarradorAvanzado from "@/components/atoms/NarradorAvanzado";

export default function HomeContent() {
  const texto = `Observa Los Ríos, es la plataforma que apoya el proceso de seguimiento de la Política Regional de Fomento Productivo, 
  Emprendimiento e Innovación de la Región de Los Ríos, estableciéndose como un instrumento de carácter operativo que 
  permite al Gobierno Regional, y a su equipo, tomar decisiones estratégicas a nivel subnacional. 
  Así, el proyecto se enfoca en el seguimiento a la implementación de la Política y evalúa la ejecución de la misma, 
  proponiendo mejoras al sistema y articulando actores a nivel regional.
  
  El objetivo general de Observa Los Ríos es Diseñar e implementar mecanismos de gestión, para apoyar las etapas 
  de implementación, seguimiento y evaluación de la Política Regional de Fomento Productivo, Emprendimiento 
  e Innovación de la Región de Los Ríos.
  
  Mientras que los objetivos específicos son:
  Elaborar e implementar un modelo y sistema de gestión de la política.
  Elaborar un sistema para el seguimiento, monitoreo y análisis para la evaluación periódica de la implementación de la Política de Fomento.
  Generar e implementar una estrategia comunicacional para la Política de Fomento.
  
  El Gobierno Regional de Los Ríos junto a su Consejo Regional mandatan el proyecto Observa Los Ríos a través 
  de la Corporación Regional de Desarrollo Productivo de la Región de los Ríos, cuyo estudio es realizado por el 
  Centro de Estudios Regionales de la Universidad Austral de Chile.(CÓDIGO BIP 40035171).`;

  return (
    <main className="w-full">
      <InicialBotonesLogo />
      <DescripcionConVideos />
      <ImagenBanner />
      <Objetivos />
      <NarradorAvanzado texto={texto} autoLeer={false} />
    </main>
  );
}
