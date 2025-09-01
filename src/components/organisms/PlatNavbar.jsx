import { useEffect } from 'react';
import logoNavbarBlanco from '../../assets/img/solo_observa_blanco.png';
import logoNavbarNegro from '../../assets/img/solo_observa_negro.png';
import { initFlowbite } from 'flowbite';
import { Link } from 'react-router-dom';

const PlatNavbar = () => {
    useEffect(() => {
        initFlowbite();
    }, []);

    return(
        <nav className="bg-white border-gray-200 dark:bg-plataformaBase">
            <div className="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto p-4">
                <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src={logoNavbarBlanco} className="h-8" alt="Observa Logo" />
                </Link>
                <div className="flex items-center md:order-2 space-x-1 md:space-x-2 rtl:space-x-reverse">
                    <button data-collapse-toggle="mega-menu-icons" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mega-menu-icons" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                        </svg>
                    </button>
                </div>
                <div id="mega-menu-icons" className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
                    <ul className="flex flex-col mt-4 font-medium md:flex-row md:mt-0 md:space-x-8 rtl:space-x-reverse">
                        <li>
                            <Link 
                                to="/" 
                                className="block py-2 px-3 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                                title="Página de Inicio del proyecto"
                            >
                                Inicio
                            </Link>
                        </li>
                        <li>
                            <Link to="/plataforma" className="block py-2 px-3 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">
                                Presentación
                            </Link>
                        </li>
                        <li>
                            <Link to="informacion" className="block py-2 px-3 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">
                                Marco de trabajo
                            </Link>
                        </li>
                        <li>
                            <button id="mega-menu-icons-dropdown-button" data-dropdown-toggle="mega-menu-icons-dropdown" className="flex items-center justify-between w-full py-2 px-3 font-medium text-gray-900 border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">
                                Indicadores 
                                <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                                </svg>
                            </button>
                            <div id="mega-menu-icons-dropdown" className="absolute z-10 grid hidden w-auto grid-cols-1 text-sm bg-white border border-gray-100 rounded-lg shadow-md dark:border-gray-700 md:grid-cols-1 dark:bg-gray-700">
                                <div className="p-4 pb-0 text-gray-900 md:pb-4 dark:text-white">
                                    <ul className="space-y-4" aria-labelledby="mega-menu-icons-dropdown-button">
                                        <li>
                                            <Link to="indicadoreslineamiento" className="flex items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 group">
                                                <span className="sr-only">Indicadores por Meta</span>
                                                Indicadores por Lineamiento
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="indicadoresentorno" className="flex items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 group">
                                                <span className="sr-only">Indicadores de Entorno</span>
                                                Indicadores de Entorno
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="indicadoresiniciativa" className="flex items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 group">
                                                <span className="sr-only">Indicadores por Iniciativa</span>
                                                Indicadores Sectoriales
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="indicadoresgeorreferenciados" className="flex items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 group">
                                                <span className="sr-only">Indicadores Georreferenciados</span>
                                                Indicadores Georreferenciados
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        {/* <li>
                            <Link to="fichas" className="disabledLink block py-2 px-3 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">
                                Fichas
                            </Link>
                        </li> */}
                        <li>
                            <Link to="mapas" className="block py-2 px-3 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">
                                Visor
                            </Link>
                        </li>
                        {/* <li>
                            <a href="login" className="disabledLink block py-2 px-3 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">
                                Login
                            </a>
                        </li> */}
                    </ul>
                </div>
            </div>
        </nav>

    )
}

export default PlatNavbar;