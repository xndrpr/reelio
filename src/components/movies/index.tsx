"use client";

import { MovieCard } from "@/app/movie-card";
import { CardsContainer, LoadMoreButtonContainer } from "@/app/styled";
import { useGetMovies } from "@/hooks/api/use-get-movies";
import { Movie } from "@/types/api/get-movies-result";

interface Props {
  type: number;
}

export default function Movies({ type }: Props) {
  const { data, isPending, fetchNextPage } = useGetMovies(type);
  const movies: Movie[] = data?.pages.flatMap((page) => page.data) || [];
  const pagesCount: number = data?.pages[0]?.pages || 0;

  return (
    <CardsContainer>
      {isPending
        ? "Загрузка..."
        : movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      {!isPending && pagesCount > (data?.pages.length || 0) && (
        <LoadMoreButtonContainer onClick={async () => await fetchNextPage()}>
          Загрузить еще
        </LoadMoreButtonContainer>
      )}
    </CardsContainer>
  );
}
