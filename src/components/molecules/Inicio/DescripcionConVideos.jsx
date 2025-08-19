export default function DescripcionConVideos() {
  // const texto = `Observa Los Ríos, es la plataforma que apoya el proceso de seguimiento de la Política Regional de Fomento Productivo, Emprendimiento e Innovación de la Región de Los Ríos, estableciéndose como un instrumento de carácter operativo que permite al Gobierno Regional, y a su equipo, tomar decisiones estratégicas a nivel subnacional. Así, el proyecto se enfoca en el seguimiento a la implementación de la Política y evalúa la ejecución de la misma, proponiendo mejoras al sistema y articulando actores a nivel regional.`;
  return (
    <div className="text-slate-900 bg-white dark:bg-slate-900 dark:text-white py-12 px-6 md:px-20 grid md:grid-cols-2 gap-8 items-start">
      <div>
        <h2 className="text-2xl font-bold mb-4">Observa Los Ríos</h2>
        <p className="text-lg mb-4">
          Observa Los Ríos, es la plataforma que apoya el proceso de seguimiento de la Política Regional de Fomento Productivo, Emprendimiento e Innovación de la Región de Los Ríos, estableciéndose como un instrumento de carácter operativo que permite al Gobierno Regional, y a su equipo, tomar decisiones estratégicas a nivel subnacional. 
        </p>
        <p className="text-lg mb-4">
          Así, el proyecto se enfoca en el seguimiento a la implementación de la Política y evalúa la ejecución de la misma, proponiendo mejoras al sistema y articulando actores a nivel regional.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 min-h-[270px]">
        <iframe className="w-full aspect-video"
                src="https://www.youtube.com/embed/tpv_yUlBBbA?si=TXr47BNi1GeIBNUM" 
                title="Sobre el proyecto Observa Los Ríos" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <iframe className="w-full aspect-video place-self-end" 
                src="https://www.youtube.com/embed/ibXTd27WIbU?si=nlUQuM8gBPCv0fkY" 
                title="Entrevistas" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
    </div>
  );
}
