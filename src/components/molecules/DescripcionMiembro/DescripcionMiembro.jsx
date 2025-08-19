import Avatar from '@/components/atoms/Avatar';

export default function DescripcionMiembro({ name, role, description, image }) {
  return (
    <div className="flex items-start space-x-4">
      <Avatar src={image} alt={name} />
      <div>
        <h3 className="text-lg font-bold text-slate-900">{name}</h3>
        <p className="text-sm text-slate-700">{role}</p>
        <p className="text-sm text-gray-400 mt-1">{description}</p>
      </div>
    </div>
  );
};