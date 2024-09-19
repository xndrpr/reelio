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
import slug from "slug";
import { Movie } from "@/types/movie";

interface Props {
  movie: Movie;
}

export const MovieCard = ({ movie }: Props) => {
  if (!movie) return null;
  if (!movie.poster && !movie.preview_poster) return null;
  console.log(movie);

  return (
    <Container>
      <HoverContainer
        href={`/${movie.type || "movie"}/${movie.tmdbId}-${slug(movie.title)}`}
      >
        <SmartPoster poster={movie.preview_poster || movie.poster} />
        <TitleContainer>
          <Title>{movie.title}</Title>
          <Year>{movie.year}</Year>
        </TitleContainer>
      </HoverContainer>
      <RatingContainer>
        {movie.rating ? (
          <RatingBadge
            backgroundColor={imdbColor}
            color={bgColor}
            rating={movie.rating}
            icon={<ImdbIcon>IMDB</ImdbIcon>}
          />
        ) : null}
      </RatingContainer>
    </Container>
  );
};
