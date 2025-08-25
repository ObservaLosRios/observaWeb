import DescripcionMiembro from '@/components/molecules/DescripcionMiembro/DescripcionMiembro';
import Avatar from '@/components/atoms/Avatar';
import Eugenio from '@/assets/img/Eugenio.jpeg';
import Gobernador from '@/assets/img/Gobernador.JPG';
import Pamela from '@/assets/img/Pamela.jpeg';
import Jorge from '@/assets/img/Jorge.jpeg';
import logoGORE from '@/assets/img/gore.png'; 

const miembros = [
  {
    name: 'Luis Cuvertino',
    role: 'Gobernador de Los Ríos',
    image: Gobernador, 
  },
  {
    name: 'Eugenio Ortega Frei',
    role: 'Jefe de División de Fomento e Industria',
    image: Eugenio,
  },
  {
    name: 'Andrés Hernández',
    role: 'Profesional DIFOI',
    // image: Veronica,
  },
  {
    name: 'Pamela Fontecilla Contreras',
    role: 'Jefa de División de Planificación y Desarrollo Regional',
    image: Pamela,
  },
  {
    name: 'Jorge Balboa',
    role: 'Profesional DIPLADE',
    image: Jorge,
  },
  {
    name: 'Nicolás Guiñez',
    role: 'Profesional DIPLADE',
    // image: America,
  },
];

export default function OrganizacionGORE() {
  return (
    <section className="bg-white text-slate-900 p-10 ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Lado izquierdo: Organización */}
        <div className="flex flex-col items-start space-y-4">
          <img src={logoGORE} alt="Logo" className="w-30 h-20" />
          <h2 className="text-2xl font-bold">Equipo GORE</h2>
          <p className="text-slate-900 text-justify">
            El Gobierno Regional tiene la misión de liderar de manera integrada el desarrollo de la Región de Los Ríos, acorde a principios de participación, equidad, integración territorial y sustentabilidad. Su objetivo es mejorar la calidad de vida y el bienestar de sus habitantes, mediante la formulación e implementación de instrumentos de planificación, coordinación y gestión de la inversión pública. En el marco del proyecto Observa Los Ríos, el GORE financia la iniciativa a través del Fondo de Innovación para la Competitividad (FIC), reafirmando su compromiso con una gestión regional basada en evidencia y datos.
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
                // description={miembro.description}
                image={miembro.image}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};