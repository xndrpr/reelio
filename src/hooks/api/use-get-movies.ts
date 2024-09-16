import { useInfiniteQuery, useQuery } from "@tanstack/react-query";

enum MovieType {
  Movie,
  Series,
  Anime,
  Cartoon,
}
export const MOVIES_QUERY_KEY = "getMovies";
const LIMIT = 25;

export const fetchMovies = (offset: number, type: number) => {
  return async () => {
    const res = await fetch(
      `${
        process.env.NEXT_PUBLIC_API_URL
      }/movies?offset=${offset}&limit=${LIMIT}&type=${type + 1}`
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

export const useGetMovies = (offset: number, type: number) => {
  return useQuery({
    queryKey: [MOVIES_QUERY_KEY, type],
    queryFn: () => fetchMovies(offset, type),
  });
};
