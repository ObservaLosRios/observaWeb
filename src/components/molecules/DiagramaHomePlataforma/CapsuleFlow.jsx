
import React from 'react';

const CapsuleFlow = () => {
  const steps = [
    { text: 'Lineamientos Estratégicos', tooltip: 'Son orientaciones generales que recogen los consensos construidos en procesos participativos, y que expresan los grandes rumbos que debe seguir la política pública para alcanzar la visión regional de desarrollo productivo' },
    { text: 'Objetivos Estratégicos', tooltip: 'Son propósitos concretos de mediano plazo que desarrollan cada lineamiento estratégico. Expresan los resultados que se esperan alcanzar al 2026 y sirven como base para definir metas e indicadores de avance' },
    { text: 'Metas', tooltip: 'Son compromisos cuantificables que operacionalizan los objetivos estratégicos. Permiten traducir cada objetivo en acciones medibles, con plazos definidos, facilitando el seguimiento y la gestión por resultados' },
    { text: 'Indicadores', tooltip: 'Son herramientas de medición que permiten evaluar el nivel de avance en el cumplimiento de metas y objetivos. Se expresan como relaciones numéricas que comparan datos significativos en el tiempo o entre unidades territoriales' },
  ];

  return (
    <div className="flex flex-wrap justify-center items-center gap-2">
      {steps.map((step, index) => (
        <React.Fragment key={index}>
          <div className="block p-4 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 w-64 min-h-[140px] flex flex-col justify-center items-center">
            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
              {step.text}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400 text-justify text-sm">
              {step.tooltip}
            </p>
          </div>
          {index < steps.length - 1 && (
            <div className="flex items-center mx-2">
              <span className="text-3xl text-gray-500 dark:text-gray-400">→</span>
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default CapsuleFlow;