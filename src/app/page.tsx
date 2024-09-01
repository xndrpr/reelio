"use client";

import { useGetMovies } from "@/hooks/api/use-get-movies";
import { useHeader } from "@/hooks/use-header";
import { Header } from "@/shared/components/header";
import { MovieCard } from "./movie-card";

export default function Home() {
  const header = useHeader();
  const { data: movies } = useGetMovies();

  return (
    <main>
      <Header header={header} />
      <div>
        {header.activeTab === 0 && (
          <div>
            {movies?.data.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        )}
        {header.activeTab === 1 && <div>Сериалы</div>}
        {header.activeTab === 2 && <div>Аниме</div>}
        {header.activeTab === 3 && <div>Мультфильмы</div>}
      </div>
    </main>
  );
}
