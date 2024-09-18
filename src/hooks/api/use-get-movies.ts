import { useQuery } from "@tanstack/react-query";

export const MOVIES_QUERY_KEY = "getMovies";

export const fetchMovies = (offset: number, type: number) => {
  return async () => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/movies?offset=${offset}&type=${type}`
    );
    const data = await res.json();

    return {
      total: data?.data?.length || 0,
      data: data?.data?.map((doc: any) => ({
        id: doc?.id,
        title: doc?.title || doc?.name,
        rating: Math.round(doc?.vote_average * 10) / 10,
        poster:
          doc?.poster_path &&
          `https://image.tmdb.org/t/p/w500${doc?.poster_path}`,
        year:
          doc?.release_date?.slice(0, 4) || doc?.first_air_date?.slice(0, 4),
        end_year: data?.last_air_date?.slice(0, 4),
        type: type === 0 || type === 2 ? "movie" : "tv",
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
