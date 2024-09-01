import { Movie } from "@/types/api/get-movies-result";
import React from "react";
import { Container } from "./styled";

interface Props {
  movie: Movie;
}

export const MovieCard = ({ movie }: Props) => {
  return <Container>{movie.title}</Container>;
};
