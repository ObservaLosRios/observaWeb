import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { driver } from 'driver.js';
import "driver.js/dist/driver.css";

import SelectLineamiento from '../../components/molecules/Lineamiento/SelectLineamiento';
import ObjetivoPorLineamiento from '../../components/molecules/Lineamiento/ObjetivoPorLineamiento';
import MetasPorObjetivo from '../../components/molecules/Lineamiento/MetasPorObjetivo';
import IndicadorPorMeta from '../../components/molecules/Lineamiento/IndicadorPorMeta';
import DatosIndicador from '../../components/molecules/Lineamiento/DatosIndicador';

export const IndicadoresLineamiento = () => {
    const [selectedLineamiento, setSelectedLineamiento] = useState('');
    const [selectedObjetivo, setSelectedObjetivo] = useState('');
    const [selectedMeta, setSelectedMeta] = useState('');
    const [selectedIndicador, setSelectedIndicador] = useState('');

    const MyToast = ({closeToast}) => (
        <div className="bg-white dark:bg-gray-900">
            <h2 className="text-lg font-bold">Tour guiado disponible</h2>
            <div className="flex gap-2">
                <button 
                    onClick={() => {
                        const driverObj = driver({
                            showProgress: true,
                            animate: true,
                            opacity: 0.75,
                            doneBtnText: 'Finalizar',
                            steps:[
                                {
                                    element:  "#select-lineamiento",
                                    popover: {
                                        title: "Selecciona un Lineamiento",
                                        description: "Elige un lineamiento para ver sus objetivos, metas e indicadores asociados."
                                    }
                                },
                                {
                                    element: "#select-objetivo",
                                    popover: {
                                        title: "Selecciona un Objetivo",
                                        description: "Elige un objetivo para ver su meta e indicadores asociados."
                                    }
                                },
                                {
                                    element: "#select-indicador",
                                    popover: {
                                        title: "Selecciona un Indicador",
                                        description: "Elige un indicador para ver sus datos asociados."
                                    }
                                }
                            ]
                        });
                        driverObj.drive();
                        closeToast();
                    }}
                    className="px-3 py-1 bg-blue-500 text-white rounded text-sm hover:bg-blue-600"
                >
                    Iniciar tour
                </button>
            </div>
        </div>
    );

    useEffect(() => {
        toast(<MyToast />, {
            position: "top-right",
            autoClose: false,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            style: {
                backgroundColor: '#101828',
                color: 'white'
            }
        });
    }, []);

    const handleLineamientoChange = (id) => {
        setSelectedLineamiento(id);
        setSelectedObjetivo('');
        setSelectedMeta('');
        setSelectedIndicador('');
    };

    const handleObjetivoChange = (id) => {
        setSelectedObjetivo(id);
        setSelectedMeta('');
        setSelectedIndicador('');
    };


    const handleMetaChange = (id) => {
        setSelectedMeta(id);
        setSelectedIndicador('');
    };

    // Scroll y focus a DatosIndicador al seleccionar un indicador
    const handleIndicadorChange = (id) => {
        setSelectedIndicador(id);
        setTimeout(() => {
            const section = document.getElementById('datos-indicador-section');
            if (section) {
                section.scrollIntoView({ behavior: 'smooth', block: 'center' });
                section.focus();
            }
        }, 100);
    };

    return (
        <>
        <section className="bg-white dark:bg-gray-900">
            <ToastContainer/>
            
            <div className="gap-13 items-start py-2 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-3 lg:py-8 lg:px-6">
                <div className="space-y-4">
                    <SelectLineamiento onChange={handleLineamientoChange} />
                </div>
                
                <div className="space-y-4">
                    <ObjetivoPorLineamiento lineamientoId={selectedLineamiento} onChange={handleObjetivoChange} />
                    <MetasPorObjetivo objetivoId={selectedObjetivo} onChange={handleMetaChange} />
                </div>
                
                <div className="space-y-4">
                    <IndicadorPorMeta metaId={selectedMeta} onChange={handleIndicadorChange}/>
                </div>
            </div>
            
            <div id="datos-indicador-section" tabIndex="-1" className="gap-16 items-center py-2 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-1 lg:py-4 lg:px-6 focus:outline-none">
                <DatosIndicador indicadorId={selectedIndicador} />
            </div>
            
        </section>
        </>
    )
}
export default IndicadoresLineamiento;