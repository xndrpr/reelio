import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import React from "react";
import Movie from "./movie";
import { createMovieFn, MOVIE_QUERY_KEY } from "@/hooks/api/use-get-movie";

export async function generateMetadata({ params }: { params: { id: string } }) {
  const id = parseInt(params.id);
  const queryClient = new QueryClient();
  const movie = await queryClient
    .fetchQuery({
      queryKey: [MOVIE_QUERY_KEY, id],
      queryFn: () => createMovieFn(id)(),
    })
    .catch();

  return {
    title: `Glee - ${movie?.title}`,
    description: `Смотреть ${movie?.title} бесплатно в хорошем качестве, без рекламы, на русском языке`,
  };
}

export default async function MoviesPage({
  params,
}: {
  params: { id: string };
}) {
  const id = parseInt(params.id);
  const queryClient = new QueryClient();
  const movie = await queryClient
    .fetchQuery({
      queryKey: [MOVIE_QUERY_KEY, id],
      queryFn: () => createMovieFn(id)(),
    })
    .catch();

  return (
    <>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <Movie movie={movie} />
      </HydrationBoundary>
    </>
  );
}
