const apiUrl = import.meta.env.VITE_API_URL;

export async function fetchLineamientos() {
    const response = await fetch(apiUrl+'/indicadores/lineamientos');
    if (!response.ok) {
        throw new Error('Error fetching lineamientos');
    }
    return response.json();
}

export async function fetchMetasPorObjetivo(objetivoId){
    const response = await fetch(apiUrl+ '/indicadores/objetivos/' + objetivoId);
    if (!response.ok) {
        throw new Error('Error fetching metas');
    }
    return response.json();
}

export async function fetchIndicadoresPorMeta(metaId) {
    const response = await fetch(apiUrl+ '/indicadores/lineamientos/metas/' + metaId);
    if (!response.ok) {
        throw new Error('Error fetching indicadores');
    }
    return response.json();
}

export async function fetchIndicadoresGeorreferenciados(metaId) {
    const response = await fetch(apiUrl+ '/indicadores/lineamientos/metas/georreferenciado/' + metaId);
    if (!response.ok) {
        throw new Error('Error fetching indicadores');
    }
    return response.json();
}

export async function fetchDatosIndicador(indicadorId) {
    const response = await fetch(apiUrl+ '/indicadores/datos/' + indicadorId);
    if (!response.ok) {
        throw new Error('Error fetching datos del indicador');
    }
    return response.json();
}

export async function fetchObjetivosPorLineamiento(lineamientoId) {
    const response = await fetch(apiUrl+ '/indicadores/lineamientos/objetivos/' + lineamientoId);
    if (!response.ok) {
        throw new Error('Error fetching objetivos');
    }
    return response.json();
}

export async function fetchIndicadoresDeEntorno(){
    const response = await fetch(apiUrl+ '/indicadores/entorno');
    if (!response.ok) {
        throw new Error('Error fetching indicadores de entorno');
    }
    return response.json();
}

export async function fetchPlanes(id){
    const response = await fetch(apiUrl+ '/indicadores/planes/' + id);
    if (!response.ok) {
        throw new Error('Error fetching planes');
    }
    return response.json();
}

export async function fetchIniciativasCompFinan(planId){
    const response = await fetch(apiUrl+ '/iniciativas/iniciativa_compfin/' + planId);
    if (!response.ok) {
        throw new Error('Error fetching iniciativas de financiamiento');
    }
    const data = await response.json();
    return data;
}

export async function fetchIniciativasHistoricas(planId){
    const response = await fetch(apiUrl+ '/iniciativas/iniciativa_historica/' + planId);
    if (!response.ok) {
        throw new Error('Error fetching iniciativas históricas');
    }
    const data = await response.json();
    return data;
}

export async function fetchIniciativasPriorizadas(planId){
    const response = await fetch(apiUrl+ '/iniciativas/iniciativa_prio/' + planId);
    if (!response.ok) {
        throw new Error('Error fetching iniciativas priorizadas');
    }
    const data = await response.json();
    return data;
}

export async function fetchNoticias(filtros = {}) {
    const params = new URLSearchParams(filtros);
    const response = await fetch(`${apiUrl}/noticias?${params}`);
    if (!response.ok) {
        throw new Error('Error fetching noticias');
    }
    return response.json();
}

export async function fetchEtiquetas() {
    const response = await fetch(`${apiUrl}/noticias/etiquetas`);
    if (!response.ok) {
        throw new Error('Error fetching etiquetas');
    }
    return response.json();
}


export async function fetchNoticiaById(id) {
    const response = await fetch(`${apiUrl}/noticias/${id}`);
    if (!response.ok) {
        throw new Error('Error fetching noticia');
    }
    return response.json();
}

export async function fetchNotebookIndicador(indicadorId) {
    const response = await fetch(`${apiUrl}/indicadores/notebook/${indicadorId}`);
    if (!response.ok) {
        throw new Error('Error fetching notebook del indicador');
    }
    return response.json();
}

export async function fetchGobernanza() {
    const response = await fetch(`${apiUrl}/gobernanza`);
    if (!response.ok) {
        throw new Error('Error fetching gobernanza');
    }
    return response.json();
}
