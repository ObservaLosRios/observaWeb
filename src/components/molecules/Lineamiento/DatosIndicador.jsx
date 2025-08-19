import React, { useEffect, useState } from 'react';
import { fetchDatosIndicador, fetchNotebookIndicador } from '../../../utils/api';

function DatosIndicador({ indicadorId }) {
    const [datos, setDatos] = useState(null);
    const [labels, setLabels] = useState({});
    const [loadingGrafico, setLoadingGrafico] = useState(false);

    const camposOcultos = ['id', 'nombre', 'descripcion']

    const formatearFecha = (fecha) => {
        if (!fecha) return fecha;
        
        // Detectar si es una fecha ISO
        const fechaISO = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d{3})?Z?$/;
        if (fechaISO.test(fecha)) {
            const date = new Date(fecha);
            return date.toLocaleDateString('es-CL', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });
        }
        
        return fecha;
    };

    useEffect(() => {
        if (indicadorId) {
            fetchDatosIndicador(indicadorId)
                .then(res => {
                    if (res.labels && res.datos) {
                        setLabels(res.labels);
                        setDatos(res.datos);
                    } else {
                        setLabels({});
                        setDatos(res);
                    }
                })
                .catch(() => {
                    setDatos(null);
                    setLabels({});
                });
        } else {
            setDatos(null);
            setLabels({});
        }
    }, [indicadorId]);

    const handleVerGrafico = async () => {
        if (!datos || !datos[0] || !datos[0].id) return;
        
        setLoadingGrafico(true);
        
        try {
            const response = await fetchNotebookIndicador(datos[0].id);
            
            let notebookUrl = null;
            
            // Ajustar según la estructura de tu respuesta
            if (response && response.url_notebook) {
                notebookUrl = response.url_notebook;
            } else if (response && response.url) {
                notebookUrl = response.url;
            } else if (response && typeof response === 'string') {
                notebookUrl = response;
            }
            
            if (notebookUrl) {
                // Abrir en nueva pestaña
                window.open(notebookUrl, '_blank', 'noopener,noreferrer');
            } else {
                console.error('URL del notebook no encontrada en la respuesta');
                alert('No se pudo obtener la URL del gráfico');
            }
        } catch (error) {
            console.error('Error al obtener la URL del gráfico:', error);
            alert('Error al cargar el gráfico. Por favor, inténtalo de nuevo.');
        } finally {
            setLoadingGrafico(false);
        }
    };

    if (!indicadorId) return null;
    if (!datos) return <div>Cargando datos...</div>;
    if (!Array.isArray(datos) || datos.length === 0) return <div>No hay datos para este indicador.</div>;

    const fila = datos[0];
    const columnas = Object.keys(fila).filter(col => !camposOcultos.includes(col));

    return (
        <>
        <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            <h3 className="mb-4 text-2xl tracking-tight font-extrabold text-gray-900 dark:text-white">{datos[0].nombre}</h3>
            <p className="mb-4 text-justify">
                {datos[0].descripcion ? datos[0].descripcion : 'Sin descripción disponible.'}
            </p>
            <button
                onClick={handleVerGrafico}
                disabled={loadingGrafico}
                className={`text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 transition-all duration-200 flex items-center ${
                    loadingGrafico 
                        ? 'bg-gray-400 cursor-not-allowed' 
                        : 'bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800'
                }`}
                type="button"
            >
                {loadingGrafico ? (
                    <div className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Cargando...
                    </div>
                ) : (
                    <>
                        Ver Gráfico
                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                    </>
                )}
            </button>
        </div>        
        <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">            
            <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                <div className="overflow-hidden bg-white dark:bg-gray-800 shadow-lg rounded-xl border border-gray-200 dark:border-gray-700">
                    <table className="min-w-full">
                        <tbody>
                            {columnas.map((col, index) => (
                                <tr key={col} className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                                    <th className="px-6 py-4 text-left bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border-r border-gray-200 dark:border-gray-600">
                                        <div className="flex items-center">
                                            <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                                            <span className="text-sm font-semibold text-gray-900 dark:text-white">
                                                {labels[col] || col}
                                            </span>
                                        </div>
                                    </th>
                                    <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300 font-medium text-justify">
                                        {formatearFecha(fila[col])}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        </>
    );
}

export default DatosIndicador;