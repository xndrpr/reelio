import { Movie } from "@/types/api/get-movies-result";
import React from "react";
import {
  Container,
  HoverContainer,
  ImdbIcon,
  Poster,
  RatingContainer,
  Title,
  TitleContainer,
  Year,
} from "./styled";
import { RatingBadge } from "./rating-badge";
import { bgColor, fgColor, imdbColor, kpColor } from "@/shared/variables";
import { KpIcon } from "@/assets/icons/tsx-icons/kp-icon";

interface Props {
  movie: Movie;
}

export const MovieCard = ({ movie }: Props) => {
  return (
    <Container>
      <HoverContainer href={`/movie/${movie.id}`}>
        <Poster
          priority={true}
          width={200}
          height={280}
          src={movie.preview_poster}
          alt="poster"
        />
        <TitleContainer>
          <Title>{movie.title}</Title>
          <Year>{movie.year}</Year>
        </TitleContainer>
      </HoverContainer>
      <RatingContainer>
        {movie.rating_imdb && (
          <RatingBadge
            backgroundColor={imdbColor}
            color={bgColor}
            rating={movie.rating_imdb}
            icon={<ImdbIcon>IMDB</ImdbIcon>}
          />
        )}
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
