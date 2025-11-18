import React from 'react'
import { useState, useEffect } from 'react'
import { fetchInnovacionPublica } from "../../utils/api";

export const Innovacion = () => {
    const [innovacionData, setInnovacionData] = useState(null);
    
    useEffect(() => {
        const getInnovacionData = async () => {
            try {
                const data = await fetchInnovacionPublica();
                setInnovacionData(data);
            } catch (error) {
                console.error(error);
            }
        };

        getInnovacionData();
    }, []);


    return (
        <section id="metodologia" className="bg-white dark:bg-gray-900">
            <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Innovación Pública</h2>
                    <p className="mb-4">
                        Agregar texto sobre Innovación Pública.
                    </p>
                </div>
            </div>
            <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-4 mb-12">
                {innovacionData ? (
                    innovacionData.map((item, index) => (
                        <div key={index} className="h-72">
                            <a 
                                href={item.url} 
                                target='_blank' 
                                rel="noopener noreferrer"
                                className="block h-full p-4 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 flex flex-col transition-colors duration-200"
                                >
                                <h3 className="mb-3 text-base font-bold tracking-tight text-gray-900 dark:text-white line-clamp-2">
                                    {item.nombre}
                                </h3>
                                <p className="font-normal text-gray-700 dark:text-gray-400 text-sm leading-relaxed line-clamp-6 flex-1 text-justify">
                                    {item.descripcion}
                                </p>
                            </a>
                        </div>
                ))
                ) : (
                    <p>No existen datos cargados de innovación pública</p>
                )}
            </div>
                </div>
        </section>
    )
}
export default Innovacion;