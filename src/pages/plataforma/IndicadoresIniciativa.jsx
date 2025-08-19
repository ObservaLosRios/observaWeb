import React, { useState } from 'react';

export const IndicadoresIniciativa= () => {
    
    return (
        <>
        <section id="metodologia" className="bg-white dark:bg-gray-900">
            <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Indicadores por Iniciativa</h2>
                    <p className="mb-4">
                        Descripcion
                    </p>
                </div>
                <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                    <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option value="">Seleccione indicador</option>
                        <option value="1">Indicador 1</option>
                        <option value="2">Indicador 2</option>
                    </select>
                </div>
            </div>
        </section>
        </>
    )
}
export default IndicadoresIniciativa;