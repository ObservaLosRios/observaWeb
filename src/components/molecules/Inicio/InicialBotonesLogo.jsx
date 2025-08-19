import Boton from '@/components/atoms/Inicio/Boton';
import bgImagen from '@/assets/img/Imagen3.jpg'; // Reemplaza con tu imagen
import logoImagen from '@/assets/img/logoObserva.png';   // Reemplaza con tu logo

export default function InicialBotonesLogo() {
  return (
    <div className="relative w-full h-[500px]">
      <img
        src={bgImagen}
        alt="Fondo"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center space-y-6">
        <img src={logoImagen} alt="Logo" className="w-100 h-100 rounded-full shadow-lg" />
        <div className="flex space-x-4">
          <Boton text="Política de Fomento" to="/proyecto/politica" />
          <Boton text="Plataforma" to="/plataforma" />
        </div>
      </div>
    </div>
  );
}
