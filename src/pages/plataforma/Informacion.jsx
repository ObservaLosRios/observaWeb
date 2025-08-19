import React from 'react'
import marcotrabajo1 from '../../assets/img/plataforma/marcodetrabajo/marcotrabajo1.jpg';
import marcotrabajo2 from '../../assets/img/plataforma/marcodetrabajo/marcotrabajo2.jpg';
import marcotrabajo3 from '../../assets/img/plataforma/marcodetrabajo/marcotrabajo3.jpg';
import marcotrabajo4 from '../../assets/img/plataforma/marcodetrabajo/marcotrabajo4.jpg';

export const Informacion = () => {
    const scrollToSection = (sectionId) => {
        const element =  document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };
    
    return(
        <div className="flex">
            <aside className="w-64 bg-gray-50 dark:bg-gray-800 h-screen sticky top-0 p-4">
                <nav className="space-y-2">
                    <h3 className="font-bold text-gray-900 dark:text-white mb-4">Contenido</h3>
                    <ul className="space-y-2">
                        <li>
                            <button 
                                onClick={() => scrollToSection('metodologia')}
                                className="w-full text-left p-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 rounded"
                            >
                                Metodología y estándares
                            </button>
                        </li>
                        <li>
                            <button 
                                onClick={() => scrollToSection('normas-datos')}
                                className="w-full text-left p-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 rounded"
                            >
                                Normas de datos
                            </button>
                        </li>
                        <li>
                            <button 
                                onClick={() => scrollToSection('normas-nacionales')}
                                className="w-full text-left p-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 rounded ml-4"
                            >
                                • Normas nacionales
                            </button>
                        </li>
                        <li>
                            <button 
                                onClick={() => scrollToSection('normas-internacionales')}
                                className="w-full text-left p-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 rounded ml-4"
                            >
                                • Normas internacionales
                            </button>
                        </li>
                        <li>
                            <button 
                                onClick={() => scrollToSection('compromiso-etico')}
                                className="w-full text-left p-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 rounded ml-4"
                            >
                                • Compromiso ético
                            </button>
                        </li>
                        <li>
                            <button 
                                onClick={() => scrollToSection('fuentes-datos')}
                                className="w-full text-left p-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 rounded"
                            >
                                Fuentes de datos
                            </button>
                        </li>
                        <li>
                            <button 
                                onClick={() => scrollToSection('diseno-metodologico')}
                                className="w-full text-left p-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 rounded"
                            >
                                Diseño metodológico
                            </button>
                        </li>
                    </ul>
                </nav>
            </aside>

            <main className="flex-1">
                <section id="metodologia" className="bg-white dark:bg-gray-900">
                    <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-8 lg:px-6">
                        <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Metodología y estándares del proyecto</h2>
                            <p className="mb-4 text-justify">
                                El proyecto Observa Los Ríos, orientado al seguimiento y evaluación de la Política
                                Regional de Fomento Productivo, Emprendimiento e Innovación de la Región de Los Ríos,
                                se desarrolla bajo una sólida base metodológica y un estricto cumplimiento de normativas
                                nacionales e internacionales en materia de gestión de datos, gobernanza digital y estándares
                                de vigilancia tecnológica e inteligencia competitiva. Para lograr una comprensión integral
                                del contexto regional en estas materias, se emplea una combinación de técnicas cualitativas
                                y cuantitativas.
                            </p>
                        </div>
                        <div className="grid grid-cols-2 gap-4 mt-2">
                            <img className="w-full rounded-lg" src={marcotrabajo1} alt="office content 1"/>
                            <img className="mt-4 w-full lg:mt-10 rounded-lg" src={marcotrabajo2} alt="office content 2"/>
                        </div>
                    </div>
                </section>
                <hr className="border-gray-800" />
                <section id="normas-datos" className="bg-white dark:bg-gray-900">
                    <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-8 lg:px-6">
                        <div className="grid grid-cols-2 gap-4 mt-2">
                            <img className="w-full rounded-lg" src={marcotrabajo3} alt="office content 1"/>
                            <img className="mt-4 w-full lg:mt-10 rounded-lg" src={marcotrabajo4} alt="office content 2"/>
                        </div>
                        <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Normas de datos y protección de la información</h2>
                            <p className="mb-4 text-justify">
                                En el marco del proyecto Observa Los Ríos, la gestión de la información se realiza
                                bajo estrictos principios de legalidad, transparencia, confidencialidad y seguridad. Para ello,
                                el proyecto se adhiere a un conjunto de normas legales y técnicas que garantizan el
                                adecuado tratamiento de los datos personales y la integridad de los sistemas digitales
                                implementados.
                            </p>
                        </div>
                    </div>
                    <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-8 lg:px-6">
                        <h4 id="normas-nacionales" className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Normas nacionales</h4>
                        <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-12 md:space-y-0">
                            <div>
                                <h3 className="mb-2 text-xl font-bold dark:text-white">Constitución Política de la República de Chile (Art. 19 N°4)</h3>
                                <p className="text-gray-500 dark:text-gray-400 text-justify">
                                    Reconoce el derecho a la protección de los datos personales como una garantía constitucional,
                                    asegurando el respeto a la vida privada de las personas frente al tratamiento de información por parte del Estado u otras entidades.
                                </p>
                            </div>
                            <div>
                                <h3 className="mb-2 text-xl font-bold dark:text-white">Ley N° 19.628 sobre Protección de la Vida Privada</h3>
                                <p className="text-gray-500 dark:text-gray-400 text-justify">
                                    Regula el tratamiento de datos personales por organismos públicos y privados. En el contexto del proyecto, 
                                    esta ley establece los deberes sobre consentimiento, finalidad y seguridad en el uso de datos recopilados, 
                                    especialmente a través del sistema de seguimiento y la plataforma VTIC.
                                </p>
                            </div>
                            <div>
                                <h3 className="mb-2 text-xl font-bold dark:text-white">Ley N° 21.180 sobre Transformación Digital del Estado</h3>
                                <p className="text-gray-500 dark:text-gray-400 text-justify">
                                    Establece el tránsito obligatorio hacia la gestión digital de trámites administrativos, promoviendo estándares de interoperabilidad, 
                                    trazabilidad, eficiencia y seguridad en el uso de datos. 
                                    El proyecto se anticipa a esta transformación incorporando flujos digitales de información institucional.
                                </p>
                            </div>
                            <div>
                                <h3 className="mb-2 text-xl font-bold dark:text-white">Decreto N° 7 (2023)</h3>
                                <p className="text-gray-500 dark:text-gray-400 text-justify">
                                    Complementa la Ley N° 21.180 estableciendo una norma técnica sobre ciberseguridad y protección de la información 
                                    para los órganos del Estado. Define requisitos mínimos para la implementación segura de plataformas como 
                                    las utilizadas por Observa Los Ríos.
                                </p>
                            </div>
                        </div>
                        <h4 id="normas-internacionales" className="mb-4 mt-8 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Normas internacionales</h4>
                        <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-12 md:space-y-0">
                            <div>
                                <h3 className="mb-2 text-xl font-bold dark:text-white">GDPR – General Data Protection Regulation (UE, 2016)</h3>
                                <p className="text-gray-500 dark:text-gray-400 text-justify">
                                    Este reglamento europeo ha sido incorporado como referencia global para la protección de la
                                    privacidad digital. En Observa Los Ríos, se utiliza como marco ético y operativo
                                    para el tratamiento de datos personales, asegurando consentimiento informado, acceso, rectificación, y derecho al olvido.
                                </p>
                            </div>
                            <div>
                                <h3 className="mb-2 text-xl font-bold dark:text-white">DAMA – Data Management Body of Knowledge (DMBOK2)</h3>
                                <p className="text-gray-500 dark:text-gray-400 text-justify">
                                    Modelo de referencia en gobernanza y gestión de datos. Su aplicación en el proyecto permite 
                                    implementar una estructura coherente para la recolección, almacenamiento, análisis y uso de datos con enfoque estratégico.
                                </p>
                            </div>
                            <div>
                                <h3 className="mb-2 text-xl font-bold dark:text-white">UNE 166006:2018 – Vigilancia e Inteligencia Tecnológica</h3>
                                <p className="text-gray-500 dark:text-gray-400 text-justify">
                                    Norma española que estructura la gestión de información para sistemas de vigilancia tecnológica (VTIC).
                                    Esta norma permite sistematizar la identificación de oportunidades y amenazas del entorno regional, apoyando la toma de decisiones basada en evidencia.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-8 lg:px-6">
                        <h4 id="compromiso-etico" className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Compromiso ético y legal</h4>
                        <p className="mb-4 text-gray-900 dark:text-white text-justify">
                            La integración de estos marcos normativos y estándares en la implementación del sistema de seguimiento y la plataforma Observa Los Ríos asegura:
                        </p>
                        <ul className="list-disc pl-5 space-y-2 text-gray-500 dark:text-gray-400 ">
                            <li>Un tratamiento ético y legal de los datos personales, garantizando la privacidad y seguridad de la información.</li>
                            <li>La transparencia en la gestión de datos, permitiendo a los ciudadanos conocer cómo se utilizan sus datos.</li>
                            <li>La interoperabilidad y eficiencia en el uso de plataformas digitales, facilitando el acceso a la información y servicios públicos.</li>
                            <li>El fortalecimiento de la confianza ciudadana en las instituciones públicas y privadas que gestionan datos.</li>
                            <li>La promoción de una cultura de innovación y mejora continua en la gestión de datos, alineada con las mejores prácticas internacionales.</li>
                        </ul>
                    </div>
                    <hr className="border-gray-800" />
                    <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                        <h4 id="fuentes-datos" className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Fuentes de datos utilizadas en Observa Los Ríos</h4>
                        <p className="mb-4 text-gray-900 dark:text-white text-justify">
                            El sistema de monitoreo del proyecto Observa Los Ríos se apoya en fuentes de datos públicas, oficiales y estratégicas, seleccionadas por su confiabilidad, 
                            cobertura regional y alineación con los objetivos de la Política Regional de Fomento Productivo, Emprendimiento e Innovación. 
                            Estas fuentes permiten construir indicadores pertinentes, comparables y actualizables. A continuación, se presentan las principales fuentes utilizadas
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-4">
                            {[
                                {
                                    url: "https://www.bcentral.cl/inicio",
                                    title: "Banco Central de Chile",
                                    description: "Proporciona estadísticas económicas claves como el Producto Interno Bruto (PIB) regional por sector económico y variaciones del PIB en la Macrozona Sur."
                                },
                                {
                                    url: "https://www.ine.gob.cl/",
                                    title: "Instituto Nacional de Estadísticas (INE)",
                                    description: "Fuente principal para variables sociodemográficas y laborales: fuerza de trabajo, tasas de ocupación y desocupación, ingresos promedio por nivel educativo, y distribución territorial por sexo y comuna."
                                },
                                {
                                    url: "https://centroestudios.mineduc.cl/",
                                    title: "Centro de Estudios del MINEDUC",
                                    description: "Entrega datos desagregados sobre matrícula, egresos y titulaciones por nivel educativo e institución, fundamentales para caracterizar el capital humano regional."
                                },
                                {
                                    url: "https://www.mifuturo.cl/",
                                    title: "Mi Futuro",
                                    description: "Plataforma de la Superintendencia de Educación Superior que reporta empleabilidad, ingresos y duración real de estudios por carrera e institución, con desagregación territorial."
                                },
                                {
                                    url: "https://simbio.mma.gob.cl/",
                                    title: "Sistema de Información y Monitoreo de la Biodiversidad (SIMBIO)",
                                    description: "Sistema del Ministerio del Medio Ambiente que integra datos georreferenciados sobre biodiversidad, áreas protegidas, ecosistemas y presiones ambientales relevantes para el análisis territorial y ambiental."
                                },
                                {
                                    url: "https://anid.cl/",
                                    title: "DataCiencia (ANID)",
                                    description: "Plataforma nacional que centraliza datos sobre publicaciones científicas indexadas (WOS, Scopus, SciELO), permitiendo análisis por áreas del conocimiento, institución y región."
                                },
                                {
                                    url: "https://www.minciencia.gob.cl/areas/estudios-y-estadisticas/observa/",
                                    title: "Observa Ciencia (ANID)",
                                    description: "Entrega información sobre empresas de base científico-tecnológica (EBCT), proyectos de I+D, e instrumentos públicos de financiamiento vinculados a innovación y desarrollo territorial."
                                },
                                {
                                    url: "https://www.goredelosrios.cl/",
                                    title: "Gobierno Regional de Los Ríos (GORE)",
                                    description: "Fuente oficial para el seguimiento de planes, programas e iniciativas impulsadas desde el Gobierno Regional, en el marco de la política de fomento productivo e innovación."
                                }
                            ].map((item, index) => (
                                <div key={index} className="h-72">
                                    <a 
                                        href={item.url} 
                                        target='_blank' 
                                        className="block h-full p-4 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 flex flex-col transition-colors duration-200"
                                    >
                                        <h3 className="mb-3 text-base font-bold tracking-tight text-gray-900 dark:text-white line-clamp-2">
                                            {item.title}
                                        </h3>
                                        <p className="font-normal text-gray-700 dark:text-gray-400 text-sm leading-relaxed line-clamp-6 flex-1 text-justify">
                                            {item.description}
                                        </p>
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                <hr className="border-gray-800" />
                <section id="diseno-metodologico" className="bg-white dark:bg-gray-900">
                    <div className="gap-16 items-center py-1 px-4 mx-auto max-w-screen-xl lg:grid lg:py-1 lg:px-6">
                        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Diseño Estructural del Proceso Metod&oacute;logico</h2>
                            <div className="relative overflow-x-auto">
                                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                        <tr>
                                            <th scope="col" className="px-6 py-3">
                                                Propuesta de etapas
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                Descripción
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                Recolección de datos
                                            </th>
                                            <td className="px-6 py-4 text-justify">
                                                En esta etapa se identifican fuentes confiables y pertinentes para cada
                                                línea estratégica de la política. La recolección se formaliza mediante
                                                fichas técnicas que definen aspectos clave como la periodicidad, el
                                                formato, la unidad de medida y las restricciones legales de los datos. Este
                                                proceso asegura trazabilidad, legalidad y pertinencia territorial, en
                                                concordancia con la nueva Ley N° 21.628 de protección de datos
                                                personales.
                                            </td>
                                        </tr>
                                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                Procesamiento y análisis
                                            </th>
                                            <td className="px-6 py-4 text-justify">
                                                Los datos recopilados se integran en sistemas de almacenamiento
                                                seguros. Luego, se transforman en indicadores regionales mediante el
                                                uso de técnicas estadísticas, geoespaciales y análisis estructurado. Los
                                                resultados se organizan y presentan a través de dashboards temáticos y
                                                territoriales que permiten monitorear avances por línea estratégica,
                                                unidad territorial y dimensión de resultado (impacto, resultado o
                                                proceso).
                                            </td>
                                        </tr>
                                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                Difusión pública
                                            </th>
                                            <td className="px-6 py-4 text-justify">
                                                Los productos del sistema se publican a través de una plataforma web
                                                abierta, diseñada para entregar información clara, accesible y
                                                actualizada. Esta plataforma permite acceder a tableros de indicadores,
                                                visualizaciones cartográficas y reportes analíticos. Su objetivo es facilitar
                                                la comprensión técnica y territorial del estado de avance de la política
                                                por parte de equipos profesionales, autoridades y ciudadanía.
                                            </td>
                                        </tr>
                                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                Mejoramiento contínuo y gobernanza
                                            </th>
                                            <td className="px-6 py-4 text-justify">
                                                El sistema se rige por un enfoque de mejora continua que contempla la
                                                actualización periódica de indicadores, incorporación de nuevas fuentes
                                                y ajuste metodológico según buenas prácticas. Está alineado con
                                                estándares internacionales como DAMA-DMBOK, GDPR y la norma
                                                UNE 166006:2018. Su implementación se sustenta en un modelo de
                                                gobernanza ampliada, que incluye una secretaría técnica y un comité
                                                estratégico con participación del Gobierno Regional, el CRDP, la
                                                academia y actores del ecosistema productivo regional.
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}