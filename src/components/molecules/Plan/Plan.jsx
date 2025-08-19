import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {fetchIniciativasHistoricas} from '../../../utils/api'
import { fetchIniciativasPriorizadas } from '../../../utils/api';
import { usePlanes } from '../../../context/PlanesContext';

const Plan = () => {
    const { id } = useParams();
    const { getPlanData } = usePlanes();
    const [activeTab, setActiveTab] = useState('actual');
    const [planData, setPlanData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [iniciativasHistoricas, setIniciativasHistoricas] = useState([]);
    const [iniciativasPriorizadas, setIniciativasPriorizadas] = useState([]);

    useEffect(() => {
        if (id) {
            setIsLoading(true);
            
            Promise.all([
                getPlanData(id),
                fetchIniciativasHistoricas(id),
                fetchIniciativasPriorizadas(id)
            ])
            .then(([planDataResult, iniciativasHistoricasResult, iniciativasPriorizadasResult]) => {
                setPlanData(planDataResult);
                setIniciativasHistoricas(iniciativasHistoricasResult);
                setIniciativasPriorizadas(iniciativasPriorizadasResult);
                setIsLoading(false);
            })
            .catch(error => {
                console.error('Error al obtener datos:', error);
                setIsLoading(false);
            });
        }
    }, [id, getPlanData]);

    const handleDescargarPDF = (iniciativaId) => {
        // Crear URL para descargar PDF
        const pdfUrl = `${process.env.REACT_APP_API_URL || 'http://localhost:3001'}/api/iniciativas/${iniciativaId}/pdf`;
        
        // Abrir en nueva ventana o descargar directamente
        window.open(pdfUrl, '_blank');
        
        // Alternativa: descargar directamente
        // const link = document.createElement('a');
        // link.href = pdfUrl;
        // link.download = `plan-${planId}.pdf`;
        // link.click();
    };

    const formatearMonto = (monto) => {
        if (!monto || monto === null || monto === undefined || isNaN(parseInt(monto))) {
            return 'No especificado';
        }
        return `$${parseInt(monto).toLocaleString('es-CL')}`;
    };

    if (isLoading) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <div className="text-gray-500">Cargando plan...</div>
            </div>
        );
    }

    if (!planData || !planData.planDatos || planData.planDatos.length === 0) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <div className="text-gray-500">Plan no encontrado</div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                        {planData.planDatos[0]?.nombre || `Plan ${id}`}
                    </h1>
                    <p className="text-gray-600 dark:text-gray-400">
                        {planData.planDatos[0]?.fin || "Descripción del plan"}
                    </p>
                </div>

                {/* Tabs */}
                <div className="border-b border-gray-200 dark:border-gray-700 mb-8">
                    <nav className="-mb-px flex space-x-8">
                        <button
                            onClick={() => setActiveTab('actual')}
                            className={`py-2 px-1 border-b-2 font-medium text-sm ${
                                activeTab === 'actual'
                                    ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'
                            }`}
                        >
                            Año en Curso
                        </button>
                        <button
                            onClick={() => setActiveTab('historico')}
                            className={`py-2 px-1 border-b-2 font-medium text-sm ${
                                activeTab === 'historico'
                                    ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'
                            }`}
                        >
                            Histórico
                        </button>
                    </nav>
                </div>

                {/* Tab Content */}
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
                    {activeTab === 'actual' ? (
                        <div>
                            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                                Información del Año en Curso
                            </h2>
                            <div className="space-y-4">
                                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                                    <h3 className="font-medium text-blue-900 dark:text-blue-300 mb-2">
                                        Iniciativas en ejecución actualmente
                                    </h3>
                                </div>
                                
                                {iniciativasPriorizadas && iniciativasPriorizadas.length > 0 ? (
                                    <div className="overflow-x-auto">
                                        <table className="min-w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
                                            <thead>
                                                <tr className="bg-amber-50 dark:bg-amber-900/20 border-b border-gray-200 dark:border-gray-700">
                                                    <th className="px-4 py-3 text-left text-sm font-semibold text-amber-900 dark:text-amber-300">Nombre del Proyecto</th>
                                                    <th className="px-4 py-3 text-left text-sm font-semibold text-amber-900 dark:text-amber-300">Plazo</th>
                                                    <th className="px-4 py-3 text-left text-sm font-semibold text-amber-900 dark:text-amber-300">Monto</th>
                                                    <th className="px-4 py-3 text-left text-sm font-semibold text-amber-900 dark:text-amber-300">Financiador</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {iniciativasPriorizadas.map((iniciativa, index) => (
                                                    <tr key={iniciativa.id} className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                                                        <td className="px-4 py-3 text-sm text-gray-900 dark:text-white max-w-xs">
                                                            <div className="" title={iniciativa.nombre}>
                                                                {iniciativa.nombre}
                                                            </div>
                                                        </td>
                                                        <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">
                                                            {iniciativa.plazo}
                                                        </td>
                                                        <td className="px-4 py-3 text-sm font-semibold text-gray-900 dark:text-white">
                                                            {formatearMonto(iniciativa.monto)}
                                                        </td>
                                                        <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300 text-center">
                                                            {iniciativa.financiador}
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                ) : (
                                    <div className="text-center py-8">
                                        <div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-lg">
                                            <h3 className="font-medium text-amber-900 dark:text-amber-300 mb-2">
                                                Sin Datos Históricos
                                            </h3>
                                            <p className="text-amber-700 dark:text-amber-400">
                                                No se encontraron iniciativas históricas para este plan
                                            </p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    ) : (
                        <div>
                            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                                Iniciativas Históricas
                            </h2>
                            
                            {iniciativasHistoricas && iniciativasHistoricas.length > 0 ? (
                                <div className="overflow-x-auto">
                                    <table className="min-w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
                                        <thead>
                                            <tr className="bg-amber-50 dark:bg-amber-900/20 border-b border-gray-200 dark:border-gray-700">
                                                <th className="px-4 py-3 text-left text-sm font-semibold text-amber-900 dark:text-amber-300">Año</th>
                                                <th className="px-4 py-3 text-left text-sm font-semibold text-amber-900 dark:text-amber-300">Fuente Financiamiento</th>
                                                <th className="px-4 py-3 text-left text-sm font-semibold text-amber-900 dark:text-amber-300">Entidad Ejecutora</th>
                                                <th className="px-4 py-3 text-left text-sm font-semibold text-amber-900 dark:text-amber-300">Nombre del Proyecto</th>
                                                <th className="px-4 py-3 text-left text-sm font-semibold text-amber-900 dark:text-amber-300">Código BIP</th>
                                                <th className="px-4 py-3 text-left text-sm font-semibold text-amber-900 dark:text-amber-300">Plazo (meses)</th>
                                                <th className="px-4 py-3 text-left text-sm font-semibold text-amber-900 dark:text-amber-300">Monto Total</th>
                                                <th className="px-4 py-3 text-left text-sm font-semibold text-amber-900 dark:text-amber-300">Acción</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {iniciativasHistoricas.map((iniciativa, index) => (
                                                <tr key={iniciativa.id} className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                                                    <td className="px-4 py-3 text-sm font-medium text-gray-900 dark:text-white">
                                                        {iniciativa.anio}
                                                    </td>
                                                    <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">
                                                        {iniciativa.instrumento}
                                                    </td>
                                                    <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">
                                                        {iniciativa.institucion}
                                                    </td>
                                                    <td className="px-4 py-3 text-sm text-gray-900 dark:text-white max-w-xs">
                                                        <div className="truncate" title={iniciativa.nombre}>
                                                            {iniciativa.nombre}
                                                        </div>
                                                    </td>
                                                    <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">
                                                        {iniciativa.codigoBip || 'N/D'}
                                                    </td>
                                                    <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300 text-center">
                                                        {iniciativa.plazo}
                                                    </td>
                                                    <td className="px-4 py-3 text-sm font-semibold text-gray-900 dark:text-white">
                                                        {formatearMonto(iniciativa.montoTotal)}
                                                    </td>
                                                    <td className="px-4 py-3 text-sm">
                                                        <button 
                                                            onClick={() => handleDescargarPDF(iniciativa.id)}
                                                            className="inline-flex items-center px-3 py-1 bg-blue-600 hover:bg-green-700 text-white text-xs font-medium rounded transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                                                        >
                                                            <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                                                <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                                                            </svg>
                                                            PDF
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            ) : (
                                <div className="text-center py-8">
                                    <div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-lg">
                                        <h3 className="font-medium text-amber-900 dark:text-amber-300 mb-2">
                                            Sin Datos Históricos
                                        </h3>
                                        <p className="text-amber-700 dark:text-amber-400">
                                            No se encontraron iniciativas históricas para este plan
                                        </p>
                                    </div>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Plan;