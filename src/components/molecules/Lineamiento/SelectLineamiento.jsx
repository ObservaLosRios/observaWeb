import React, { useEffect, useState } from 'react';
import { fetchLineamientos } from '../../../utils/api';

function SelectLineamiento({ onChange }){
    const [lineamientos, setLineamientos] = useState([]);
    const [selectedId, setSelectedId] = useState('');
    const [descripcion, setDescripcion] = useState('');

    useEffect(() => {
    fetchLineamientos()
        .then(data => setLineamientos(data))
        .catch(error => console.error(error));
    }, []);

    const handleChange = (e) => {
        const id = e.target.value;
        setSelectedId(id);
        const seleccionado = lineamientos.find(l => String(l.id) === id);
        setDescripcion(seleccionado ? seleccionado.descripcion : '');
        if (onChange) onChange(id);
    };

    return (
        <div className="space-y-3">
            <div>
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                    Lineamiento
                </h2>
                <select 
                    id="select-lineamiento"
                    value={selectedId} 
                    onChange={handleChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                    <option value="">Seleccione un lineamiento</option>
                    {lineamientos.map(linea => (
                        <option key={linea.id} value={linea.id}>
                            {linea.nombre}
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

export default SelectLineamiento;