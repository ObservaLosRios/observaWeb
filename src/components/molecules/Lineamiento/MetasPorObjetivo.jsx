import React, { useEffect, useState } from 'react';
import { fetchMetasPorObjetivo } from '../../../utils/api';

function MetasPorObjetivo({ objetivoId, onChange }) {
    const [metas, setMetas] = useState([]);
    const [descripcion, setDescripcion] = useState('');

    useEffect(() => {
        if (objetivoId) {
            fetchMetasPorObjetivo(objetivoId)
                .then(data => {
                    setMetas(data);
                    // Automáticamente selecciona la primera meta y llama onChange
                    if (data && data.length > 0) {
                        setDescripcion(data[0].descripcion || 'Sin descripción disponible.');
                        if (onChange) onChange(data[0].id);
                    } else {
                        setDescripcion('Sin descripción disponible.');
                        if (onChange) onChange('');
                    }
                })
                .catch(() => {
                    setMetas([]);
                    setDescripcion('Sin descripción disponible.');
                    if (onChange) onChange('');
                });
        } else {
            setMetas([]);
            setDescripcion('');
            if (onChange) onChange('');
        }
    }, [objetivoId]);

    if (!objetivoId) return null;

    return (
        <>
        <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            <h3 className="mb-4 tracking-tight font-extrabold text-gray-900 dark:text-white">Meta</h3>
            <p className="mt-2 text-gray-700 dark:text-gray-200 text-justify">
                {descripcion}
            </p>
        </div>
        </>
    );
}

export default MetasPorObjetivo;