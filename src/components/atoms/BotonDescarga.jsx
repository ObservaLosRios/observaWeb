export default function BotonDescarga({ fileUrl, fileName, label = "Descargar" }) {
  const handleDownload = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch(fileUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = fileName || 'documento.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error al descargar el archivo:', error);
      // Fallback: abrir en nueva pestaña si falla la descarga
      window.open(fileUrl, '_blank');
    }
  };

  return (
    <a 
      href={fileUrl}
      onClick={handleDownload}
      style={{ backgroundColor: '#294672' }}
      className="hover:brightness-90 mt-4 text-white font-semibold py-2 px-4 rounded-xl shadow inline-block cursor-pointer"
    >
      {label}
    </a>
  );
}