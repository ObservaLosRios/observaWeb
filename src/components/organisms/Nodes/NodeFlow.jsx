import React, { useState } from 'react';
import { ReactFlow, Handle, Position, MarkerType } from '@xyflow/react';
import '@xyflow/react/dist/style.css';

// Componente de nodo personalizado
const CustomNode = ({ data }) => {
    return (
        <div className="px-6 py-6 shadow-lg rounded-lg bg-white border-2 border-blue-200 min-w-[200px] min-h-[80px] flex items-center justify-center relative"
        >
            <Handle 
                type="target" 
                position={Position.Left} 
                className="w-3 h-3 !bg-blue-500" 
            />
            
            <div className="text-center max-w-[160px]">
                <strong 
                    className="text-lg text-gray-800 leading-tight block"
                >
                    {data.label}
                </strong>
            </div>
            
            <Handle 
                type="source" 
                position={Position.Right} 
                className="w-3 h-3 !bg-blue-500" 
            />
        </div>
  );
};

// Tipos de nodos personalizados
const nodeTypes = {
  customNode: CustomNode,
};

const initialNodes = [
    { 
        id: '1', 
        position: { x: 50, y: 100 }, 
        data: { 
            label: 'Lineamientos Estratégicos',
            tooltip: 'Son orientaciones generales que recogen los consensos construidos en procesos participativos, y que expresan los grandes rumbos que debe seguir la política pública para alcanzar la visión regional de desarrollo productivo.'
        }, 
        type: 'customNode',
        draggable: false
    },
    { 
        id: '2', 
        position: { x: 300, y: 100 }, 
        data: { 
            label: 'Objetivos Estratégicos',
            tooltip: 'Son propósitos concretos de mediano plazo que desarrollan cada lineamiento estratégico. Expresan los resultados que se esperan alcanzar al 2026 y sirven como base para definir metas e indicadores de avance.'
        },  
        type: 'customNode',
        draggable: false
    },
    { 
        id: '3', 
        position: { x: 550, y: 108 }, 
        data: { 
            label: 'Metas',
            tooltip: 'Son compromisos cuantificables que operacionalizan los objetivos estratégicos. Permiten traducir cada objetivo en acciones medibles, con plazos definidos, facilitando el seguimiento y la gestión por resultados.'
        },
        type: 'customNode',
        draggable: false
    },
    { 
        id: '4', 
        position: { x: 800, y: 108 }, 
        data: { 
            label: 'Indicadores',
            tooltip: 'Son herramientas de medición que permiten evaluar el nivel de avance en el cumplimiento de metas y objetivos. Se expresan como relaciones numéricas que comparan datos significativos en el tiempo o entre unidades territoriales.'
        },
        type: 'customNode',
        draggable: false
    },
];

const initialEdges = [
    { 
        id: 'e1-2', 
        source: '1', 
        target: '2', 
        type: 'smoothstep',
        markerEnd: {
        type: MarkerType.ArrowClosed,
        width: 20,
        height: 20,
        color: '#3b82f6',
        },
        style: {
        strokeWidth: 2,
        stroke: '#3b82f6',
        },
    },
    { 
        id: 'e2-3', 
        source: '2', 
        target: '3', 
        type: 'smoothstep',
        markerEnd: {
        type: MarkerType.ArrowClosed,
        width: 20,
        height: 20,
        color: '#3b82f6',
        },
        style: {
        strokeWidth: 2,
        stroke: '#3b82f6',
        },
    },
    { 
        id: 'e3-4', 
        source: '3', 
        target: '4', 
        type: 'smoothstep',
        markerEnd: {
        type: MarkerType.ArrowClosed,
        width: 20,
        height: 20,
        color: '#3b82f6',
        },
        style: {
        strokeWidth: 2,
        stroke: '#3b82f6',
        },
    },
];

const NodeFlow = () => {
  return (
    <div style={{ height: '300px', width: '100%' }}>
      <ReactFlow 
        nodes={initialNodes} 
        edges={initialEdges}
        nodeTypes={nodeTypes}
        nodesDraggable={false}
        nodesConnectable={false}
        elementsSelectable={false}
        panOnDrag={false}
        zoomOnScroll={false}
        zoomOnPinch={false}
        panOnScroll={false}
        preventScrolling={true}
        defaultViewport={{ x: 0, y: 0, zoom: 1 }}
        fitView
        minZoom={1}
        maxZoom={1}
      />
    </div>
  );
};

export default NodeFlow;