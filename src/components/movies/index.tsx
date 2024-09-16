import { fetchMovies, MOVIES_QUERY_KEY } from "@/hooks/api/use-get-movies";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import Movies from "./movies";
import { Pagination } from "@/shared/components/pagination";

interface Props {
  type: number;
  offset: number;
}

export default async function MoviesPage({ type, offset }: Props) {
  const queryClient = new QueryClient();
  const movies = await queryClient
    .fetchQuery({
      queryKey: [MOVIES_QUERY_KEY, type],
      queryFn: () => fetchMovies(offset, type)(),
    })
    .catch();

  console.log(offset);

  return (
    <>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <Movies movies={movies.data} />
        <Pagination
          currentPage={offset}
          onPageChange={(page) => {}}
          pages={movies.pages}
        />
      </HydrationBoundary>
    </>
  );
}
