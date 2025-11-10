import { useState, useEffect } from 'react';

const CarruselFuentes = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    const fuentes = [
        { title: "Biblioteca del Congreso Nacional de Chile", url: "https://datos.bcn.cl/es" },
        { title: "Centro de Información de Recursos Naturales (CIREN)", url: "https://www.ciren.cl/" },
        { title: "IDE MINAGRI", url: "https://ide.minagri.gob.cl/geoweb/" },
        { title: "Sistema de Monitoreo de Ecosistemas Forestales Nativos de Chile (Simef)", url: "https://simef.minagri.gob.cl/" },
        { title: "Comisión Interministerial de Ciudad, Vivienda y Territorio", url: "https://www.comicivyt.cl/informacion-territorial/" },
        { title: "Data Emprendimiento - CORFO", url: "https://www.corfo.cl/sites/dataemprendimiento/home" },
        { title: "Data Innovación - CORFO", url: "https://datainnovacion.cl/" },
        { title: "Data Territorios - CORFO", url: "https://dataterritorios.corfo.cl/" },
        { title: "Chile Compra", url: "https://datos-abiertos.chilecompra.cl/" },
        { title: "Gobierno de Chile", url: "https://datos.gob.cl/" },
        { title: "Departamento de Estadísticas e Información de Salud", url: "https://deis.minsal.cl/" },
        { title: "Instituto Nacional de Estadísticas (INE)", url: "https://www.ine.gob.cl/" },
        { title: "Comisión Chilena del Cobre", url: "https://datos.gob.cl/eu/organization/comision_chilena_del_cobre" },
        { title: "Servicio Aerofotogramétrico", url: "https://www.saf.cl/" },
        { title: "Chile Atiende", url: "https://www.ips.gob.cl/inicio" },
        { title: "Comisión de Integridad Publica y Transparencia", url: "https://www.integridadytransparencia.gob.cl/datos-para-la-integridad/" },
        { title: "Centro de Estudios Mineduc", url: "https://datosabiertos.mineduc.cl/" },
        { title: "Sit rural - CIREN", url: "https://www.sitrural.cl/" },
        { title: "Observatorio Institucional - CIREN", url: "https://observatorio.ciren.cl/" },
        { title: "BIDAT", url: "https://bidat.gob.cl/" },
        { title: "SEG Estadísticas de Genero", url: "https://www.estadisticasdegenero.cl/" },
        { title: "Sistema Nacional de Información Ambiental (SINIA)", url: "https://sinia.mma.gob.cl/" },
        { title: "Sistema Nacional de Información de Fiscalización Ambiental (SNIFA)", url: "https://snifa.sma.gob.cl/DatosAbiertos" },
        { title: "Infraestructura de Datos Espaciales del Ministerio de Vivienda y Urbanismo", url: "https://ide.minvu.cl/" },
        { title: "Datos Abiertos Legislativos", url: "https://opendata.congreso.cl/" },
        { title: "Estadísticas COMEX - Aduanas Chile", url: "https://www.aduana.cl/aduana/site/edic/base/port/estadisticas.html" },
        { title: "Consejo Nacional de Desarrollo Territorial", url: "https://cndt.cl/indicadores/siedu/" },
        { title: "Datos Abiertos De ISAPRES", url: "https://www.superdesalud.gob.cl/tax-biblioteca-digital/datos-abiertos-de-isapres-6988/" },
        { title: "La Infraestructura de Datos Geoespaciales de Chile (IDE Chile)", url: "https://www.ide.cl/" },
        { title: "Sistema Integrado de Información CONADI - SIIC", url: "https://siic.conadi.cl/" },
        { title: "Base de Datos Estadísticos (BDE) del Banco Central de Chile", url: "https://si3.bcentral.cl/siete" },
        { title: "Data Turismo - SERNATUR", url: "https://www.sernatur.cl/dataturismo/" }
    ];

    const itemsPerPage = 4;
    const totalPages = Math.ceil(fuentes.length / itemsPerPage);

    useEffect(() => {
        if (!isPaused) {
            const interval = setInterval(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % totalPages);
            }, 5000);
            return () => clearInterval(interval);
        }
    }, [isPaused, totalPages]);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % totalPages);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + totalPages) % totalPages);
    };

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    const getCurrentItems = () => {
        const start = currentIndex * itemsPerPage;
        const end = start + itemsPerPage;
        return fuentes.slice(start, end);
    };

    return (
        <div 
            className="relative w-full"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            {/* Carrusel */}
            <div className="overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 transition-all duration-500">
                    {getCurrentItems().map((fuente, index) => (
                        <div key={`${currentIndex}-${index}`} className="h-40">
                            <a
                                href={fuente.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block h-full p-4 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 transition-colors duration-200 flex items-center justify-center"
                            >
                                <h3 className="text-sm font-bold tracking-tight text-gray-900 dark:text-white text-center line-clamp-3">
                                    {fuente.title}
                                </h3>
                            </a>
                        </div>
                    ))}
                </div>
            </div>

            {/* Botones de navegación */}
            <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-white dark:bg-gray-800 p-2 rounded-full shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors z-10"
                aria-label="Anterior"
            >
                <svg className="w-6 h-6 text-gray-900 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-white dark:bg-gray-800 p-2 rounded-full shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors z-10"
                aria-label="Siguiente"
            >
                <svg className="w-6 h-6 text-gray-900 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </button>

            {/* Indicadores */}
            <div className="flex justify-center mt-6 space-x-2">
                {Array.from({ length: totalPages }).map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-3 h-3 rounded-full transition-colors ${
                            currentIndex === index
                                ? 'bg-blue-600 dark:bg-blue-500'
                                : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                        }`}
                        aria-label={`Ir a página ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default CarruselFuentes;
