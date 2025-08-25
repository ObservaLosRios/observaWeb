import DescripcionMiembro from '@/components/molecules/DescripcionMiembro/DescripcionMiembro';
import Avatar from '@/components/atoms/Avatar';
import Egon from '@/assets/img/Egon.png';
import Veronica from '@/assets/img/Veronica.png';
import Bruno from '@/assets/img/Bruno.png';
import Francisco from '@/assets/img/Francisco.png';
import America from '@/assets/img/America.png';
import Priscilla from '@/assets/img/Priscilla.png';
import Diego from '@/assets/img/Diego.png';
import Valentina from '@/assets/img/Valentina.png';
import logoCER from '@/assets/img/logo_cer_uach_negro.png'; 

const miembros = [
  {
    name: 'Dr. Egon Montecinos',
    role: 'Director Alterno / Académico Asesor',
    image: Egon, // URL de la imagen del director
  },
  {
    name: 'Dra. Verónica Fuentes',
    role: 'Académica Asesora',
    image: Veronica,
  },
  {
    name: 'Dr. Fernando de la Costa',
    role: 'Académico Asesor',
    // image: Veronica,
  },
  {
    name: 'Valentina Gatica',
    role: 'Coordinadora Ejecutiva CER UACh',
    image: Valentina,
  },
  {
    name: 'Bruno Soto',
    role: 'Profesional Analista de Datos',
    image: Bruno,
  },
  {
    name: 'Francisco Alarcón',
    role: 'Profesional Analista de Datos',
    image: Francisco,
  },
  {
    name: 'América Flández',
    role: 'Profesional Administrativa',
    image: America,
  },
  {
    name: 'Priscilla Torres',
    role: 'Profesional de Comunicaciones',
    image: Priscilla,
  },
  {
    name: 'Diego Araneda',
    role: 'Programador',
    image: Diego,
  },
];

export default function OrganizacionCER() {
    return (
      <section className="p-10 bg-white text-slate-900">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
              {/* Lado izquierdo: Organización */}
              <div className="flex flex-col items-start space-y-4">
                  <img src={logoCER} alt="Logo" className="w-60 h-20 " />
                  <h2 className="text-2xl font-bold">Equipo CER</h2>
                  <p className="text-slate-900 text-justify">
                    Entidad responsable de la ejecución técnica del estudio, liderando el diseño metodológico, la elaboración de indicadores, el desarrollo de la plataforma digital y el acompañamiento estratégico para la implementación, seguimiento y evaluación de la Política Regional de Fomento Productivo, Emprendimiento e Innovación.
                  </p>
              </div>

              {/* Lado derecho: Miembros del equipo */}
              <div className="md:col-span-2 grid grid-cols-2 gap-8">
                {miembros.map((miembro, index) => (
                  <div
                    key={index}
                    className={`col-start-${index % 2 === 0 ? 1 : 2}`}
                  >
                    <DescripcionMiembro
                      name={miembro.name}
                      role={miembro.role}
                      description={miembro.description}
                      image={miembro.image}
                    />
                  </div>
                ))}
              </div>
          </div>
      </section>
    );
};