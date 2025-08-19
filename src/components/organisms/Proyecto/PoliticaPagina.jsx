import TituloPolitica from "@/components/atoms/Proyecto/TituloPolitica";
import TextoPolitica from "@/components/atoms/Proyecto/TextoPolitica";
import BotonDescarga from "@/components/atoms/BotonDescarga";
import TarjetaPolitica from "@/components/molecules/Proyecto/TarjetaPolitica";
import imagenFinal from '@/assets/img/EsquemaPolitica.png';
import PoliticaFoto from '@/assets/img/PoliticaFoto.png';
import PoliticaPDF from '@/assets/LibroPolitica.pdf';
import { Package, BarChart, Calendar, Users } from "lucide-react";
import NarradorAvanzado from "@/components/atoms/NarradorAvanzado";

export default function PoliticaPagina() {
  const texto = `¿Cómo se construyó la política de fomento productivo, emprendimiento e innovación?
                La Política Regional de Fomento Productivo, Emprendimiento e Innovación de la Región de Los Ríos fue diseñada como un instrumento 
                clave para orientar el desarrollo económico y territorial del territorio, con visión de mediano plazo y una fuerte base participativa. 
                Forma parte del Sistema de Planificación del Gobierno Regional y se enmarca en la Estrategia Regional de Desarrollo (ERD), que articula 
                las prioridades del territorio con la colaboración de actores públicos, privados, académicos y ciudadanos.
                
                Este proceso fue liderado por el Gobierno Regional, a través de sus Divisiones de Planificación y Fomento, y desarrollado técnicamente 
                por la Universidad Austral de Chile entre los meses de diciembre de 2019 y agosto de 2021. 
                
                Este ha sido un proceso colaborativo en cuatro etapas:
                1. Organización: Se identificaron oportunidades y brechas a partir del análisis de datos y talleres con expertos, actores clave del desarrollo productivo y estudios sobre la estructura económica regional.
                2. Análisis: Se elaboraron propuestas preliminares de orientaciones estratégicas y se identificaron vocaciones productivas comunales. Además, se creó una instancia de colaboración público-privada: la Gobernanza de la Política de Fomento, que incorporó criterios territoriales, gremiales y de género.
                3. Planificación: Se validaron propuestas a través de talleres, encuestas y espacios de diálogo, y se diseñó una hoja de ruta con un modelo de gestión y una plataforma digital para monitorear la implementación.
                4. Transferencia: Se entregaron herramientas y capacidades al Gobierno Regional para implementar la política de forma efectiva.
                
                Pese a las restricciones por la pandemia, más del 80% de las actividades participativas se realizaron en modalidad virtual, 
                complementadas con instancias presenciales al inicio del proceso. En total, más de 500 personas participaron en talleres, 
                webinars, reuniones sectoriales y encuestas, permitiendo un proceso de retroalimentación amplio y diverso.
                
                Los encuentros contaron con representación territorial amplia, abarcando comunas como La Unión, Paillaco, Lago Ranco, Futrono, 
                Panguipulli, Los Lagos, Lanco y Valdivia. La participación fue posible gracias a un trabajo de acercamiento previo en terreno, 
                que permitió construir vínculos de confianza y continuar el proceso en modalidad virtual.`;
  return (
    <section className="bg-white text-slate-900 py-16 px-6 md:px-20 space-y-20 pb-0">

      {/* Primera sección: Título, texto e imagen */}
      <div className="grid md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
        <div>
          <TituloPolitica>¿Cómo se construyó la política de fomento productivo, emprendimiento e innovación?</TituloPolitica>
          <TextoPolitica>
            <>
              <p> 
                La Política Regional de Fomento Productivo, Emprendimiento e Innovación de la Región de Los Ríos fue diseñada como un instrumento 
                clave para orientar el desarrollo económico y territorial del territorio, con visión de mediano plazo y una fuerte base participativa. 
                Forma parte del Sistema de Planificación del Gobierno Regional y se enmarca en la Estrategia Regional de Desarrollo (ERD), que articula 
                las prioridades del territorio con la colaboración de actores públicos, privados, académicos y ciudadanos.
              </p>
              <p> 
                Este proceso fue liderado por el Gobierno Regional, a través de sus Divisiones de Planificación y Fomento, y desarrollado técnicamente 
                por la Universidad Austral de Chile entre los meses de diciembre de 2019 y agosto de 2021. 
              </p>
            </>
          </TextoPolitica>
          <div className="flex justify-center">
            <BotonDescarga
              fileUrl={PoliticaPDF}  // o ruta pública o generada
              fileName="PoliticaFomento.pdf"
              label="Descargar Política de Fomento"
            />
          </div>
        </div>
        <div className="flex justify-center">
          <img src={PoliticaFoto} alt="Ilustración de plataforma" className="w-full max-w-md object-contain" />
        </div>
      </div>

      {/* Segunda sección: Título centrado y tarjetas */}
      <div className="max-w-5xl mx-auto mb-12">
        <TituloPolitica centered>Un proceso colaborativo en cuatro etapas</TituloPolitica>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <TarjetaPolitica
            icon={Users}
            title="Organización"
            text="Se identificaron oportunidades y brechas a partir del análisis de datos y talleres con expertos, actores clave del desarrollo productivo y estudios sobre la estructura económica regional."
          />
          <TarjetaPolitica
            icon={BarChart}
            title="Análisis"
            text="Se elaboraron propuestas preliminares de orientaciones estratégicas y se identificaron vocaciones productivas comunales. Además, se creó una instancia de colaboración público-privada: la Gobernanza de la Política de Fomento, que incorporó criterios territoriales, gremiales y de género."
          />
          <TarjetaPolitica
            icon={Calendar}
            title="Planificación"
            text="Se validaron propuestas a través de talleres, encuestas y espacios de diálogo, y se diseñó una hoja de ruta con un modelo de gestión y una plataforma digital para monitorear la implementación."
          />
          <TarjetaPolitica
            icon={Package}
            title="Transferencia"
            text="Se entregaron herramientas y capacidades al Gobierno Regional para implementar la política de forma efectiva."
          />
        </div>
      </div>

      {/* Tercera sección: Imagen a la izquierda y texto a la derecha */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center mx-auto mb-8">
        {/* Imagen: en mobile va después (order‑2), en desktop ocupa las dos primeras columnas */}
        <div className="flex justify-center order-2 md:order-1 md:col-span-2">
          <img
            src={imagenFinal}
            alt="Visual final"
            className="w-[90%] object-contain"
          />
        </div>
        <div className="order-1 md:order-2">
          {/* <TituloPolitica>¿Por qué confiar en nosotros?</TituloPolitica> */}
          <TextoPolitica>
            <>
              <p>  
                Pese a las restricciones por la pandemia, más del 80% de las actividades participativas se realizaron en modalidad virtual, 
                complementadas con instancias presenciales al inicio del proceso. En total, más de 500 personas participaron en talleres, 
                webinars, reuniones sectoriales y encuestas, permitiendo un proceso de retroalimentación amplio y diverso.
              </p>
              <p>
                Participaron representantes de municipios, servicios públicos, gremios, empresas, organizaciones sociales, académicos y 
                ciudadanía en general, logrando integrar distintas miradas sobre el desarrollo económico regional desde lo local a lo regional.
              </p>
            </>
          </TextoPolitica>
        </div>
      </div>
      <TextoPolitica>
            <>
              <p> 
                Como parte del compromiso con el Convenio 169 de la OIT, se generó un proceso específico de participación Mapuche, 
                a través de los “Encuentros de Fomento y Economía Mapuche”. Estas instancias permitieron recoger las visiones, preocupaciones 
                y propuestas de comunidades, emprendedoras y emprendedores mapuches.
              </p>
              <p>
                Los encuentros contaron con representación territorial amplia, abarcando comunas como La Unión, Paillaco, Lago Ranco, Futrono, 
                Panguipulli, Los Lagos, Lanco y Valdivia. La participación fue posible gracias a un trabajo de acercamiento previo en terreno, 
                que permitió construir vínculos de confianza y continuar el proceso en modalidad virtual.
              </p>
            </>
          </TextoPolitica>
    <NarradorAvanzado texto={texto} autoLeer={false} />
    </section>
  );
}