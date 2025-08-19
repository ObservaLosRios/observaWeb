import React, { useRef, useEffect, useState } from 'react';
import { fetchNotebookIndicador } from '../../../utils/api'

function ModalGrafico({ isOpen, onClose, id, nombre }) {
    const modalRef = useRef(null);
    const [notebookUrl, setNotebookUrl] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        if (modalRef.current) {
            if (isOpen) {
                modalRef.current.removeAttribute('inert');
            } else {
                modalRef.current.setAttribute('inert', '');
            }
        }

         if (isOpen && id) {
            setLoading(true);
            setError(null);
            setNotebookUrl(''); // Limpiar URL anterior

            fetchNotebookIndicador(id)
                .then(data => {
                    console.log('Datos del notebook:', data);
                    if (data && data.url_notebook) {
                        setNotebookUrl(data.url_notebook);
                    } else if (data && typeof data === 'string') {
                        setNotebookUrl(data.url_notebook);
                    } else {
                        throw new Error('URL del notebook no encontrada en la respuesta');
                    }
                })
                .catch(error => {   
                    console.error('Error fetching notebook del indicador:', error);
                    setError('Error al cargar el notebook del indicador');
                })
                .finally(() => {
                    setLoading(false);
                });
        }
    }, [isOpen, id]);

  return (
    <div 
        id="extralarge-modal"
            ref={modalRef}
            className={`fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full justify-center items-center ${isOpen ? '' : 'hidden'}`}
            tabIndex={-1}
            inert={!isOpen}
    >
        <div className="relative w-full max-w-7xl max-h-full">
            <div className="relative bg-white rounded-lg shadow-sm dark:bg-gray-700">
                <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200">
                    <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                        {nombre ? nombre: "Título del gráfico"}
                    </h3>
                    <button 
                        type="button" 
                        className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="extralarge-modal"
                        onClick={onClose}
                    >
                        <svg className="w-3 h-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                        </svg>
                        <span className="sr-only">Cerrar</span>
                    </button>
                </div>
                <div className="p-4 md:p-5 space-y-4">
                    {loading && (
                        <div className="flex justify-center items-center py-8">
                            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                            <span className="ml-3 text-gray-600 dark:text-gray-300">Cargando notebook...</span>
                        </div>
                    )}
                    
                    {error && (
                        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
                            <p>{error}</p>
                        </div>
                    )}
                    
                    {notebookUrl && !loading && !error && (
                        <iframe
                            src={notebookUrl}
                            width="100%"
                            height="800"
                            title={`Notebook - ${nombre || 'Gráfico del indicador'}`}
                            style={{ border: 'none' }}
                            onLoad={() => console.log('Iframe cargado exitosamente')}
                            onError={() => setError('Error al cargar el contenido del iframe')}
                        />
                    )}
                    
                    {!notebookUrl && !loading && !error && (
                        <div className="text-center py-8 text-gray-500 dark:text-gray-400">
                            <p>No hay datos disponibles para mostrar</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    </div>
  );
}

export default ModalGrafico;
