import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { usePlanes } from '../../context/PlanesContext';
import CapsuleFlow from '../../components/molecules/DiagramaHomePlataforma/CapsuleFlow';
import { GiDoubleFish } from "react-icons/gi";
import { PiBowlFoodFill } from "react-icons/pi";
import { MdTravelExplore } from "react-icons/md";
import { PiTreeBold } from "react-icons/pi";
import { GiFruitBowl } from "react-icons/gi";
import { FaChartLine } from "react-icons/fa";
import { GiHealthIncrease } from "react-icons/gi";
import { GrActions } from "react-icons/gr";

export const Plataforma = () => {
    const navigate = useNavigate();
    const { getPlanData, getIniciativasData } = usePlanes();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedCard, setSelectedCard] = useState(null);
    const [planData, setPlanData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [iniciativasCompFinan, setIniciativasCompFinan] = useState([]);

    const cardsData = [
        { id: 1, title: "Industria secundaria de la madera de alto valor", icon: <PiTreeBold /> },
        { id: 2, title: "Economía Creativa para el fomento productivo", icon: <FaChartLine /> },
        { id: 3, title: "Fruticultura Inteligente", icon: <GiFruitBowl /> },
        { id: 4, title: "Alimentos con valor agregado", icon: <PiBowlFoodFill /> },
        { id: 5, title: "Turismo", icon: <MdTravelExplore /> },
        { id: 6, title: "Pesca y acuicultura", icon: <GiDoubleFish /> },
        { id: 7, title: "Tecnologías en Salud y Calidad de Vida", icon: <GiHealthIncrease /> },
        { id: 8, title: "Economía y Fomento Mapuche", icon: <GrActions /> }
    ];

    useEffect(() => {
        const handleEscape = (event) => {
            if (event.key === 'Escape' && isModalOpen) {
                closeModal();
            }
        };

        if (isModalOpen) {
            document.addEventListener('keydown', handleEscape);
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = 'unset';
        };
    }, [isModalOpen]);

    const handleCardClick = (cardData) => {
        setSelectedCard(cardData);
        setIsModalOpen(true);
        setIsLoading(true);
        setPlanData(null);
        setIniciativasCompFinan([]);
        
        Promise.all([
            getPlanData(cardData.id),
            getIniciativasData(cardData.id)
        ])
        .then(([planesData, iniciativasData]) => {
            setPlanData(planesData);
            setIniciativasCompFinan(iniciativasData);
            setIsLoading(false);
        })
        .catch(error => {
            console.error('Error al obtener datos:', error);
            setIsLoading(false);
        });
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedCard(null);
        setPlanData(null);
    };

    const handleDescargarPDF = (planId) => {
        // Crear URL para descargar PDF
        const pdfUrl = `${process.env.REACT_APP_API_URL || 'http://localhost:3001'}/api/planes/${planId}/pdf`;
        
        // Abrir en nueva ventana o descargar directamente
        window.open(pdfUrl, '_blank');
        
        // Alternativa: descargar directamente
        // const link = document.createElement('a');
        // link.href = pdfUrl;
        // link.download = `plan-${planId}.pdf`;
        // link.click();
    };

    const handleVerDetalle = (planId) => {
        // Navegar usando React Router
        navigate(`/plataforma/planes/${planId}`);
        
        // O abrir en nueva ventana
        // window.open(`/planes/${planId}`, '_blank');
    };

    const scrollToSection = (sectionId) => {
        const element =  document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const formatearMonto = (monto) => {
        if (!monto) return '0';
        return monto.toLocaleString('es-CL', {
            minimumFractionDigits: 3,
            maximumFractionDigits: 3
        });
    };

    return (
        <div className="flex">
            <main className="flex-1">
                <section className="bg-white dark:bg-gray-900">
                    <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-1 lg:py-16 lg:px-6">
                        <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Presentación Plataforma</h2>
                            <p className="mb-4 text-justify">
                                Esta plataforma ha sido diseñada para acompañar el desarrollo y la implementación de la 
                                Política Regional de Fomento de la Región de Los Ríos (2021–2026), 
                                permitiendo visualizar y monitorear los avances hacia una economía más innovadora, sostenible e inclusiva.
                            </p>
                            <p className="mb-4 text-justify">
                                Aquí encontrarás de forma clara y estructurada los lineamientos estratégicos, objetivos, 
                                metas e indicadores que orientan esta política pública, así como los planes y las iniciativas impulsoras que le dan vida en el territorio.
                            </p>
                            <p className="mb-4 text-justify">
                                Este espacio busca fortalecer la transparencia, la participación y la toma de decisiones basadas en evidencia, 
                                ofreciendo una mirada integral y actualizada del estado de avance de cada uno de los componentes que dan forma a la política.

                                A continuación, te invitamos a conocer la estructura general que conecta cada nivel de planificación estratégica y operativa, y a explorar en detalle sus elementos.
                            </p>
                        </div>
                    </div>
                </section>
                <hr className="border-gray-800" />
                <section className="bg-white dark:bg-gray-900">
                    <div className="items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-1 lg:py-16 lg:px-6">
                        <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                            <CapsuleFlow />
                        </div>
                    </div>
                </section>
                <hr className="border-gray-800" />
                <section id="planesIniciativas" className="bg-white dark:bg-gray-900">
                    <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-1 lg:py-16 lg:px-6">
                        <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Planes e Iniciativas</h2>
                            <p className="mb-4 text-justify">
                                Son instrumentos operativos que materializan la implementación de la política pública regional. 
                                Los planes agrupan acciones estratégicas a mediano plazo orientadas a un ámbito o sector específico, 
                                mientras que las iniciativas impulsoras corresponden a proyectos o programas concretos, innovadores o replicables, 
                                que actúan como catalizadores del cambio en sectores priorizados. Ambos están diseñados para cumplir los objetivos estratégicos y avanzar 
                                en las metas definidas, articulando esfuerzos públicos y privados.
                            </p>
                            <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                                <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-12 md:space-y-0">
                                     {cardsData.map((card) => (
                                        <div key={card.id}>
                                            <div 
                                                className="block p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 h-48 flex flex-col justify-center items-center cursor-pointer"
                                                onClick={() => handleCardClick(card)}
                                            >
                                                <h5 className="mb-2 font-bold tracking-tight text-gray-900 dark:text-white text-6xl flex justify-center">
                                                    {card.icon}
                                                </h5>
                                                <p className="font-normal text-gray-700 dark:text-gray-400 text-center">
                                                    {card.title}
                                                </p>
                                            </div>
                                        </div>
                                    ))}                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            {isModalOpen && (
                <div 
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
                    onClick={closeModal}
                >
                    <div 
                        className="bg-white dark:bg-gray-800 rounded-lg shadow-lg max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex items-center justify-between p-4 border-b dark:border-gray-700">
                            <button
                                onClick={closeModal}
                                className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div className="p-6">
                            {isLoading ? (
                                <div className="flex justify-center items-center py-8">
                                    <div className="text-gray-500">Cargando datos...</div>
                                </div>
                            ) : planData && planData.planDatos && planData.planDatos.length > 0 ? (
                                <div className="space-y-6">
                                    {planData.planDatos.map(plan => (
                                        <div key={plan.id} className="border-b border-gray-200 dark:border-gray-700 pb-6 last:border-b-0">
                                            <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                                                {plan.nombre}
                                            </h4>
                                            
                                            <div className="mb-4">
                                                <h5 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                                                    Finalidad:
                                                </h5>
                                                <p className="text-gray-700 dark:text-gray-300 text-justify">
                                                    {plan.fin}
                                                </p>
                                            </div>

                                            {plan.fechaAprobacion && (
                                                <div className="mb-4">
                                                    <span className="text-sm text-gray-500 dark:text-gray-400">
                                                        Fecha de aprobación: {plan.fechaAprobacion}
                                                    </span>
                                                </div>
                                            )}

                                            {plan.objetivosEspecificos && plan.objetivosEspecificos.objetivos && (
                                                <div className="mb-6">
                                                    <h5 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">
                                                        Objetivos Específicos:
                                                    </h5>
                                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                                        {plan.objetivosEspecificos.objetivos.map((objetivo, index) => (
                                                            <div key={index} className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border-l-4 border-green-500">
                                                                <div className="flex items-start">
                                                                    <span className="inline-flex items-center justify-center w-8 h-8 bg-green-500 text-white rounded-full text-sm font-bold mr-3 mt-0.5 flex-shrink-0">
                                                                        {index + 1}
                                                                    </span>
                                                                    <div>
                                                                        <h6 className="font-semibold text-green-800 dark:text-green-300 mb-2">
                                                                            Objetivo {index + 1}
                                                                        </h6>
                                                                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                                                                            {objetivo}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}

                                            {iniciativasCompFinan && iniciativasCompFinan.length > 0 && (
                                                <div className="mb-6">
                                                    <h5 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">
                                                        Iniciativas de Financiamiento Propuestas en el Plan:
                                                    </h5>
                                                    <div className="overflow-hidden bg-white dark:bg-gray-800 shadow rounded-lg border border-gray-200 dark:border-gray-700">
                                                        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                                                            <thead className="bg-gray-50 dark:bg-gray-700">
                                                                <tr>
                                                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                                                        #
                                                                    </th>
                                                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                                                        Nombre
                                                                    </th>
                                                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                                                        Duración
                                                                    </th>
                                                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                                                        Monto Año 1
                                                                    </th>
                                                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                                                        Monto Año 2
                                                                    </th>
                                                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                                                        Monto Año 3
                                                                    </th>
                                                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                                                        Monto Total
                                                                    </th>
                                                                </tr>
                                                            </thead>
                                                            <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                                                                {iniciativasCompFinan.map((iniciativa, index) => (
                                                                    <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                                                                        <td className="px-6 py-4 whitespace-nowrap">
                                                                            <span className="inline-flex items-center justify-center w-6 h-6 bg-blue-500 text-white rounded-full text-xs font-bold">
                                                                                {iniciativa.numero}
                                                                            </span>
                                                                        </td>
                                                                        <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">
                                                                            {iniciativa.nombre}
                                                                        </td>
                                                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">
                                                                            {iniciativa.duracion} meses
                                                                        </td>
                                                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">
                                                                            ${formatearMonto(iniciativa.anio1)}
                                                                        </td>
                                                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">
                                                                            ${formatearMonto(iniciativa.anio2)}
                                                                        </td>
                                                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">
                                                                            ${formatearMonto(iniciativa.anio3)}
                                                                        </td>
                                                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                                                                            ${formatearMonto(iniciativa.monto_total)}
                                                                        </td>
                                                                    </tr>
                                                                ))}
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            )}

                                            <div className="flex gap-3 mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
                                                <button 
                                                    onClick={() => handleDescargarPDF(plan.id)}
                                                    className="inline-flex items-center px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                                                >
                                                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                                        <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                                                    </svg>
                                                    Descargar PDF
                                                </button>
                                                
                                                <button 
                                                    onClick={() => handleVerDetalle(plan.id)}
                                                    className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                                                >
                                                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                                                        <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                                                    </svg>
                                                    Ver Detalle
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="text-center py-8 text-gray-500">
                                    Plan en elaboración
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}