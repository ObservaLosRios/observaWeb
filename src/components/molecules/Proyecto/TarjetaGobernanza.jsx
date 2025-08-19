const chapters = [
  {
    title: "Estrategia y Política Regional de Desarrollo",
    color: "#6a97c0",
    description:
      "La Estrategia Regional de Desarrollo Los Ríos 2037 establece el marco guía para la planificación territorial, mientras que la Política Regional de Fomento Productivo, Emprendimiento e Innovación 2021–2026 orienta la inversión y coordinación entre actores y sectores productivos para impulsar el desarrollo regional.",
  },
  {
    title: "Nuevas herramientas sectoriales 2024",
    color: "#54913c",
    description: [
        "Planes de Inversión de la Política de Fomento en áreas estratégicas:",
        "Economía Creativa",
        "Industria Secundaria de la Madera",
        "Productos de Alto Valor Agregado",
        "Pesca y Acuicultura",
        "Alimentos con Valor Agregado"
    ]
},
  {
    title: "Planes relevantes en desarrollo",
    color: "#f4da5b",
    description: [
        "Se encuentran en desarrollo otros planes relevantes, como:",
        "Plan de Turismo",
        "Plan de Tecnologías en Salud y Calidad de Vida",
        "Plan de Economía y Fomento Mapuche",
        "Plan de Fruticultura Inteligente"
    ]
  },
];

export default function TarjetaGobernanza() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {chapters.slice(0).map((ch, index) => (
        <div
          key={index}
          className="bg-slate-900 p-6 rounded-xl shadow hover:shadow-lg transition"
        >
          <h3 className="font-bold text-lg mb-2 text-shadow-lg" style={{ color: ch.color }}>
            {ch.title}
          </h3>

          {Array.isArray(ch.description) ? (
            <>
              <p className="text-sm text-gray-300 mb-2">{ch.description[0]}</p>
              <ul className="list-disc list-inside text-sm text-gray-300 space-y-1">
                {ch.description.slice(1).map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </>
          ) : (
            <p className="text-sm text-gray-300">{ch.description}</p>
          )}
        </div>
      ))}
    </div>
  );
}
