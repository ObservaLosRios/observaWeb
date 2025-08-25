import React, { useEffect, useState } from 'react';
import { fetchObjetivosPorLineamiento } from '../../../utils/api';

function ObjetivoPorLineamiento({ lineamientoId, onChange }) {
    const [objetivos, setObjetivos] = useState([]);
    const [selectedObjetivo, setSelectedObjetivo] = useState('');
    const [descripcion, setDescripcion] = useState('');

    useEffect(() => {
        if (lineamientoId) {
            fetchObjetivosPorLineamiento(lineamientoId)
                .then(data => setObjetivos(data))
                .catch(() => setObjetivos([]));
            setSelectedObjetivo('');
            setDescripcion('');
        } else {
            setObjetivos([]);
            setSelectedObjetivo('');
            setDescripcion('');
        }
    }, [lineamientoId]);

    const handleChange = (e) => {
        const objetivoId = e.target.value;
        setSelectedObjetivo(objetivoId);
        const objetivoSeleccionado = objetivos.find(m => String(m.id) === objetivoId);
        setDescripcion(objetivoSeleccionado ? objetivoSeleccionado.descripcion : '');
        if (onChange) onChange(objetivoId);        
    }

    if (!lineamientoId) return null;

    return (
        <div className="space-y-3">
            <div>
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Objetivos Estratégicos</h2>
                <select 
                    id="select-objetivo"
                    value={selectedObjetivo} 
                    onChange={handleChange}
                    disabled={!lineamientoId}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 disabled:opacity-50"
                >
                    <option value="">Selecciona un objetivo</option>
                    {objetivos.map(objetivo => (
                        <option key={objetivo.id} value={objetivo.id}>
                            {objetivo.nombre}
                        </option>
                    ))}
                </select>
            </div>
            <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                <h3 className="mb-4 tracking-tight font-extrabold text-gray-900 dark:text-white">Descripción</h3>
                <p className="mt-2 text-gray-700 dark:text-gray-200 text-justify">
                    {descripcion ? descripcion : 'Sin descripción disponible.'}
                </p>
            </div>
        </div>
    );
}

export default ObjetivoPorLineamiento;