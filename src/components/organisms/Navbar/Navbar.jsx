// src/componentes/organismos/BarraNavegacion/BarraNavegacion.jsx
import { Link } from "react-router-dom";
import AccionesUsuario from "@/components/molecules/AccionesUsuario/AccionesUsuario.jsx";
import MenuPrincipal   from "@/components/molecules/MenuPrincipal/MenuPrincipal.jsx";
import logoObserva from '@/assets/img/solo_observa_color.png';


export default function Navbar() {
  return (
    <>
      {/* Barra superior */}
      <nav className="bg-white border-gray-200">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <Link
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src={logoObserva}
              className="w-auto h-8"
              alt="Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-slate-900">
              Observa Los Ríos
            </span>
          </Link>

          <AccionesUsuario />
        </div>
      </nav>

      {/* Menú secundario */}
      <nav className="bg-gray-50 dark:bg-gray-700">
        <div className="max-w-screen-xl px-4 py-3 mx-auto flex items-center">
          <MenuPrincipal />
        </div>
      </nav>
    </>
  );
}
