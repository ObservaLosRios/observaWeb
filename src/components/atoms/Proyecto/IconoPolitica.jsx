export default function IconoPolitica({ icon: Icon, children }) {
  return (
    <div className="bg-slate-900 p-6 rounded-xl w-full">
      {Icon && <Icon className="w-12 h-12 text-blue-400 mb-4" />}
      <div className="text-white text-sm">{children}</div>
    </div>
  );
}
