const QUERY_KEY = "getSearch";

import { QueryOptions, useQuery } from "@tanstack/react-query";
import { Movie } from "@/types/api/get-movies-result";

const createQueryFn = (query: string) => {
  return async () => {
    const res = await fetch(
      `http://192.168.1.4:6100/api/movies/search?query=${query}&offset=1&limit=10`
    );
    const data = await res.json();

    const result = data.map((doc: any) => ({
      id: doc.id,
      title: doc.name,
      rating_imdb: doc.rating.imdb,
      rating_kp: doc.rating.kp,
      poster: doc.poster.url,
      year: doc.year,
    })) as Movie[];

    return result;
  };
};

export const useGetSearch = (
  query: string,
  queryOptions?: QueryOptions<Movie[], Error>
) => {
  return useQuery({
    queryKey: [QUERY_KEY, query],
    queryFn: createQueryFn(query),
    enabled: Boolean(query),
    ...queryOptions,
  });
};
