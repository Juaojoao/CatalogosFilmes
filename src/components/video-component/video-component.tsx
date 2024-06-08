import "./style.css";

interface VideoProps {
  videoId: string;
}

export const VideoComponent = ({ videoId }: VideoProps) => {
  const embedUrl = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div>
      <iframe
        title="YouTube Video"
        src={embedUrl}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};
