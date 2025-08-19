export default function BotonCarrusel({ onClick, children }) {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-xl shadow cursor-pointer"
    >
      {children}
    </button>
  );
}
