import React, { useEffect, useState } from 'react';
import { fetchIndicadoresPorMeta } from '../../../utils/api';

function IndicadorPorMeta({ metaId, onChange }) {
    const [indicadores, setIndicadores] = useState([]);
    const [selectedIndicador, setSelectedIndicador] = useState('');
    const [descripcion, setDescripcion] = useState('');

    useEffect(() => {
        if (metaId) {
            fetchIndicadoresPorMeta(metaId)
                .then(data => setIndicadores(data))
                .catch(() => setIndicadores([]));
            setSelectedIndicador('');
            setDescripcion('');
        } else {
            setIndicadores([]);
            setSelectedIndicador('');
            setDescripcion('');
        }
    }, [metaId]);

    const handleChange = (e) => {
        const indicadorId = e.target.value;
        setSelectedIndicador(indicadorId);
        const indicadorSeleccionado = indicadores.find(i => String(i.id) === indicadorId);
        setDescripcion(indicadorSeleccionado ? indicadorSeleccionado.descripcion : '');
        if (onChange) onChange(indicadorId);
    };

    if (!metaId) return null;

    return (
        <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Indicadores</h2>
            <select
                id="select-indicador" 
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value={selectedIndicador}
                onChange={handleChange}
            >
                <option value="">Seleccione Indicador</option>
                {indicadores.map(indicador => (
                    <option key={indicador.id} value={indicador.id}>
                        {indicador.nombre}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default IndicadorPorMeta;