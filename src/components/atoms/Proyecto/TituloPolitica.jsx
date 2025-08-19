export default function TituloPolitica({ centered, children }) {
  return (
  <h2
    className={`text-2xl font-bold mb-4 ${
      centered ? "text-center" : "md:text-left"
    }`}
  >
    {children}
  </h2>
);
}