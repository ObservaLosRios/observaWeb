import React from 'react'

export const Mapas = () => {
    return (
        <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
            <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
                <div className="mx-auto max-w-5xl">
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">Mapas</h2>
                    <div className="mx-auto max-w-2xl space-y-6">
                        <p className="text-base font-normal text-gray-500 dark:text-gray-400 text-justify">
                            La Región de Los Ríos se fundó el 02 de Octubre del año 2007, a partir de la divisón administrativa de la Región
                            de Los Lagos, estableciendo a Valdivia como la capital regional de Los Ríos. Su nombre viene de su marcada
                            característica geográfica, ya que en el predominan dos cuencas hidrográficas; Río Valdivia y el Río Bueno.
                            Además de sectores costeros y los ya mencionados ríos, la geografía de la Región también contempla extensos
                            cordones montañosos y volcánicos, destacándose el Volcán Villarica, el Complejo Volcánico Quetrupillán, el
                            Complejo Volcánico Mocho-Choshuenco, el Volcán Carrán-Los Venados y el Complejo Volcánico Puyehue-
                            Cordón Caulle.
                        </p>
                    </div>
                    <div className="my-8 xl:mb-16 xl:mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                        {/* Iframe */}
                        <div className="lg:col-span-2 flex justify-center">
                            <iframe 
                                src="https://qgiscloud.com/Cer_UACh/Datos_Regionales_-_OBSERVA/" 
                                width="600" 
                                height="600"
                                className="w-full max-w-[600px] border rounded-lg shadow-lg"
                            ></iframe>
                        </div>
                        
                        {/* Sección explicativa */}
                        <div className="lg:col-span-1 bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                                Cómo usar el mapa interactivo
                            </h3>
                            <div className="space-y-4 text-sm text-gray-600 dark:text-gray-300">
                                <div>
                                    <h4 className="font-medium text-gray-900 dark:text-white mb-2">Navegación:</h4>
                                    <ul className="list-disc list-inside space-y-1">
                                        <li>Arrastra para mover el mapa</li>
                                        <li>Usa la rueda del mouse para hacer zoom</li>
                                        <li>Haz clic en Capas y Leyendas para desactivar todas las capas</li>
                                        <li>Activa o desactiva las capas que te interese ver</li>
                                    </ul>
                                </div>
                                
                                <div>
                                    <h4 className="font-medium text-gray-900 dark:text-white mb-2">Información:</h4>
                                    <ul className="list-disc list-inside space-y-1">
                                        <li>Haz clic en los elementos del mapa para ver detalles</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mx-auto mb-6 max-w-3xl space-y-6 md:mb-12">
                        <p className="text-base font-normal text-gray-500 dark:text-gray-400 text-justify">
                            La Región de Los Ríos se compone por dos provincias, la Provincia
                            de Valdivia y la Provincia de Ranco.
                            La Provincia de Valdivia se divide en las comunas de Valdivia,
                            Corral, Lanco, Los Lagos, Máfil, Mariquina, Paillaco y Panguipulli.
                            La Provincia de Ranco se divide en las comunas de La Unión,
                            Futrono, Lago Ranco, Río Bueno.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Mapas;