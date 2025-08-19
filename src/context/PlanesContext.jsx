import React, { createContext, useContext, useState } from 'react';
import { fetchPlanes, fetchIniciativasCompFinan } from '../utils/api';

const PlanesContext = createContext();

export const usePlanes = () => {
    const context = useContext(PlanesContext);
    if (!context) {
        throw new Error('usePlanes must be used within a PlanesProvider');
    }
    return context;
};

export const PlanesProvider = ({ children }) => {
    const [planesCache, setPlanesCache] = useState({});
    const [iniciativasCache, setIniciativasCache] = useState({});

    const getPlanData = async (planId) => {
        if (planesCache[planId]) {
            return planesCache[planId];
        }

        try {
            const data = await fetchPlanes(planId);
            setPlanesCache(prev => ({ ...prev, [planId]: data }));
            return data;
        } catch (error) {
            console.error('Error fetching plan:', error);
            throw error;
        }
    };

    const getIniciativasData = async (planId) => {
        if (iniciativasCache[planId]) {
            return iniciativasCache[planId];
        }

        try {
            const data = await fetchIniciativasCompFinan(planId);
            setIniciativasCache(prev => ({ ...prev, [planId]: data }));
            return data;
        } catch (error) {
            console.error('Error fetching iniciativas:', error);
            throw error;
        }
    };

    return (
        <PlanesContext.Provider value={{
            getPlanData,
            getIniciativasData,
            planesCache,
            iniciativasCache
        }}>
            {children}
        </PlanesContext.Provider>
    );
};