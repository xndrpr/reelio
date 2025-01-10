import { useQuery } from "@tanstack/react-query";

export const SEARCH_QUERY_KEY = "getSearch";

export const searchMovies = (query: string) => {
  return async () => {
    const res = await fetch(
      `${process.env.API_URL}/search/multi?query=${query}&language=ru-RU`,
      {
        headers: {
          Authorization: `Bearer ${process.env.API_KEY}`,
        },
        next: { revalidate: 60 * 15 },
      }
    );
    const data = await res.json();

    let result;

    if (data?.results) {
      result = {
        data: data.results
          ?.map(
            (doc: any) =>
              doc.media_type !== "person" && {
                ...doc,
                type: doc.media_type,
                title: doc?.title || doc?.name,
                rating: Math.round(doc?.vote_average * 10) / 10,
                poster: `https://image.tmdb.org/t/p/w300${doc?.poster_path}`,
                year:
                  doc?.release_date?.slice(0, 4) ||
                  doc?.first_air_date?.slice(0, 4),
                description: doc?.overview,
              }
          )
          .filter((doc: any) => doc?.id && doc.title && doc.poster),
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
            type: doc.media_type,
          }))
          .filter((doc: any) => doc?.id && doc.title && doc.poster),
      };
    }

    console.log(result);
    const unique = result.data.filter(
      (v: { id: any }, i: any, a: any[]) =>
        a.findIndex((t: { id: any }) => t.id === v.id) === i
    );

    return { ...result, data: unique };
  };
};

export const useGetSearch = (query: string) => {
  return useQuery({
    queryKey: query ? [SEARCH_QUERY_KEY, query] : [SEARCH_QUERY_KEY],
    queryFn: searchMovies(query),
  });
};
