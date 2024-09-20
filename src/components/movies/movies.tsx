import { MovieCard } from "@/app/movie-card";
import { CardsContainer } from "@/app/styled";
import { Movie } from "@/types/movie";

interface Props {
  movies: Movie[];
}

export default function Movies({ movies }: Props) {
  return (
    <CardsContainer>
      {movies?.map((movie) => (
        <MovieCard key={movie.tmdb_id} movie={movie} />
      ))}
    </CardsContainer>
  );
}
