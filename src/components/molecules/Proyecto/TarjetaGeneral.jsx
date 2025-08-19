const chapters = [
  {
    title: "Herramienta de gestión y visualización de datos",
    color: "#6a97c0",
    description:
      "Observa Los Ríos es una plataforma que se distingue por su capacidad para facilitar la gestión y visualización de datos territoriales regionales y compararlos a diferentes niveles subnacionales y nacional. Esto permite a los actores regionales acceder a una comprensión más profunda y accesible del territorio, facilitando datos para la toma de decisiones informada.",
  },
  {
    title: "Modelo replicable y escalable",
    color: "#f4da5b",
    description:
      "Observa Los Ríos ha sido diseñada para ser adaptable a diferentes contextos regionales, buscando ser un ejemplo para el resto de regiones. Su carácter replicable y escalable le permite ajustarse a las dinámicas cambiantes del entorno, ampliando su impacto a otras regiones que enfrentan desafíos similares en términos de desarrollo territorial y fomento productivo.",
  },
  {
    title: "Involucramiento ciudadano y transparencia",
    color: "#54913c",
    description:
      "Uno de los pilares de Observa Los Ríos es la democratización de la información. Al hacer que los datos territoriales sean accesibles para todos, la plataforma promueve el involucramiento de la ciudadanía en asuntos regionales y la transparencia en la toma de decisiones.",
  },
  {
    title: "Catalizador de la colaboración multisectorial, multinivel y multiactoral",
    color: "#6a97c0",
    description:
      "Observa Los Ríos actúa como un puente, el cual busca conectar a diferentes actores del ecosistema regional, incluyendo gobiernos locales, empresas, universidades y la sociedad civil. Esta colaboración multisectorial, multinivel y multiactoral es clave para abordar de manera integral y efectiva los desafíos territoriales, promoviendo un desarrollo más equitativo y sostenible en la Región de Los Ríos.",
  },
];

export default function TarjetaGeneral() {
  return (
    <div className="grid gap-6 mt-8">
      {chapters.map((ch, index) => (
        <div
          key={index}
          className="bg-slate-900 p-6 rounded-xl shadow hover:shadow-lg transition"
          // style={{ backgroundColor: 'rgba(15, 23, 42, 0.9)' }}
        >
          <h3 className="font-bold text-lg mb-2 text-shadow-lg" style={{ color: ch.color }}>{ch.title}</h3>
          <p className="text-sm text-gray-300">{ch.description}</p>
        </div>
      ))}
    </div>
  );
}
