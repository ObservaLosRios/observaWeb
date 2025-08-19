import { UserIcon } from 'lucide-react';

export default function Avatar({ src, alt }) {
  return (
    <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-800 flex items-center justify-center shrink-0">
      {src ? (
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
          style={{ aspectRatio: '1 / 1' }}
        />
      ) : (
        <UserIcon className="w-12 h-12 text-white" />
      )}
    </div>
  );
}
