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
import { bgColor, imdbColor } from "@/shared/variables";
import { SmartPoster } from "./smart-poster";
import slug from "slug";
import { Movie } from "@/types/movie";

interface Props {
  movie: Movie;
}

export const MovieCard = ({ movie }: Props) => {
  if (!movie) return null;
  if (!movie.poster) return null;

  return (
    <Container>
      <HoverContainer
        href={`/${movie.type}/${movie.tmdb_id}-${slug(movie.title)}`}
      >
        <SmartPoster poster={movie.poster} />
        <TitleContainer>
          <Title>{movie.title}</Title>
          <Year>{movie.start_year}</Year>
        </TitleContainer>
      </HoverContainer>
      <RatingContainer>
        {movie.vote_average ? (
          <RatingBadge
            backgroundColor={imdbColor}
            color={bgColor}
            rating={movie.vote_average}
            icon={<ImdbIcon>IMDB</ImdbIcon>}
          />
        ) : null}
      </RatingContainer>
    </Container>
  );
};
