import React, { useState, useEffect } from 'react';
import {fetchIniciativasHistoricas} from '../../utils/api';
import ChartComponent from '../../components/atoms/ChartComponent';

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
        { id: 0, name: "Iniciativas asociadas por año", type: "line", enabled: true },
        { id: 1, name: "Monto por año", type: "line", enabled: true },
        { id: 2, name: "Ejecutores", type: "doughnut", enabled: true },
        { id: 3, name: "Estado", type: "doughnut", enabled: false },
        { id: 4, name: "Estado por año", type: "bar", enabled: false }
    ];

    // Función para preparar los datos según el tipo de gráfico
    const prepareChartData = (tabId) => {
        if (!chartData || !Array.isArray(chartData)) return null;

        const colors = [
            'rgba(59, 130, 246, 0.8)',   // blue
            'rgba(16, 185, 129, 0.8)',   // green
            'rgba(245, 158, 11, 0.8)',   // orange
            'rgba(239, 68, 68, 0.8)',    // red
            'rgba(139, 92, 246, 0.8)',   // purple
            'rgba(236, 72, 153, 0.8)',   // pink
            'rgba(14, 165, 233, 0.8)',   // sky
            'rgba(168, 85, 247, 0.8)',   // violet
        ];

        const colorsTransparent = [
            'rgba(59, 130, 246, 0.2)',
            'rgba(16, 185, 129, 0.2)',
            'rgba(245, 158, 11, 0.2)',
            'rgba(239, 68, 68, 0.2)',
            'rgba(139, 92, 246, 0.2)',
            'rgba(236, 72, 153, 0.2)',
            'rgba(14, 165, 233, 0.2)',
            'rgba(168, 85, 247, 0.2)',
        ];

        switch(tabId) {
            case 0: { // Iniciativas por año - contar cuántas iniciativas hay por año
                const iniciativasPorAnio = chartData.reduce((acc, item) => {
                    const anio = item.anio;
                    acc[anio] = (acc[anio] || 0) + 1;
                    return acc;
                }, {});

                const aniosOrdenados = Object.keys(iniciativasPorAnio).sort();
                
                return {
                    labels: aniosOrdenados,
                    datasets: [{
                        label: 'Número de Iniciativas',
                        data: aniosOrdenados.map(anio => iniciativasPorAnio[anio]),
                        borderColor: colors[0],
                        backgroundColor: colorsTransparent[0],
                        tension: 0.4,
                        fill: false
                    }]
                };
            }

            case 1: { // Monto total por año
                const montosPorAnio = chartData.reduce((acc, item) => {
                    const anio = item.anio;
                    const monto = parseFloat(item.montoTotal) || 0;
                    acc[anio] = (acc[anio] || 0) + monto;
                    return acc;
                }, {});

                const aniosOrdenados = Object.keys(montosPorAnio).sort();
                
                return {
                    labels: aniosOrdenados,
                    datasets: [{
                        label: 'Monto Total (CLP)',
                        data: aniosOrdenados.map(anio => montosPorAnio[anio]),
                        borderColor: colors[1],
                        backgroundColor: colorsTransparent[1],
                        tension: 0.4,
                        fill: false
                    }]
                };
            }

            case 2: { // Ejecutores (instituciones)
                const iniciativasPorInstitucion = chartData.reduce((acc, item) => {
                    const institucion = item.institucion || 'Sin institución';
                    acc[institucion] = (acc[institucion] || 0) + 1;
                    return acc;
                }, {});

                const instituciones = Object.keys(iniciativasPorInstitucion);
                
                return {
                    labels: instituciones,
                    datasets: [{
                        label: 'Iniciativas por Ejecutor',
                        data: instituciones.map(inst => iniciativasPorInstitucion[inst]),
                        backgroundColor: colors.slice(0, instituciones.length),
                        borderColor: '#fff',
                        borderWidth: 2
                    }]
                };
            }

            case 3: { // Estado de iniciativas
                const iniciativasPorInstrumento = chartData.reduce((acc, item) => {
                    const instrumento = item.instrumento || 'Sin clasificar';
                    acc[instrumento] = (acc[instrumento] || 0) + 1;
                    return acc;
                }, {});

                const instrumentos = Object.keys(iniciativasPorInstrumento);
                
                return {
                    labels: instrumentos,
                    datasets: [{
                        label: 'Iniciativas por Instrumento',
                        data: instrumentos.map(inst => iniciativasPorInstrumento[inst]),
                        backgroundColor: colors.slice(0, instrumentos.length),
                        borderColor: '#fff',
                        borderWidth: 2
                    }]
                };
            }

            case 4: { // Estado por año (instrumentos por año)
                // Obtener todos los años y instrumentos únicos
                const anios = [...new Set(chartData.map(item => item.anio))].sort();
                const instrumentos = [...new Set(chartData.map(item => item.instrumento || 'Sin clasificar'))];

                // Crear datasets por cada instrumento
                const datasets = instrumentos.map((instrumento, index) => {
                    const data = anios.map(anio => {
                        return chartData.filter(item => 
                            item.anio === anio && (item.instrumento || 'Sin clasificar') === instrumento
                        ).length;
                    });

                    return {
                        label: instrumento,
                        data: data,
                        backgroundColor: colors[index % colors.length],
                        borderColor: colors[index % colors.length],
                        borderWidth: 1
                    };
                });

                return {
                    labels: anios,
                    datasets: datasets
                };
            }

            default:
                return null;
        }
    };

    // Opciones de configuración para cada tipo de gráfico
    const getChartOptions = (tabId) => {
        const baseOptions = {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'top',
                    labels: {
                        color: document.documentElement.classList.contains('dark') ? '#fff' : '#374151'
                    }
                },
                tooltip: {
                    mode: 'index',
                    intersect: false,
                    callbacks: {
                        label: function(context) {
                            let label = context.dataset.label || '';
                            if (label) {
                                label += ': ';
                            }
                            if (tabId === 1) {
                                // Formato de moneda para el gráfico de montos
                                label += new Intl.NumberFormat('es-CL', { 
                                    style: 'currency', 
                                    currency: 'CLP',
                                    maximumFractionDigits: 0
                                }).format(context.parsed.y || context.parsed);
                            } else {
                                label += context.parsed.y !== undefined ? context.parsed.y : context.parsed;
                            }
                            return label;
                        }
                    }
                }
            }
        };

        if (tabId === 2 || tabId === 3) {
            // Opciones para gráficos de dona
            return {
                ...baseOptions,
                cutout: '60%'
            };
        }

        // Opciones para gráficos con ejes X e Y
        const axisOptions = {
            ...baseOptions,
            scales: {
                x: {
                    grid: {
                        color: 'rgba(156, 163, 175, 0.1)'
                    },
                    ticks: {
                        color: document.documentElement.classList.contains('dark') ? '#9ca3af' : '#6b7280'
                    }
                },
                y: {
                    beginAtZero: true,
                    grid: {
                        color: 'rgba(156, 163, 175, 0.1)'
                    },
                    ticks: {
                        color: document.documentElement.classList.contains('dark') ? '#9ca3af' : '#6b7280',
                        callback: function(value) {
                            if (tabId === 1) {
                                // Formato abreviado para montos en el eje Y
                                if (value >= 1000000000) {
                                    return '$' + (value / 1000000000).toFixed(1) + 'MM';
                                } else if (value >= 1000000) {
                                    return '$' + (value / 1000000).toFixed(1) + 'M';
                                }
                                return '$' + value;
                            }
                            return value;
                        }
                    }
                }
            }
        };

        return axisOptions;
    };

    // Función para obtener datos del endpoint
    const fetchChartData = async (planId) => {
        setLoading(true);
        setError(null);
        try {
            const data = await fetchIniciativasHistoricas(planId);
            console.log('Datos recibidos:', data);
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
                                    onClick={() => tab.enabled && setActiveTab(tab.id)}
                                    disabled={!tab.enabled}
                                    className={`inline-block p-4 border-b-2 rounded-t-lg ${
                                        !tab.enabled
                                            ? 'text-gray-400 border-transparent cursor-not-allowed opacity-50'
                                            : activeTab === tab.id
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
                                {tab.enabled ? (
                                    <div className="w-full h-96">
                                        <ChartComponent
                                            type={tab.type}
                                            data={prepareChartData(tab.id)}
                                            options={getChartOptions(tab.id)}
                                        />
                                    </div>
                                ) : (
                                    <div className="w-full h-96 flex items-center justify-center">
                                        <div className="text-center">
                                            <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                            </svg>
                                            <h3 className="mt-2 text-sm font-medium text-gray-900 dark:text-white">
                                                Datos no disponibles
                                            </h3>
                                            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                                                Esta visualización estará disponible próximamente
                                            </p>
                                        </div>
                                    </div>
                                )}
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