import IconoPolitica from "@/components/atoms/Proyecto/IconoPolitica";

export default function TarjetaPolitica({ icon, title, text }) {
  return (
    <IconoPolitica icon={icon}>
      <h3 className="text-base font-semibold mb-1">{title}</h3>
      <p className="text-sm text-white/70">{text}</p>
    </IconoPolitica>
  );
}
