import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { fetchNoticias, fetchNoticiaById } from '../utils/api';

export const Noticias = () => {
    const [noticias, setNoticias] = useState([]);
    const [filtroEtiqueta, setFiltroEtiqueta] = useState('todas');
    const [loading, setLoading] = useState(true);
    const [modalOpen, setModalOpen] = useState(false);
    const [noticiaSeleccionada, setNoticiaSeleccionada] = useState(null);
    const [loadingNoticia, setLoadingNoticia] = useState(false);

    useEffect(() => {
        loadNoticias();
    }, [filtroEtiqueta]);

    useEffect(() => {
        const handleEscape = (event) => {
            if (event.key === 'Escape' && modalOpen) {
                closeModal();
            }
        };

        if (modalOpen) {
            document.addEventListener('keydown', handleEscape);
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = 'unset';
        };
    }, [modalOpen]);

    const loadNoticias = async () => {
        try{
            const filtros = filtroEtiqueta !== 'todas' ? { etiqueta: filtroEtiqueta } : {};
            const data = await fetchNoticias(filtros);
            setNoticias(data.noticias || data);
        } catch (error) {
            console.error('Error al cargar noticias:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleOpenNoticia = async (noticiaId) => {
        setLoadingNoticia(true);
        setModalOpen(true);
        
        try {
            const noticiaCompleta = await fetchNoticiaById(noticiaId);
            setNoticiaSeleccionada(noticiaCompleta);
        } catch (error) {
            console.error('Error al cargar noticia completa:', error);
            setNoticiaSeleccionada(null);
        } finally {
            setLoadingNoticia(false);
        }
    };

    const closeModal = () => {
        setModalOpen(false);
        setNoticiaSeleccionada(null);
        setLoadingNoticia(false);
    };

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <div className="text-gray-500">Cargando noticias...</div>
            </div>
        );
    }

    return (
        <div className="flex">
            <div className="flex-1">
                <section className="bg-white dark:bg-white">
                    <div className="gap-8 items-center py-2 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-1 lg:py-6 lg:px-6">
                        <div className="mb-2<<<<<<">
                            <h1 className="mb-4 tracking-tight text-4xl font-bold text-gray-900">Noticias</h1>
                            <p className="text-gray-600 mb-6">
                                Mantente informado sobre las últimas novedades de la Política Regional de Fomento
                            </p>
                        </div>

                        {/* Grid de noticias */}
                        {noticias.length > 0 ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                                {noticias.map(noticia => (
                                    <NoticiaCard 
                                        key={noticia.id} 
                                        noticia={noticia} 
                                        onOpenNoticia={handleOpenNoticia}
                                    />
                                ))}
                            </div>
                            
                        ) : (
                            <div className="text-center py-8">
                                <div className="text-gray-500">No se encontraron noticias</div>
                            </div>
                        )}
                        
                    </div>
                </section>
            </div>

            {/* Modal de noticia completa */}
            {modalOpen && (
                <div 
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
                    onClick={closeModal}
                >
                    <div 
                        className="bg-white dark:bg-gray-800 rounded-lg shadow-lg max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Header del modal */}
                        <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
                            <div className="flex-1">
                                {noticiaSeleccionada && (
                                    <div>
                                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                                            {noticiaSeleccionada.titulo}
                                        </h2>
                                        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                                            <span>
                                                {new Date(noticiaSeleccionada.fecha_publicacion).toLocaleDateString('es-CL', {
                                                    year: 'numeric',
                                                    month: 'long',
                                                    day: 'numeric'
                                                })}
                                            </span>
                                            {noticiaSeleccionada.autor && (
                                                <>
                                                    <span className="mx-2">•</span>
                                                    <span>Por {noticiaSeleccionada.autor}</span>
                                                </>
                                            )}
                                        </div>
                                    </div>
                                )}
                            </div>
                            <button
                                onClick={closeModal}
                                className="ml-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        {/* Contenido del modal */}
                        <div className="p-6">
                            {loadingNoticia ? (
                                <div className="flex justify-center items-center py-12">
                                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                                    <span className="ml-3 text-gray-600">Cargando noticia...</span>
                                </div>
                            ) : noticiaSeleccionada ? (
                                <div className="prose prose-lg max-w-none dark:prose-invert">
                                    {/* Galería de fotos */}
                                    {noticiaSeleccionada.fotos && noticiaSeleccionada.fotos.length > 0 && (
                                        <div className="mb-6">
                                            {noticiaSeleccionada.fotos.length === 1 ? (
                                                // Foto única
                                                <div className="mb-4">
                                                    <img 
                                                        src={noticiaSeleccionada.fotos[0].url} 
                                                        alt={noticiaSeleccionada.fotos[0].alt_text || noticiaSeleccionada.titulo}
                                                        className="w-full h-auto rounded-lg shadow-md object-cover"
                                                    />
                                                    {noticiaSeleccionada.fotos[0].caption && (
                                                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 italic">
                                                            {noticiaSeleccionada.fotos[0].caption}
                                                        </p>
                                                    )}
                                                </div>
                                            ) : (
                                                // Múltiples fotos en grid
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                                    {noticiaSeleccionada.fotos
                                                        .sort((a, b) => parseInt(a.orden) - parseInt(b.orden))
                                                        .map((foto, index) => (
                                                            <div key={index} className="relative group">
                                                                <img 
                                                                    src={foto.url} 
                                                                    alt={foto.alt_text || `${noticiaSeleccionada.titulo} - Imagen ${index + 1}`}
                                                                    className="w-full h-48 md:h-64 rounded-lg shadow-md object-cover cursor-pointer hover:opacity-90 transition-opacity"
                                                                    onClick={() => openImageModal(foto)}
                                                                />
                                                                {foto.caption && (
                                                                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 italic">
                                                                        {foto.caption}
                                                                    </p>
                                                                )}
                                                                {/* Indicador de foto principal */}
                                                                {foto.es_principal && (
                                                                    <div className="absolute top-2 right-2 bg-blue-500 text-white text-xs px-2 py-1 rounded">
                                                                        Principal
                                                                    </div>
                                                                )}
                                                            </div>
                                                        ))
                                                    }
                                                </div>
                                            )}
                                        </div>
                                    )}

                                    {/* Contenido markdown */}
                                    <ReactMarkdown 
                                        remarkPlugins={[remarkGfm]}
                                        components={{
                                            // Personalizar componentes de markdown
                                            h1: ({children}) => <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">{children}</h1>,
                                            h2: ({children}) => <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3 mt-6">{children}</h2>,
                                            h3: ({children}) => <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 mt-4">{children}</h3>,
                                            p: ({children}) => <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed text-justify">{children}</p>,
                                            ul: ({children}) => <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-4 space-y-1">{children}</ul>,
                                            ol: ({children}) => <ol className="list-decimal list-inside text-gray-700 dark:text-gray-300 mb-4 space-y-1">{children}</ol>,
                                            li: ({children}) => <li className="text-gray-700 dark:text-gray-300 text-justify">{children}</li>,
                                            blockquote: ({children}) => (
                                                <blockquote className="border-l-4 border-blue-500 pl-4 my-4 italic text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-700 py-2">
                                                    {children}
                                                </blockquote>
                                            ),
                                            code: ({children}) => (
                                                <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded text-sm font-mono text-gray-800 dark:text-gray-200">
                                                    {children}
                                                </code>
                                            ),
                                            pre: ({children}) => (
                                                <pre className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg overflow-x-auto mb-4">
                                                    {children}
                                                </pre>
                                            ),
                                            a: ({children, href}) => (
                                                <a 
                                                    href={href} 
                                                    target="_blank" 
                                                    rel="noopener noreferrer"
                                                    className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 underline"
                                                >
                                                    {children}
                                                </a>
                                            ),
                                            img: ({src, alt}) => (
                                                <img 
                                                    src={src} 
                                                    alt={alt} 
                                                    className="max-w-full h-auto rounded-lg shadow-md my-4"
                                                />
                                            ),
                                        }}
                                    >
                                        {noticiaSeleccionada.contenido}
                                    </ReactMarkdown>
                                </div>
                            ) : (
                                <div className="text-center py-12">
                                    <div className="text-red-600 mb-2">Error al cargar la noticia</div>
                                    <p className="text-gray-600">No se pudo cargar el contenido completo de la noticia.</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

const NoticiaCard = ({ noticia, onOpenNoticia }) => {
    return (
        <div 
            className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden cursor-pointer"
            onClick={() => onOpenNoticia(noticia.id)}
        >
            <div className="p-6">
                <div className="flex items-center mb-2">
                    <span className="text-gray-500 text-sm ml-auto">
                        {new Date(noticia.fecha_publicacion).toLocaleDateString('es-CL')}
                    </span>
                </div>
                
                <h3 className="text-xl font-bold mb-2 line-clamp-2">
                    {noticia.titulo}
                </h3>
                
                {noticia.autor && (
                    <div className="flex items-center mb-4">
                        <span className="text-sm text-gray-700">Por {noticia.autor}</span>
                    </div>
                )}
                
                <button className="text-blue-600 hover:text-blue-800 font-medium text-sm">
                    Leer más →
                </button>
            </div>
        </div>
    );
};