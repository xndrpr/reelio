import { fetchMovies, MOVIES_QUERY_KEY } from "@/hooks/api/use-get-movies";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import Movies from "./movies";
import { Pagination } from "@/shared/components/pagination";
import { MovieType } from "@/types/movie";

interface Props {
  type: MovieType;
  offset: string;
}

export default async function MoviesPage({ type, offset }: Props) {
  const queryClient = new QueryClient();
  const movies = await queryClient
    .fetchQuery({
      queryKey: [MOVIES_QUERY_KEY, type],
      queryFn: () => fetchMovies(parseInt(offset) || 1, type)(),
    })
    .catch();

  return (
    <>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <Movies movies={movies.data} />
        <Pagination
          currentPage={parseInt(offset) || 1}
          pages={parseInt(
            (movies.total > 1000
              ? type === MovieType.Movie || type === MovieType.TV
                ? 1000
                : 789
              : movies.total
            ).toFixed(0)
          )}
        />
      </HydrationBoundary>
    </>
  );
}
