import { ErrorModelActionResultModel } from "@/types/api/common-api-types";
import { Movie } from "@/types/api/get-movies-result";
import { QueryOptions, useQuery } from "@tanstack/react-query";

export const MOVIE_QUERY_KEY = "getMovie";

export const createMovieFn = (id: number, type: string) => {
  return async () => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/movies/${id}?type=${type}`
      );
      const data = await res.json();
      console.log(data);
      console.log(
        `${process.env.NEXT_PUBLIC_API_URL}/movies/${id}?type=${type}`
      );

      return {
        id: data?.id,
        title: data?.title,
        rating_imdb: Math.round(data?.vote_average * 10) / 10,
        poster: `https://image.tmdb.org/t/p/w500${data?.poster_path}`,
        year: data?.release_date?.slice(0, 4),
        description: data?.overview,
        type: "movie",
      } as Movie;
    } catch {
      return null;
    }
  };
};

export const useGetMovie = (
  id: number,
  type: string,
  queryOptions?: QueryOptions<Movie | null, ErrorModelActionResultModel>
) => {
  return useQuery({
    queryKey: [MOVIE_QUERY_KEY],
    queryFn: createMovieFn(id, type),
    ...queryOptions,
  });
};
