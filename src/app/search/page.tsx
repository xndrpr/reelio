import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
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
      queryFn: () => searchMovies(searchParams.query)(),
    })
    .catch();

  return (
    <>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <Header />
        <h1 className="text-3xl mt-12">Результаты поиска: </h1>
        <Movies movies={movies.data} />
      </HydrationBoundary>
    </>
  );
}
