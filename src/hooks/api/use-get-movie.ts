import { ErrorModelActionResultModel } from "@/types/api/common-api-types";
import { Movie } from "@/types/api/get-movies-result";
import { QueryOptions, useQuery } from "@tanstack/react-query";

const QUERY_KEY = "getMovie";

const createQueryFn = (id: number) => {
  return async () => {
    return {
      id,
      title: "Бегущий в лабиринте",
      year: 2015,
      poster: "https://statichdrezka.ac/i/2014/11/8/e92d45ae21c77an98d23n.jpg",
      rating_imdb: 6.8,
      rating_kp: 7.9,
    } as Movie;
  };
};

export const useGetMovie = (
  id: number,
  queryOptions?: QueryOptions<Movie, ErrorModelActionResultModel>
) => {
  return useQuery({
    queryKey: [QUERY_KEY],
    queryFn: createQueryFn(id),
    ...queryOptions,
  });
};
