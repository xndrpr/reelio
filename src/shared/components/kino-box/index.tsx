"use client";

import React, { useEffect, useRef } from "react";
import { Container, Player } from "./styled";
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
            tmdb: movie.tmdb_id,
            imdb: movie.imdb_id,
            title: movie.title,
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
            alloha: {
              enable: true,
              position: 1,
            },
            voidboost: {
              enable: true,
              position: 2,
            },
            kodik: {
              enable: true,
              position: 3,
            },
            ashdi: {
              enable: true,
              position: 4,
            },
            cdnmovies: {
              enable: true,
              position: 5,
            },
            vibix: {
              enable: true,
              position: 6,
            },
            videocdn: {
              enable: true,
              position: 7,
            },
            hdvb: {
              enable: true,
              position: 8,
            },
            collaps: {
              enable: true,
              position: 9,
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
  }, [
    movie.backdrop,
    movie.id,
    movie.poster,
    movie.imdb_id,
    movie.title,
    movie.tmdb_id,
  ]);

  //return <Container ref={containerRef} className="kinobox_player"></Container>;

  const url = `https://sansa.allarknow.online/t/?token=3a4e69a3bb3a0eb3b5bf5eba7e563b&token_movie=fc4f8e05dd7f31e582e9bc7234e98b`;
  const src = `http://localhost:6100/api/neo/get/${url.replaceAll("/", "(").replaceAll("?", ")").replaceAll("&", "!")}?secret=VupsinPupsin`;

  return <Player src={src} />;
}

export default KinoboxPlayer;
