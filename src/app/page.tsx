"use client";

import { useGetMovies } from "@/hooks/api/use-get-movies";
import { useHeader } from "@/hooks/use-header";
import { Header } from "@/shared/components/header";
import { MovieCard } from "./movie-card";
import { CardsContainer, LoadMoreButtonContainer } from "./styled";
import { Movie } from "@/types/api/get-movies-result";

export default function Home() {
  const header = useHeader();

  const { data, isPending, fetchNextPage } = useGetMovies();
  const movies: Movie[] = data?.pages.flatMap((page) => page.data) || [];

  return (
    <main>
      <Header header={header} />
      <div>
        {header.activeTab === 0 && (
          <CardsContainer>
            {isPending && "Загрузка..."}
            {movies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
            {!isPending && (
              <LoadMoreButtonContainer
                onClick={async () => await fetchNextPage()}
              >
                Загрузить еще
              </LoadMoreButtonContainer>
            )}
          </CardsContainer>
        )}
        {header.activeTab === 1 && <div>Сериалы</div>}
        {header.activeTab === 2 && <div>Аниме</div>}
        {header.activeTab === 3 && <div>Мультфильмы</div>}
      </div>
    </main>
  );
}
