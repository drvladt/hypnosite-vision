import { useState } from "react";
import { Play } from "lucide-react";

type YouTubeFacadeProps = {
  videoId: string;
  playLabel: string;
  title: string;
};

export function YouTubeFacade({ videoId, playLabel, title }: YouTubeFacadeProps) {
  const [playing, setPlaying] = useState(false);

  if (playing) {
    return (
      <iframe
        className="absolute inset-0 size-full"
        src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    );
  }

  return (
    <button
      type="button"
      onClick={() => setPlaying(true)}
      aria-label={playLabel}
      className="group absolute inset-0 size-full cursor-pointer"
    >
      <img
        src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}
        alt=""
        className="absolute inset-0 size-full object-cover"
        loading="lazy"
      />
      <span className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent" aria-hidden="true" />
      <span
        className="absolute left-1/2 top-1/2 flex size-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-gold text-primary shadow-lg transition-transform duration-200 group-hover:scale-110"
        aria-hidden="true"
      >
        <Play className="ml-1 size-7 fill-current" />
      </span>
    </button>
  );
}
