import bodyImage from '@/assets/img/Imagen1.JPG';

export default function ImagenBanner() {
  return (
    <div className="relative w-full h-[300px]">
      <img
        src={bodyImage}
        alt="Imagen cuerpo"
        className="w-full h-full object-cover"
      />
    </div>
  );
}
