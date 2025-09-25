import React, { useState } from 'react';
import SelectIndicador from '../../components/molecules/Entorno/SelectIndicador';
import DatosIndicador from '../../components/molecules/Lineamiento/DatosIndicador';

export const IndicadoresEntorno = () => {
    const [selectedIndicador, setSelectedIndicador] = useState('');

    return (
        <>
        <section id="metodologia" className="bg-white dark:bg-gray-900">
            <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Indicadores de Entorno</h2>
                    <p className="mb-4 text-justify">
                        Son indicadores que entregan un marco de contexto para la región en ámbitos económicos, sociales,
                        territoriales y ambientales. Si bien no están directamente vinculados a las metas de la Política
                        Regional de Fomento Productivo, Emprendimiento e Innovación, se relacionan con sus
                        lineamientos y permiten interpretar de manera integral los avances y desafíos de la política.
                    </p>
                </div>
                <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                    <SelectIndicador onChange={setSelectedIndicador}/>
                </div>
            </div>
            <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-1 lg:py-16 lg:px-6">
                <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-1 lg:py-16 lg:px-6">
                    <DatosIndicador indicadorId={selectedIndicador} />
                </div>
            </div>
        </section>
        </>
    )
}
export default IndicadoresEntorno;