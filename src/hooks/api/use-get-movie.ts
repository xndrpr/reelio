import { ErrorModelActionResultModel } from "@/types/api/common-api-types";
import { Movie, MovieType } from "@/types/movie";
import { QueryOptions, useQuery } from "@tanstack/react-query";

export const MOVIE_QUERY_KEY = "getMovie";

export const createMovieFn = (id: number, type: MovieType) => {
  return async () => {
    try {
      const url = `${process.env.API_URL}/${type}/${id}?type=${type}&language=ru-RU`;

      const res = await fetch(url, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.API_KEY}`,
        },
        next: { revalidate: 60 * 15 },
      });
      const data = await res.json();
      return {
        ...data,
        title: data?.title || data?.name,
        original_title: data?.original_title || data?.original_name,
        rating: Math.round(data?.vote_average * 10) / 10,
        poster: `https://image.tmdb.org/t/p/w500${data?.poster_path}`,
        description: data?.overview,
        custom_description: data?.custom_description,
        backdrop:
          data?.backdrop_path &&
          `https://image.tmdb.org/t/p/w1280${data?.backdrop_path}`,
        seasons_count: data?.seasons?.length,
        start_year:
          data?.release_date?.slice(0, 4) || data?.first_air_date?.slice(0, 4),
        end_year: ["Ended", "Canceled"].includes(data?.status)
          ? data?.last_air_date?.slice(0, 4)
          : null,
      } as Movie;
    } catch {
      return null;
    }
  };
};

export const useGetMovie = (
  id: number,
  type: MovieType,
  queryOptions?: QueryOptions<Movie | null, ErrorModelActionResultModel>
) => {
  return useQuery({
    queryKey: [MOVIE_QUERY_KEY],
    queryFn: createMovieFn(id, type),
    ...queryOptions,
  });
};
