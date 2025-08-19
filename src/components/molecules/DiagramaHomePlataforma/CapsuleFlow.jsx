import React from 'react';
import '../../../assets/css/CapsuleFlow.css';

const CapsuleFlow = () => {
  const steps = [
    { text: 'Lineamientos Estratégicos', tooltip: 'Son orientaciones generales que recogen los consensos construidos en procesos participativos, y que expresan los grandes rumbos que debe seguir la política pública para alcanzar la visión regional de desarrollo productivo' },
    { text: 'Objetivos Estratégicos', tooltip: 'Son propósitos concretos de mediano plazo que desarrollan cada lineamiento estratégico. Expresan los resultados que se esperan alcanzar al 2026 y sirven como base para definir metas e indicadores de avance' },
    { text: 'Metas', tooltip: 'Son compromisos cuantificables que operacionalizan los objetivos estratégicos. Permiten traducir cada objetivo en acciones medibles, con plazos definidos, facilitando el seguimiento y la gestión por resultados' },
    { text: 'Indicadores', tooltip: 'Son herramientas de medición que permiten evaluar el nivel de avance en el cumplimiento de metas y objetivos. Se expresan como relaciones numéricas que comparan datos significativos en el tiempo o entre unidades territoriales' },
  ];

  return (
    <div className="capsule-flow-container">
      {steps.map((step, index) => (
        <React.Fragment key={index}>
          <div className="capsule-wrapper">
            <div className="capsule" data-tooltip={step.tooltip}>
              {step.text}
            </div>
          </div>
          {index < steps.length - 1 && (
            <div className="arrow">→</div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default CapsuleFlow;