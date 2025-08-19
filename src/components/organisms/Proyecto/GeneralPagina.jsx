import TituloPolitica from "@/components/atoms/Proyecto/TituloPolitica";
import GaleriaImagenes from "@/components/molecules/Proyecto/GaleriaImagenes";
import TarjetaGeneral from "@/components/molecules/Proyecto/TarjetaGeneral";
import TextoPolitica from "@/components/atoms/Proyecto/TextoPolitica";
import Imagen4 from '@/assets/img/Observa4.jpg';
import NarradorAvanzado from "@/components/atoms/NarradorAvanzado";

export default function GeneralPagina() {
  const texto = `La región de Los Ríos, reconocida por su riqueza natural y cultural, enfrenta el desafío de impulsar su desarrollo económico de manera sostenible e inclusiva. En este contexto, surge Observa Los Ríos, una plataforma estratégica que se perfila como una herramienta clave para fortalecer la gestión territorial y fomentar la innovación en la región. Esta plataforma ha sido concebida no solo para apoyar las políticas y estrategias regionales, sino también para servir como un modelo adaptable y escalable que pueda ser replicado en otros territorios. A través de mecanismos avanzados de gestión y visualización de datos, Observa Los Ríos se posiciona como un pilar fundamental en la implementación, seguimiento y evaluación de las iniciativas orientadas al fomento productivo y la innovación, alineadas con las necesidades y oportunidades del territorio.
  Observa Los Ríos se presenta como una plataforma estratégica de gran relevancia para el desarrollo territorial en la Región de Los Ríos. Con su enfoque innovador en la gestión y visualización de datos, su capacidad para adaptarse y replicarse en diferentes contextos, y su impulso hacia la participación ciudadana y la colaboración multisectorial, esta herramienta se posiciona como un motor clave para el monitoreo al fomento productivo y la innovación regional. Su implementación establece un modelo a seguir para otras regiones que buscan potenciar su desarrollo de manera sostenible e inclusiva, teniendo la posibilidad de monitorear y evaluar planes e iniciativas regionales para el desarrollo regional.
  Entre los aspectos elementales de Observa Los Ríos, destacan su enfoque en la gestión territorial, su capacidad de adaptación a diferentes contextos y su impulso hacia la participación ciudadana. Estos elementos no solo fortalecen la gobernanza regional, sino que también promueven un desarrollo económico sostenible e inclusivo, alineado con las necesidades y oportunidades del territorio. `;
  return (
    <section className="bg-white text-slate-900 py-16 px-6 md:px-20 space-y-20">
      <TituloPolitica centered>Observa Los Ríos</TituloPolitica>
      <TextoPolitica>
        <>
          <p>
            La Región de Los Ríos, reconocida por su riqueza natural y cultural, enfrenta el desafío de impulsar
            su desarrollo económico de manera sostenible e inclusiva.
          </p>
          <p>
            En este contexto, surge Observa Los Ríos, una plataforma estratégica que se perfila como una
            herramienta clave para fortalecer la gestión territorial y fomentar la innovación en la región.
          </p>
          <p>
            Esta plataforma ha sido concebida no solo para apoyar las políticas y estrategias regionales, sino
            también para servir como un modelo adaptable y escalable que pueda ser replicado en otros
            territorios.
          </p>
          <p>
            A través de mecanismos avanzados de gestión y visualización de datos, Observa Los Ríos se
            posiciona como un pilar fundamental en la implementación, seguimiento y evaluación de las
            iniciativas orientadas al fomento productivo y la innovación, alineadas con las necesidades y
            oportunidades del territorio.
          </p>
        </>
      </TextoPolitica>
      <GaleriaImagenes />
      <TituloPolitica centered>Aspectos elementales de Observa Los Ríos</TituloPolitica>
      <TarjetaGeneral />
      <img src={Imagen4} alt="Logo" className="w-full shadow-lg" />
      <TextoPolitica>
        <><p>      Observa Los Ríos se presenta como una plataforma estratégica de gran relevancia para el
        desarrollo territorial en la Región de Los Ríos. Con su enfoque innovador en la gestión y
        visualización de datos, su capacidad para adaptarse y replicarse en diferentes contextos, y su
        impulso hacia la participación ciudadana y la colaboración multisectorial, esta herramienta se
        posiciona como un motor clave para el monitoreo al fomento productivo y la innovación
        regional. Su implementación establece un modelo a seguir para otras regiones que buscan
        potenciar su desarrollo de manera sostenible e inclusiva, teniendo la posibilidad de monitorear
        y evaluar planes e iniciativas regionales para el desarrollo regional.</p></>  
      </TextoPolitica>
      <NarradorAvanzado texto={texto} autoLeer={false} />
    </section>
  );
};