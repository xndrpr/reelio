"use client";

import React, { useEffect, useRef } from "react";
import { Container } from "./styled";
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
          search: { tmdb: movie.tmdbId },
          menu: {
            enabled: false,
          },
          params: {
            all: {
              poster: movie.backdrop || movie.poster,
            },
          },
        });
      }
    };

    return () => {
      try {
        document.body.removeChild(script);
      } catch (e) {}
    };
  }, [movie.backdrop, movie.tmdbId, movie.poster]);

  return <Container ref={containerRef} className="kinobox_player"></Container>;
}

export default KinoboxPlayer;
