import OrganizacionGORE from "@/components/organisms/Organizaciones/OrganizacionGORE";
import OrganizacionCRDP from "@/components/organisms/Organizaciones/OrganizacionCRDP";

const Responsables = () => {
    return (
    <div>
      <OrganizacionGORE />

      {/* Línea separadora */}
       <div className="bg-white py-4">
        <hr className="border-gray-200" />
      </div>

      <OrganizacionCRDP />
    </div>
  );
};

export default Responsables;