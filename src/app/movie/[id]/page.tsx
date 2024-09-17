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
    metadataBase: new URL(process.env.NEXT_PUBLIC_METADATA_BASE_URL || ""),
    title: `Glee - ${movie?.title}`,
    description: `Смотреть ${movie?.title} бесплатно в хорошем качестве, без рекламы, на русском языке`,
    openGraph: {
      title: `Glee - ${movie?.title}`,
      description: `Смотреть ${movie?.title} бесплатно в хорошем качестве`,
      images: [
        {
          url: movie?.poster || "",
        },
      ],
    },
  };
}

function decodeBase62(encoded: string) {
  const base62chars =
    "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let decoded = 0;

  for (let i = 0; i < encoded.length; i++) {
    const char = encoded[i];
    const index = base62chars.indexOf(char);
    decoded = decoded * 62 + index;
  }

  return decoded;
}

export default async function MoviesPage({
  params,
}: {
  params: { id: string };
}) {
  const id = decodeBase62(params.id.slice(2, -2));
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
