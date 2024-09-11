import { ErrorModelActionResultModel } from "@/types/api/common-api-types";
import { Movie } from "@/types/api/get-movies-result";
import { QueryOptions, useQuery } from "@tanstack/react-query";

export const MOVIE_QUERY_KEY = "getMovie";

export const createMovieFn = (id: number) => {
  return async () => {
    const res = await fetch(`http://localhost:6100/api/movies/${id}`);
    const data = await res.json();

    return {
      id: data.id,
      title: data.name,
      rating_imdb: data.rating.imdb,
      rating_kp: data.rating.kp,
      poster: data.poster.url,
      backdrop: data.backdrop.url,
      year: data.year,
    } as Movie;
  };
};

export const useGetMovie = (
  id: number,
  queryOptions?: QueryOptions<Movie, ErrorModelActionResultModel>
) => {
  return useQuery({
    queryKey: [MOVIE_QUERY_KEY],
    queryFn: createMovieFn(id),
    ...queryOptions,
  });
};
