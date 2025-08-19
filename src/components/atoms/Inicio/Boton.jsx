import { Link } from "react-router-dom";

export default function Boton({ text, to }) {
  return (
    <Link
      to={to}
      className="inline-block bg-[#294672] hover:brightness-90 text-white font-semibold py-2 px-4 rounded-xl shadow"
    >
      {text}
    </Link>
  );
}
