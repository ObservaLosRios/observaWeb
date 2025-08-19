export default function BotonDescarga({ fileUrl, fileName, label = "Descargar" }) {
  return (
    <a 
      href={fileUrl}
      download={fileName}
      style={{ backgroundColor: '#294672' }}
      className="hover:brightness-90 mt-4 text-white font-semibold py-2 px-4 rounded-xl shadow inline-block"
    >
      {label}
    </a>
  );
}