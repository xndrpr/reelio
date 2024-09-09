import { ErrorModelActionResultModel } from "@/types/api/common-api-types";
import { GetMoviesResult, Movie } from "@/types/api/get-movies-result";
import { QueryOptions, useQuery } from "@tanstack/react-query";

const QUERY_KEY = "getMovies";

const createQueryFn = () => {
  return async () => {
    const res = await fetch(
      "http://localhost:6100/api/movies?offset=1&limit=10"
    );
    const data = await res.json();

    return {
      total: data.length,
      data: data.map(
        (doc: any) =>
          ({
            id: doc.id,
            title: doc.name,
            rating_imdb: doc.rating.imdb,
            rating_kp: doc.rating.kp,
            poster: doc.poster.url,
            year: doc.year,
          } as Movie)
      ),
    } as GetMoviesResult;
  };
};

export const useGetMovies = (
  queryOptions?: QueryOptions<GetMoviesResult, ErrorModelActionResultModel>
) => {
  return useQuery({
    queryKey: [QUERY_KEY],
    queryFn: createQueryFn(),
    staleTime: 1000 * 60 * 60 * 8,
    ...queryOptions,
  });
};
