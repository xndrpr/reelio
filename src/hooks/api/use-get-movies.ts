import { MovieType } from "@/types/movie";
import { useQuery } from "@tanstack/react-query";

export const MOVIES_QUERY_KEY = "getMovies";

export const fetchMovies = (offset: number, type: MovieType) => {
  return async () => {
    const res = await fetch(
      `${process.env.API_URL}/movies?offset=${offset}&type=${type}`,
      {
        headers: {
          "Content-Type": "application/json",
          secret: `${process.env.SECRET}`,
        },
        next: { revalidate: 60 * 30 },
      }
    );
    const data = await res.json();

    const a = {
      total: data?.total || 0,
      data: data?.data?.map((doc: any) => ({
        ...doc,
        tmdb_id: doc?.tmdb_id || doc?.id,
        title: doc?.title || doc?.name,
        rating: Math.round(doc?.vote_average * 10) / 10,
        poster:
          doc?.poster_path &&
          `https://image.tmdb.org/t/p/w500${doc?.poster_path}`,
        year:
          doc?.release_date?.slice(0, 4) || doc?.first_air_date?.slice(0, 4),
        end_year: data?.last_air_date?.slice(0, 4),
      })),
    };

    return a;
  };
};

export const useGetMovies = (offset: number, type: MovieType) => {
  return useQuery({
    queryKey: [MOVIES_QUERY_KEY, type],
    queryFn: () => fetchMovies(offset, type),
  });
};
