import React, { useEffect, useState } from 'react';
import { fetchIndicadoresDeEntorno } from '../../../utils/api';

function SelectIndicador({ onChange }){
    const [indicadores, setIndicadores] = useState([]);
    const [selectedIndicador, setSelectedIndicador] = useState('');
    const [descripcion, setDescripcion] = useState('');

    useEffect(() => {
        fetchIndicadoresDeEntorno()
            .then(response => {
                if (response && response.datos && Array.isArray(response.datos)) {
                    setIndicadores(response.datos);
                } else {
                    console.error('La respuesta no tiene el formato esperado:', response);
                    setIndicadores([]);
                }
            })
            .catch(error => {
                console.error('Error al obtener indicadores:', error);
                setIndicadores([]);
            });
        setSelectedIndicador('');
        setDescripcion('');
    }, []);

    const handleChange = (e) => {
        const id = e.target.value;
        setSelectedIndicador(id);
        const seleccionado = indicadores.find(l => String(l.id) === id);
        setDescripcion(seleccionado ? seleccionado.descripcion : '');
        if (onChange) onChange(id);
    };

    return (
        <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            
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

export default SelectIndicador;