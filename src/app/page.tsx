"use client";

import { useGetMovies } from "@/hooks/api/use-get-movies";
import { useHeader } from "@/hooks/use-header";
import { Header } from "@/shared/components/header";
import { MovieCard } from "./movie-card";
import { CardsContainer } from "./styled";

export default function Home() {
  const header = useHeader();
  const { data: movies, isPending } = useGetMovies();

  return (
    <main>
      <Header header={header} />
      <div>
        {header.activeTab === 0 && (
          <CardsContainer>
            {isPending && "Загрузка..."}
            {movies?.data.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </CardsContainer>
        )}
        {header.activeTab === 1 && <div>Сериалы</div>}
        {header.activeTab === 2 && <div>Аниме</div>}
        {header.activeTab === 3 && <div>Мультфильмы</div>}
      </div>
    </main>
  );
}
