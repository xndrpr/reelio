import { Movie } from "@/types/api/get-movies-result";
import React from "react";
import {
  Container,
  HoverContainer,
  ImdbIcon,
  RatingContainer,
  Title,
  TitleContainer,
  Year,
} from "./styled";
import { RatingBadge } from "./rating-badge";
import { bgColor, fgColor, imdbColor, kpColor } from "@/shared/variables";
import { KpIcon } from "@/assets/icons/tsx-icons/kp-icon";
import { SmartPoster } from "./smart-poster";

interface Props {
  movie: Movie;
}

export const MovieCard = ({ movie }: Props) => {
  function encodeBase62(id: number) {
    const base62chars =
      "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let encoded = "";
    while (id > 0) {
      encoded = base62chars[id % 62] + encoded;
      id = Math.floor(id / 62);
    }
    const random = Math.random().toString(36).substring(2, 6);
    return "gl" + random + encoded + "lg" || "0";
  }

  return (
    <Container>
      <HoverContainer href={`/movie/${encodeBase62(movie.id)}`}>
        <SmartPoster poster={movie.preview_poster || movie.poster} />
        <TitleContainer>
          <Title>{movie.title}</Title>
          <Year>{movie.year}</Year>
        </TitleContainer>
      </HoverContainer>
      <RatingContainer>
        {movie.rating_imdb ? (
          <RatingBadge
            backgroundColor={imdbColor}
            color={bgColor}
            rating={movie.rating_imdb}
            icon={<ImdbIcon>IMDB</ImdbIcon>}
          />
        ) : null}
        {movie.rating_kp ? (
          <RatingBadge
            backgroundColor={kpColor}
            color={fgColor}
            rating={parseFloat(movie.rating_kp.toFixed(1))}
            icon={<KpIcon />}
          />
        ) : null}
      </RatingContainer>
    </Container>
  );
};
