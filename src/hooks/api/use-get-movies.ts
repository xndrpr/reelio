import { ErrorModelActionResultModel } from "@/types/api/common-api-types";
import { GetMoviesResult } from "@/types/api/get-movies-result";
import { QueryOptions, useQuery } from "@tanstack/react-query";

const QUERY_KEY = "getMovies";

const createQueryFn = () => {
  return async () => {
    return {
      total: 3,
      data: [
        { id: 1, title: 'Бегущий в лабиринте', year: 2015, poster: 'https://statichdrezka.ac/i/2014/11/8/e92d45ae21c77an98d23n.jpg' },
        { id: 2, title: 'Бегущий в лабиринте: Испытание огнём', year: 2018, poster: 'https://statichdrezka.ac/i/2015/8/17/j2db66ea7c03akc98o30m.jpg' },
        { id: 3, title: 'Бегущий в лабиринте: Лекарство от смерти', year: 2021, poster: 'https://statichdrezka.ac/i/2022/4/1/c8eea40351d73xb39u70p.jpg' },
      ]
    } as GetMoviesResult;
  }
}

export const useGetMovies = (queryOptions?: QueryOptions<GetMoviesResult, ErrorModelActionResultModel>) => {
  return useQuery({
    queryKey: [QUERY_KEY],
    queryFn: createQueryFn(),
    ...queryOptions
  })
}