import React, { useState, useEffect } from 'react'
import { fetchGobernanza } from "../../../utils/api";
import TituloPolitica from "@/components/atoms/Proyecto/TituloPolitica";
import TextoPolitica from "@/components/atoms/Proyecto/TextoPolitica";

export const SesionesGobernanza = () => {
    const [gobernanzaData, setGobernanzaData] = useState(null);

    useEffect(() => {
        const getGobernanzaData = async () => {
            try {
                const data = await fetchGobernanza();
                setGobernanzaData(data);
            } catch (error) {
                console.error(error);
            }
        };

        getGobernanzaData();
    }, []);

    return (
        <>
            <div className="flex">
                <main className="flex-1">
                    <section className="bg-white">
                        <div className="gap-8 items-center py-2 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-1 lg:py-8 lg:px-6">
                            <TituloPolitica centered>Sesiones de Gobernanza</TituloPolitica>
                            <TextoPolitica>
                                El seguimiento de la Política Regional de Fomento Productivo, Emprendimiento e
Innovación considera instancias de gobernanza que permiten articular la participación de
actores públicos, privados, académicos y sociales en la toma de decisiones. Estas sesiones,
promovidas en el marco del Comité Estratégico de Desarrollo Económico Sostenible (DES-
ERD) y su Secretaría Técnica Ampliada, buscan validar instrumentos, priorizar inversiones
y fortalecer la coordinación regional en torno a los planes de inversión sectoriales.
                            </TextoPolitica>
                        </div>
                        <div>
                            {gobernanzaData ? (
                                <div className="overflow-hidden bg-white dark:bg-gray-800 shadow-lg rounded-xl border border-gray-200 dark:border-gray-700">
                                    <table className="min-w-full">
                                        <thead className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20">
                                            <tr>
                                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-600">
                                                    Tipo de Actividad
                                                </th>
                                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-600">
                                                    Fecha
                                                </th>
                                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-600">
                                                    Lugar
                                                </th>
                                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-600">
                                                    Descripción
                                                </th>
                                                <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-600">
                                                    Documento
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {gobernanzaData.map((session, index) => (
                                                <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors border-b border-gray-200 dark:border-gray-600 last:border-b-0">
                                                    <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300 font-medium">
                                                        {session.tipo_actividad || session.tipo || 'No especificado'}
                                                    </td>
                                                    <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">
                                                        {new Date(session.fecha).toLocaleDateString('es-CL', {
                                                            year: 'numeric',
                                                            month: 'long',
                                                            day: 'numeric'
                                                        })}
                                                    </td>
                                                    <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">
                                                        {session.lugar || 'No especificado'}
                                                    </td>
                                                    <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300 align-middle">
                                                        <div className="flex items-center h-full">
                                                            <p className="w-full text-justify m-0">
                                                                {session.descripcion || 'Sin descripción'}
                                                            </p>
                                                        </div>
                                                    </td>
                                                    <td className="px-6 py-4 text-center">
                                                        {session.url ? (
                                                            <a
                                                                href={session.url}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 rounded-lg hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 transition-all duration-200"
                                                            >
                                                                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                                                </svg>
                                                                Descargar
                                                            </a>
                                                        ) : (
                                                            <span className="text-sm text-gray-400 dark:text-gray-500 italic">
                                                                No disponible
                                                            </span>
                                                        )}
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            ) : (
                                <div className="flex justify-center items-center py-12">
                                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mr-3"></div>
                                    <span className="text-gray-600 dark:text-gray-300">Cargando sesiones de gobernanza...</span>
                                </div>
                            )}
                        </div>
                    </section>
                </main>
            </div>
        </>
    )
}
export default SesionesGobernanza;