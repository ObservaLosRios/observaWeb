export default function VideoEmbed({ src }) {
  return (
    <div className="aspect-video w-full overflow-hidden rounded-xl border border-gray-600 shadow">
      <iframe
        className="w-full h-full"
        src={src}
        title="Video YouTube"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}
