import TituloPolitica from "@/components/atoms/Proyecto/TituloPolitica";
import GaleriaGobernanza from "@/components/molecules/Proyecto/GaleriaGobernanza";
import TarjetaGobernanza from "@/components/molecules/Proyecto/TarjetaGobernanza";
import TextoPolitica from "@/components/atoms/Proyecto/TextoPolitica";
import Gobernanza from '@/assets/img/Gobernanza.png';
import NarradorAvanzado from "@/components/atoms/NarradorAvanzado";
import SesionesGobernanza from "@/components/molecules/Proyecto/SesionesGobernanza";

export default function GobernanzaPagina() {
  const texto = `La Región de Los Ríos avanza en la consolidación de un modelo de gobernanza territorial robusto, participativo y orientado a la implementación efectiva de la Estrategia Regional de Desarrollo 2037. A través del Comité Estratégico de Desarrollo Económico Sostenible, se establece un espacio de coordinación multinivel y multiactoral que integra al Gobierno Regional, servicios públicos, gremios, academia, pueblos originarios y representantes del sector privado. Este modelo se rige por principios de transparencia, participación incidente, articulación institucional y seguimiento permanente, asegurando la coherencia entre las políticas regionales y las demandas del territorio en materia de fomento productivo, emprendimiento e innovación.
  Como unidad técnica de apoyo, la plataforma Observa Los Ríos cumple un rol estratégico en el monitoreo, evaluación y sistematización de información clave para la toma de decisiones informadas. Su operatividad permite dar seguimiento a metas, iniciativas y planes regionales mediante reportes periódicos, espacios deliberativos y herramientas de análisis contextualizado. Este enfoque técnico y territorial promueve una gobernanza inclusiva, con representación equilibrada de actores y un compromiso sostenido con el desarrollo económico sostenible de la región, incorporando enfoques de equidad territorial, interculturalidad, perspectiva de género y participación ciudadana activa.
  Actualmente se están realizando ajustes al modelo de gobernanza regional con el fin de fortalecer la articulación y la efectividad de la gestión pública. Este proceso se basa en tres pilares principales: espacios inclusivos, actores con presencia territorial y vínculos con las comunidades, y una gestión regional colaborativa, transparente y con pertinencia local.`;
  return (
    <section className="bg-white text-slate-900 py-16 px-6 md:px-20 space-y-20 pb-0">
      <TituloPolitica centered>Gobernanza</TituloPolitica>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start mb-8">
        <TextoPolitica className="md:col-span-1">
          <>
            <p>
              La Región de Los Ríos avanza en la consolidación de un modelo de
              <b> gobernanza territorial</b> robusto, participativo y orientado a la
              implementación efectiva de la Estrategia Regional de Desarrollo 2037.
            </p>
            <p>
              A través del Comité Estratégico de Desarrollo Económico Sostenible,
              se establece un espacio de coordinación multinivel y multiactoral que
              integra al Gobierno Regional, servicios públicos, gremios, academia,
              pueblos originarios y representantes del sector privado. Este modelo
              se rige por principios de transparencia, participación incidente,
              articulación institucional y seguimiento permanente, asegurando la
              coherencia entre las políticas regionales y las demandas del
              territorio en materia de fomento productivo, emprendimiento e
              innovación.
            </p>
          </>
        </TextoPolitica>

        {/* Imagen: en mobile va primero (order‑1), en desktop ocupa la 3ª columna */}
        <div className="flex flex-col items-center md:col-span-2">
          <img
            src={Gobernanza}
            alt="Modelo de gobernanza"
            className="w-full md:w-[90%] rounded-lg object-contain"
          />
          {/* <p className="text-sm text-gray-400 mt-2 text-center italic">
            Modelo de gobernanza otorgado por la PRF
          </p> */}
        </div>
      </div>
      <TextoPolitica className="md:col-span-1">
          <>
            <p>
              Como unidad técnica de apoyo, la plataforma Observa Los Ríos cumple un
              rol estratégico en el monitoreo, evaluación y sistematización de
              información clave para la toma de decisiones informadas.
            </p>
            <p>
              Su operatividad permite dar seguimiento a metas, iniciativas y planes
              regionales mediante reportes periódicos, espacios deliberativos y
              herramientas de análisis contextualizado. Este enfoque técnico y
              territorial promueve una gobernanza inclusiva, con representación
              equilibrada de actores y un compromiso sostenido con el desarrollo
              económico sostenible de la región, incorporando enfoques de equidad
              territorial, interculturalidad, perspectiva de género y participación
              ciudadana activa.
            </p>
          </>
        </TextoPolitica>
      <TituloPolitica centered>Fortaleciendo la gobernanza regional</TituloPolitica>
      <TextoPolitica style={{ marginBottom: '30px' }}>
        Actualmente se están realizando <b>ajustes al modelo de gobernanza regional</b> con el fin de fortalecer la articulación y la efectividad de la gestión pública. Este proceso se basa en tres pilares principales:
      </TextoPolitica>
      <TarjetaGobernanza />
      <GaleriaGobernanza />
      <TextoPolitica>
        Este enfoque reconoce que una <b>gobernanza efectiva</b> requiere espacios inclusivos, donde los actores con <b>presencia territorial y vínculos con las comunidades</b> participen activamente en la toma de decisiones. Así, se busca consolidar una gestión regional colaborativa, transparente y con pertinencia local.
      </TextoPolitica>
      <SesionesGobernanza />
      <NarradorAvanzado texto={texto} autoLeer={false} />
    </section>
  );
};