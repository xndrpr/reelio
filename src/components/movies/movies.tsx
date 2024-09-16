import { MovieCard } from "@/app/movie-card";
import { CardsContainer } from "@/app/styled";
import { Movie } from "@/types/api/get-movies-result";

interface Props {
  movies: Movie[];
}

export default function Movies({ movies }: Props) {
  return (
    <CardsContainer>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </CardsContainer>
  );
}
