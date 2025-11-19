import React, { useState, useEffect } from 'react';
import {fetchIniciativasHistoricas} from '../../utils/api';

export const IndicadoresIniciativa= () => {
    const [activeTab, setActiveTab] = useState(0);
    const [selectedPlan, setSelectedPlan] = useState('');
    const [chartData, setChartData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    
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

    const tabs = [
        { id: 0, name: "Gráfico 1" },
        { id: 1, name: "Gráfico 2" },
        { id: 2, name: "Gráfico 3" },
        { id: 3, name: "Gráfico 4" },
        { id: 4, name: "Gráfico 5" }
    ];

    // Función para obtener datos del endpoint
    const fetchChartData = async (planId) => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetchIniciativasHistoricas(planId)
            if (!response.ok) {
                console.log(response);
                throw new Error('Error al obtener los datos');
            }
            const data = await response.json();
            setChartData(data);
        } catch (err) {
            setError(err.message);
            console.error('Error fetching chart data:', err);
        } finally {
            setLoading(false);
        }
    };

    // Manejar cambio en el select
    const handlePlanChange = (e) => {
        const planId = e.target.value;
        setSelectedPlan(planId);
        if (planId) {
            fetchChartData(planId);
            setActiveTab(0); // Resetear a la primera pestaña
        } else {
            setChartData(null);
        }
    };

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
                    <select 
                        value={selectedPlan}
                        onChange={handlePlanChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
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

        {/* Sección de pestañas con gráficos - Solo se muestra si hay un plan seleccionado */}
        {selectedPlan && (
        <section className="bg-white dark:bg-gray-900">
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                
                {/* Indicador de carga */}
                {loading && (
                    <div className="flex justify-center items-center h-64">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
                    </div>
                )}

                {/* Mensaje de error */}
                {error && (
                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
                        <strong className="font-bold">Error: </strong>
                        <span className="block sm:inline">{error}</span>
                    </div>
                )}

                {/* Contenido de las pestañas */}
                {!loading && !error && chartData && (
                <>
                {/* Pestañas */}
                <div className="border-b border-gray-200 dark:border-gray-700">
                    <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
                        {tabs.map(tab => (
                            <li key={tab.id} className="mr-2">
                                <button
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`inline-block p-4 border-b-2 rounded-t-lg ${
                                        activeTab === tab.id
                                            ? 'text-blue-600 border-blue-600 dark:text-blue-500 dark:border-blue-500'
                                            : 'border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300'
                                    }`}
                                >
                                    {tab.name}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contenido de las pestañas */}
                <div className="mt-8">
                    {tabs.map(tab => (
                        <div
                            key={tab.id}
                            className={`${activeTab === tab.id ? 'block' : 'hidden'}`}
                        >
                            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6">
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                                    {tab.name}
                                </h3>
                                <div className="w-full h-96 flex items-center justify-center">
                                    {/* Aquí irá el gráfico de Chart.js */}
                                    <canvas id={`chart-${tab.id}`}></canvas>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                </>
                )}
            </div>
        </section>
        )}
        </>
    )
}
export default IndicadoresIniciativa;