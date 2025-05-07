"use client";

import React, { useEffect, useRef } from "react";
import { Movie } from "@/types/movie";

interface Props {
  movie: Movie;
}

function KinoboxPlayer({ movie }: Props) {
  const containerRef = useRef(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://kinobox.tv/kinobox.min.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      if (containerRef.current) {
        (window as any).kbox(containerRef.current, {
          search: {
            tmdb: movie.id,
            imdb: movie.imdb_id,
          },
          menu: {
            enabled: false,
            format: "{N} -- {T} {Q}",
            default: "menu_button",
          },
          params: {
            all: {
              poster: movie.backdrop || movie.poster,
            },
          },
          players: {
            alloha: { enable: true, position: 1 },
            voidboost: { enable: true, position: 2 },
            kodik: { enable: true, position: 3 },
            ashdi: { enable: true, position: 4 },
            cdnmovies: { enable: true, position: 5 },
            vibix: { enable: true, position: 6 },
            videocdn: { enable: true, position: 7 },
            hdvb: { enable: true, position: 8 },
            collaps: { enable: true, position: 9 },
          },
        });
      }
    };

    return () => {
      try {
        document.body.removeChild(script);
      } catch {}
    };
  }, [movie.backdrop, movie.id, movie.poster, movie.imdb_id, movie.title]);

  return (
    <div
      ref={containerRef}
      className="
        kinobox_player
        w-full
        aspect-video
        border-2
        border-dusty-mauve/50
        rounded-2xl
      "
    />
  );
}

export default KinoboxPlayer;
