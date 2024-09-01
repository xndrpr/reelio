import { Movie } from "@/types/api/get-movies-result";
import React from "react";
import { Container, Poster, Title, TitleContainer, Year } from "./styled";

interface Props {
  movie: Movie;
}

export const MovieCard = ({ movie }: Props) => {
  return (
    <Container>
      <Poster width={200} height={280} src={movie.poster} alt="poster" />
      <TitleContainer>
        <Title>{movie.title}</Title>
        <Year>{movie.year}</Year>
      </TitleContainer>
    </Container>
  );
};
