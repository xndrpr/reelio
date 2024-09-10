import React, { useEffect, useRef } from "react";
import { Container } from "./styled";
import { Movie } from "@/types/api/get-movies-result";

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
          search: { kinopoisk: movie.id },
          menu: {
            enabled: false,
          },
          params: {
            all: {
              poster: movie.poster,
            },
          },
        });
      }
    };

    return () => {
      document.body.removeChild(script);
    };
  }, [movie.id, movie.poster]);

  return <Container ref={containerRef} className="kinobox_player"></Container>;
}

export default KinoboxPlayer;
