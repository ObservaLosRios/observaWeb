export default function TextoPolitica({ children }) {
  return (
    <div className="text-lg text-slate-900 text-justify space-y-4 [&>p]:indent-6 mb-14">
      {children}
    </div>
  );
}