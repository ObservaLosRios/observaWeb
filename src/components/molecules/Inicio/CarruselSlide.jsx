import VideoEmbed from '@/components/atoms/Inicio/VideoEmbed';

export default function CarruselSlide({ src }) {
  return (
    <div>
      <VideoEmbed src={src} />
    </div>
  );
}
