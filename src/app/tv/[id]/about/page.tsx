import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import React from "react";
import { createMovieFn, MOVIE_QUERY_KEY } from "@/hooks/api/use-get-movie";
import { AboutMovie } from "@/components/movie-page/about/about";

export async function generateMetadata({ params }: { params: { id: string } }) {
  const id = parseInt(params.id);
  const queryClient = new QueryClient();
  const movie = await queryClient
    .fetchQuery({
      queryKey: [MOVIE_QUERY_KEY, id],
      queryFn: () => createMovieFn(id, 0)(),
    })
    .catch();

  return {
    metadataBase: new URL(process.env.NEXT_PUBLIC_METADATA_BASE_URL || ""),
    title: `Glee - ${movie?.title}`,
    description: `Смотреть ${movie?.title} ${movie?.year} бесплатно в хорошем качестве, без рекламы, на русском языке. ${movie?.description}`,
    keywords: ["фильм", "фильмы", "кино", "кинотеатр", "кинотеатры", "кино"],
    openGraph: {
      title: `Glee - ${movie?.title}`,
      description: `Смотреть ${movie?.title} бесплатно в хорошем качестве`,
      images: [
        {
          url: movie?.backdrop || movie?.poster || "",
        },
      ],
    },
  };
}

export default async function AboutPage({
  params,
}: {
  params: { id: string };
}) {
  const id = parseInt(params.id.split("-")[0]);
  const queryClient = new QueryClient();
  const movie = await queryClient
    .fetchQuery({
      queryKey: [MOVIE_QUERY_KEY, id],
      queryFn: () => createMovieFn(id, 0)(),
    })
    .catch();

  if (!movie) {
    return null;
  }

  return (
    <>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <AboutMovie movie={movie} />
      </HydrationBoundary>
    </>
  );
}
