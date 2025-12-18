import React, { useState } from 'react';

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
            
            <div className="gap-6 lg:gap-12 items-start py-2 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-3 lg:py-8 lg:px-6">
                <div className="space-y-4">
                    <SelectLineamiento onChange={handleLineamientoChange} />
                </div>
                
                <div className="space-y-8">
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