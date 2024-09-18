import { useQuery } from "@tanstack/react-query";

export const SEARCH_QUERY_KEY = "getSearch";

export const searchMovies = (query: string, offset: number) => {
  return async () => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/movies/search?query=${query}&offset=${offset}&limit=10`
    );
    const data = await res.json();

    return {
      total: data?.data?.length || 0,
      data: data?.data?.map((doc: any) => ({
        id: doc?.id,
        title: doc?.title || doc?.name,
        rating_imdb: Math.round(doc?.vote_average * 10) / 10,
        poster: `https://image.tmdb.org/t/p/w500${doc?.poster_path}`,
        year:
          doc?.release_date?.slice(0, 4) || doc?.first_air_date?.slice(0, 4),
        description: doc?.overview,
        type: doc?.media_type,
      })),
      pages: data?.pages || 0,
    };
  };
};

export const useGetSearch = (query: string, offset: number) => {
  return useQuery({
    queryKey: [SEARCH_QUERY_KEY, query],
    queryFn: searchMovies(query, offset),
  });
};
