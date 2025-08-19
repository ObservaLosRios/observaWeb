import { useEffect, useRef, useState } from "react";

export default function NarradorAvanzado({
  texto = "",
  autoLeer = false,
  clase = "",
  vocesIdioma = "es", // puedes cambiar a 'en', 'fr', etc.
}) {
  const utteranceRef = useRef(null);
  const [leyendo, setLeyendo] = useState(false);
  const [voces, setVoces] = useState([]);
  const [vozSeleccionada, setVozSeleccionada] = useState(null);

  // Cargar voces disponibles
  useEffect(() => {
    const cargarVoces = () => {
      const todas = speechSynthesis.getVoices();
      const filtradas = todas.filter((v) => v.lang.startsWith(vocesIdioma));
      setVoces(filtradas);
      setVozSeleccionada(filtradas[0] || null);
    };

    cargarVoces();
    if (speechSynthesis.onvoiceschanged !== undefined) {
      speechSynthesis.onvoiceschanged = cargarVoces;
    }
  }, [vocesIdioma]);

  // Leer automáticamente al cargar si autoLeer es true
  useEffect(() => {
    if (autoLeer && texto) {
      reproducir();
    }
  }, [autoLeer]);

  const reproducir = () => {
    if (!texto) return;
    const utterance = new SpeechSynthesisUtterance(texto);
    utterance.lang = vozSeleccionada?.lang || "es-ES";
    utterance.voice = vozSeleccionada || null;

    utterance.onstart = () => setLeyendo(true);
    utterance.onend = () => setLeyendo(false);
    utterance.onerror = () => setLeyendo(false);

    utteranceRef.current = utterance;
    speechSynthesis.cancel();
    speechSynthesis.speak(utterance);
  };

  const pausar = () => {
    if (speechSynthesis.speaking && !speechSynthesis.paused) {
      speechSynthesis.pause();
      setLeyendo(false);
    }
  };

  const reanudar = () => {
    if (speechSynthesis.paused) {
      speechSynthesis.resume();
      setLeyendo(true);
    }
  };

  const detener = () => {
    speechSynthesis.cancel();
    setLeyendo(false);
  };

  return (
    <div className={`space-y-2 ${clase} px-14`}>
      <div className="flex items-center space-x-3">
        <button
          onClick={reproducir}
          aria-label="Reproducir texto"
          className="bg-blue-600 text-white px-3 py-2 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          ▶️ Leer
        </button>
        <button
          onClick={pausar}
          aria-label="Pausar lectura"
          className="bg-yellow-500 text-white px-3 py-2 rounded hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
        >
          ⏸️ Pausar
        </button>
        <button
          onClick={reanudar}
          aria-label="Reanudar lectura"
          className="bg-green-600 text-white px-3 py-2 rounded hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400"
        >
          🔁 Reanudar
        </button>
        <button
          onClick={detener}
          aria-label="Detener lectura"
          className="bg-red-600 text-white px-3 py-2 rounded hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400"
        >
          ⏹️ Detener
        </button>
      </div>

      {/* Selector de voz si hay más de una */}
      {voces.length > 1 && (
        <div>
          <label className="block text-sm font-medium text-gray-800 dark:text-gray-800">
            Elegir voz:
          </label>
          <select
            className="mt-1 p-2 rounded w-full bg-white dark:bg-gray-white border dark:border-gray-200 text-gray-900 dark:text-gray-900"
            value={vozSeleccionada?.name || ""}
            onChange={(e) =>
              setVozSeleccionada(
                voces.find((v) => v.name === e.target.value) || null
              )
            }
          >
            {voces.map((voz) => (
              <option key={voz.name} value={voz.name}>
                {voz.name} ({voz.lang})
              </option>
            ))}
          </select>
        </div>
      )}
    </div>
  );
}
