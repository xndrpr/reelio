import { MovieCard } from "@/app/movie-card";
import { Movie } from "@/types/movie";

interface Props {
  movies: Movie[];
}

export default function Movies({ movies }: Props) {
  return (
    <div className="grid mt-4 xs:mt-8 gap-2 grid-cols-[repeat(auto-fill,minmax(200px,1fr))] justify-center justify-items-center">
      {movies?.map((movie) => (
        <div key={movie.id} className="w-full flex justify-center items-center">
          <MovieCard movie={movie} />
        </div>
      ))}
    </div>
  );
}
