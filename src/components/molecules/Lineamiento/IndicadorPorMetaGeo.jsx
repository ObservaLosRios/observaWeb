import React, { useEffect, useState } from 'react';
import { fetchIndicadoresGeorreferenciados } from '../../../utils/api'; // Nuevo endpoint

function IndicadorPorMetaGeo({ metaId, onChange }) {
    const [indicadores, setIndicadores] = useState([]);
    const [selectedIndicador, setSelectedIndicador] = useState('');
    const [indicadorSeleccionado, setIndicadorSeleccionado] = useState(null);

    useEffect(() => {
        if (metaId) {
            fetchIndicadoresGeorreferenciados(metaId)
                .then(data => {
                    setIndicadores(data || []);
                })
                .catch(error => {
                    console.error('Error al cargar indicadores georreferenciados:', error);
                    setIndicadores([]);
                });
        } else {
            setIndicadores([]);
            setSelectedIndicador('');
            setIndicadorSeleccionado(null);
        }
    }, [metaId]);

    const handleChange = (e) => {
        const indicadorId = e.target.value;
        setSelectedIndicador(indicadorId);
        
        if (indicadorId) {
            const indicador = indicadores.find(ind => ind.id.toString() === indicadorId);
            setIndicadorSeleccionado(indicador);
        } else {
            setIndicadorSeleccionado(null);
        }
        
        onChange(indicadorId);
    };

    return (
        <div className="space-y-3">
            <div>
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                    Indicador
                </h2>
                <select 
                    id="select-indicador-geo"
                    value={selectedIndicador} 
                    onChange={handleChange}
                    disabled={!metaId}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 disabled:opacity-50"
                >
                    <option value="">Selecciona un indicador georreferenciado</option>
                    {indicadores.map(indicador => (
                        <option key={indicador.id} value={indicador.id}>
                            {indicador.nombre}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}

export default IndicadorPorMetaGeo;