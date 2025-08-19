import Imagen1 from '@/assets/img/Observa1.jpg';
import Imagen2 from '@/assets/img/Observa2.jpg';
import Imagen3 from '@/assets/img/Observa3.jpg';

const images = [
  Imagen1,
  Imagen2,
  Imagen3,
];

export default function GaleriaImagenes() {
  return (
    <div className="flex flex-col md:flex-row justify-center gap-6 mt-8">
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`Workspace ${index + 1}`}
          className="rounded-lg w-full md:w-1/3 object-cover"
        />
      ))}
    </div>
  );
}
