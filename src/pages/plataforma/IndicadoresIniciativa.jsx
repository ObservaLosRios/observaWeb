import React, { useState } from 'react';

export const IndicadoresIniciativa= () => {
    const cardsData = [
        { id: 1, title: "Industria secundaria de la madera de alto valor" },
        { id: 2, title: "Economía Creativa para el fomento productivo" },
        { id: 3, title: "Fruticultura Inteligente" },
        { id: 4, title: "Alimentos con valor agregado" },
        { id: 5, title: "Turismo" },
        { id: 6, title: "Pesca y acuicultura" },
        { id: 7, title: "Tecnologías en Salud y Calidad de Vida" },
        { id: 8, title: "Economía y Fomento Mapuche" }
    ];
    return (
        <>
        <section id="metodologia" className="bg-white dark:bg-gray-900">
            <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Indicadores por Planes Sectoriales</h2>
                    <p className="mb-4">
                        Son indicadores que permiten evaluar el avance de las iniciativas priorizadas en la Política Regional de Fomento Productivo, Emprendimiento e Innovación. Estas iniciativas buscan potenciar sectores estratégicos y fomentar el desarrollo económico sostenible en la región.
                        Cada indicador está vinculado a un plan específico y permite medir su impacto y efectividad en el cumplimiento de los objetivos estratégicos de la política.
                    </p>
                </div>
                <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                    <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option value="">Seleccione Plan</option>
                        {cardsData.map(card => (
                            <option key={card.id} value={card.id}>
                                {card.title}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
        </section>
        </>
    )
}
export default IndicadoresIniciativa;