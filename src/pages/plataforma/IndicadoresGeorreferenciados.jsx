import React, { useState } from 'react';
import SelectLineamiento from '../../components/molecules/Lineamiento/SelectLineamiento';
import ObjetivoPorLineamiento from '../../components/molecules/Lineamiento/ObjetivoPorLineamiento';
import MetasPorObjetivo from '../../components/molecules/Lineamiento/MetasPorObjetivo';
import IndicadorPorMetaGeo from '../../components/molecules/Lineamiento/IndicadorPorMetaGeo';

export const IndicadoresGeorreferenciados = () => {
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
    
    return (
        <>
        <section className="bg-white dark:bg-gray-900">
            {/* Header con información */}
            <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-1 lg:py-8 lg:px-6">
                <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400 text-center">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                        Indicadores Georreferenciados
                    </h2>
                    <p className="mb-4 text-justify max-w-4xl mx-auto">
                        En este apartado se presentan algunos indicadores de entorno y por lineamiento que han sido representados 
                        mediante cartografías temáticas u otros recursos visuales con elementos territoriales. 
                        Estas representaciones permiten visualizar datos relevantes a nivel comunal, 
                        regional o en comparación con otras regiones de la Macrozona Sur o el país. 
                        Cada visualización se encuentra disponible en formato PDF para su descarga.
                    </p>
                </div>
            </div>

            {/* Fila con los 3 selects principales */}
            <div className="gap-6 items-start py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-3 lg:py-2 lg:px-6">
                <div className="space-y-4">
                    <SelectLineamiento onChange={handleLineamientoChange} />
                </div>
                
                <div className="space-y-4">
                    <ObjetivoPorLineamiento lineamientoId={selectedLineamiento} onChange={handleObjetivoChange} />
                    <MetasPorObjetivo objetivoId={selectedObjetivo} onChange={handleMetaChange} />
                </div>
                
                <div className="space-y-4">
                    <IndicadorPorMetaGeo metaId={selectedMeta} onChange={setSelectedIndicador} />
                </div>
            </div>
            
            {/* Segunda fila con MetasPorObjetivo centrado */}
            <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:flex lg:justify-center lg:py-16 lg:px-6">
                <div className="max-w-md">
                </div>
            </div>
        </section>
        </>
    )
}

export default IndicadoresGeorreferenciados;