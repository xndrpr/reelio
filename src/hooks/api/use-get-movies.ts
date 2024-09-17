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
        title: doc?.title,
        rating_imdb: Math.round(doc?.vote_average * 10) / 10,
        poster: `https://image.tmdb.org/t/p/w500${doc?.poster_path}`,
        year: doc?.release_date?.slice(0, 4),
        type: "movie",
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
