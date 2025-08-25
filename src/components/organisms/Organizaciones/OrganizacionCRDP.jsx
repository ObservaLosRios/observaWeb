import DescripcionMiembro from '@/components/molecules/DescripcionMiembro/DescripcionMiembro';
import Avatar from '@/components/atoms/Avatar';
import logoCRDP from '@/assets/img/crdp.png'; 
import Marcela from '@/assets/img/Marcela.jpg';
import Fernando from '@/assets/img/Fernando.jpeg';
import Rodrigo from '@/assets/img/Rodrigo.png';

const miembros = [
  {
    name: 'Fernando Paredes',
    role: 'Gerente General Corporación de Desarrollo Productivo',
    image: Fernando, 
  },
  {
    name: 'Marcela Osorio',
    role: 'Gerenta de Operaciones Corporación de Desarrollo Productivo',
    image: Marcela,
  },
  {
    name: 'Rodrigo Ibáñez',
    role: 'Profesional Corporación de Desarrollo Productivo',
    image: Rodrigo,
  },
];

export default function OrganizacionCRDP() {
  return (
    <section className="bg-white text-slate-900 p-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Lado izquierdo: Organización */}
        <div className="flex flex-col items-start space-y-4">
          <img src={logoCRDP} alt="Logo" className="w-35 h-10" />
          <h2 className="text-2xl font-bold">Equipo CRDP</h2>
          <p className="text-slate-900 text-justify">
            Mandatada por el Gobierno Regional de Los Ríos y su Consejo Regional, la CRDP actúa como organismo técnico y articulador del ecosistema regional de fomento. En el marco del proyecto Observa Los Ríos, cumple el rol de institución mandante, encargada de velar por el cumplimiento de los objetivos del estudio y la coherencia con la Política Regional de Fomento Productivo, Emprendimiento e Innovación.
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