import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { Pagination } from "@/shared/components/pagination";
import Movies from "@/components/movies/movies";
import { SEARCH_QUERY_KEY, searchMovies } from "@/hooks/api/use-get-search";
import { Header } from "@/shared/components/header";

export default async function SearchPage({
  searchParams,
}: {
  searchParams: {
    query: string;
    offset: string;
  };
}) {
  const queryClient = new QueryClient();
  const movies = await queryClient
    .fetchQuery({
      queryKey: [SEARCH_QUERY_KEY, searchParams.query],
      queryFn: () =>
        searchMovies(searchParams.query, parseInt(searchParams.offset) || 1)(),
    })
    .catch();

  return (
    <>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <Header activeTab={0} />
        <Movies movies={movies.data} />
        <Pagination
          currentPage={parseInt(searchParams.offset) || 1}
          query={searchParams.query}
          pages={movies.total}
        />
      </HydrationBoundary>
    </>
  );
}
