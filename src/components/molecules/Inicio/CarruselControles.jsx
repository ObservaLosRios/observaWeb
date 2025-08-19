import BotonCarrusel from '@/components/atoms/Inicio/BotonCarrusel';

export default function CarruselControles({ onPrev, onNext }) {
  return (
    <div className="flex justify-center mt-4 gap-4 cursor-pointer">
      <BotonCarrusel onClick={onPrev}>Anterior</BotonCarrusel>
      <BotonCarrusel onClick={onNext}>Siguiente</BotonCarrusel>
    </div>
  );
}
