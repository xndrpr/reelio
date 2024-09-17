import { QueryOptions, useQuery } from "@tanstack/react-query";
import { Movie } from "@/types/api/get-movies-result";

export const SEARCH_QUERY_KEY = "getSearch";

export const searchMovies = (query: string, offset: number) => {
  return async () => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/movies/search?query=${query}&offset=${offset}&limit=10`
    );
    const data = await res.json();

    return {
      total: data?.data?.length || 0,
      data: data?.data?.map((doc: any) => ({
        id: doc?.id,
        title: doc?.name,
        rating_imdb: doc?.rating?.imdb,
        rating_kp: doc?.rating?.kp,
        poster: doc?.poster?.url,
        preview_poster: doc?.poster?.previewUrl || doc.poster?.url,
        year: doc?.year,
      })),
      pages: data?.pages || 0,
    };
  };
};

export const useGetSearch = (query: string, offset: number) => {
  return useQuery({
    queryKey: [SEARCH_QUERY_KEY, query],
    queryFn: searchMovies(query, offset),
  });
};
