import { Link, useLocation } from "react-router-dom";

export default function EnlaceNav({ to, children }) {
  const { pathname } = useLocation();
  const base = "text-sm text-white hover:underline transition";
  const activo = pathname === to ? "font-semibold text-blue-400" : "";
  return (
    <Link to={to} className={`${base} ${activo}`}>
      {children}
    </Link>
  );
}
