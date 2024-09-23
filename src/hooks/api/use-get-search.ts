import { useQuery } from "@tanstack/react-query";

export const SEARCH_QUERY_KEY = "getSearch";

export const searchMovies = (query: string, offset: number) => {
  return async () => {
    const res = await fetch(
      `${process.env.API_URL}/movies/search?query=${query}&offset=${offset}&limit=10`,
      {
        headers: {
          "Content-Type": "application/json",
          secret: `${process.env.SECRET}`,
        },
        next: { revalidate: 60 * 15 },
      }
    );
    const data = await res.json();

    let result;

    if (data?.data) {
      result = {
        data: data.data
          ?.map((doc: any) => ({
            ...doc,
            title: doc?.title || doc?.name,
            rating: Math.round(doc?.vote_average * 10) / 10,
            poster: `https://image.tmdb.org/t/p/w300${doc?.poster_path}`,
            year:
              doc?.release_date?.slice(0, 4) ||
              doc?.first_air_date?.slice(0, 4),
            description: doc?.overview,
            type: doc.type,
          }))
          .filter((doc: any) => doc?.tmdb_id && doc.title && doc.poster),
      };
    } else {
      result = {
        data: data
          ?.map((doc: any) => ({
            ...doc,
            title: doc?.title || doc?.name,
            rating: Math.round(doc?.vote_average * 10) / 10,
            poster: `https://image.tmdb.org/t/p/w300${doc?.poster_path}`,
            year:
              doc?.release_date?.slice(0, 4) ||
              doc?.first_air_date?.slice(0, 4),
            description: doc?.overview,
            type: doc.type,
          }))
          .filter((doc: any) => doc?.tmdb_id && doc.title && doc.poster),
      };
    }

    console.log(result);
    const unique = result.data.filter(
      (v: { tmdb_id: any }, i: any, a: any[]) =>
        a.findIndex((t: { tmdb_id: any }) => t.tmdb_id === v.tmdb_id) === i
    );

    return { ...result, data: unique };
  };
};

export const useGetSearch = (query: string, offset: number) => {
  return useQuery({
    queryKey: query ? [SEARCH_QUERY_KEY, query] : [SEARCH_QUERY_KEY],
    queryFn: searchMovies(query, offset),
  });
};
