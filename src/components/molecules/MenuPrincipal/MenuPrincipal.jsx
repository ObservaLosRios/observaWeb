import EnlaceNav from "@/components/atoms/EnlaceNav/EnlaceNav";
import { useState, useEffect, useRef } from "react";

const enlaces = [
  { to: "/", etiqueta: "Inicio" },
  { etiqueta: "Proyecto",
    submenu: [
      { to: "/proyecto/general", etiqueta: "General" },
      { to: "/proyecto/politica", etiqueta: "Política Fometo Productivo, Emprendimiento, Innovación" },
      { to: "/proyecto/gobernanza", etiqueta: "Gobernanza" },
    ]
  },
  { etiqueta: "Instituciones involucradas",
    submenu: [
      { to: "/instituciones/responsables", etiqueta: "Entidades Responsables" },
      { to: "/instituciones/ejecutores", etiqueta: "Ejecutores" },
    ]
  },

  { to: "/noticias", etiqueta: "Noticias" },
  //{ to: "/plataforma", etiqueta: "Plataforma" },
];

export default function MenuPrincipal() {
  const [submenuAbierto, setSubmenuAbierto] = useState(null);
  const menuRef = useRef(null);

  const toggleSubmenu = (etiqueta) => {
    setSubmenuAbierto(submenuAbierto === etiqueta ? null : etiqueta);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setSubmenuAbierto(null);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <ul
      ref={menuRef}
      className="flex flex-col md:flex-row font-medium md:space-x-8 rtl:space-x-reverse text-sm w-full"
    >
      {enlaces.map(({ to, etiqueta, submenu }) => (
        <li key={to || etiqueta} className="relative">
          {submenu ? (
            <>
              <button
                type="button"
                onClick={() => toggleSubmenu(etiqueta)}
                className="flex items-center text-gray-900 dark:text-white hover:underline transition"
              >
                {etiqueta}
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {submenuAbierto === etiqueta && (
                <ul className="absolute md:left-0 mt-2 w-48 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded shadow-lg z-50 md:block">
                  {submenu.map(({ to, etiqueta }) => (
                    <li key={to} className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">
                      <EnlaceNav to={to}>{etiqueta}</EnlaceNav>
                    </li>
                  ))}
                </ul>
              )}
            </>
          ) : (
            <EnlaceNav to={to}>{etiqueta}</EnlaceNav>
          )}
        </li>
      ))}
    </ul>
  );
}
