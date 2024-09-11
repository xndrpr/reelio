"use client";

import { MovieCard } from "@/app/movie-card";
import { CardsContainer, LoadMoreButtonContainer } from "@/app/styled";
import { useGetMovies } from "@/hooks/api/use-get-movies";
import { Movie } from "@/types/api/get-movies-result";
import { useState } from "react";

interface Props {
  type: number;
}

export default function Movies({ type }: Props) {
  const { data, isPending, fetchNextPage } = useGetMovies(type);
  const movies: Movie[] = data?.pages.flatMap((page) => page.data) || [];

  const handleLoadMore = async () => {
    await fetchNextPage();
  };

  return (
    <CardsContainer>
      {isPending
        ? "Загрузка..."
        : movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}{" "}
      {!isPending && (
        <LoadMoreButtonContainer onClick={handleLoadMore}>
          Загрузить еще
        </LoadMoreButtonContainer>
      )}
    </CardsContainer>
  );
}
