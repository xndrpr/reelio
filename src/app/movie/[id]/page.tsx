import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import React from "react";
import Movie from "./movie";

export default async function MoviesPage({
  params,
}: {
  params: { id: string };
}) {
  const queryClient = new QueryClient();
  queryClient.prefetchQuery({
    queryKey: [MOVIE_QUERY_KEY, parseInt(params.id)],
    queryFn: () => getMovie(parseInt(params.id)),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Movie id={parseInt(params.id)} />
    </HydrationBoundary>
  );
}
