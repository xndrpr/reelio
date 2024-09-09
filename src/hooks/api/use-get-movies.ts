import { GetMoviesResult, Movie } from "@/types/api/get-movies-result";
import { useInfiniteQuery } from "@tanstack/react-query";

const QUERY_KEY = "getMovies";
const LIMIT = 10;

const fetchMovies = async ({ pageParam = 1 }: { pageParam?: number }) => {
  const res = await fetch(
    `http://localhost:6100/api/movies?offset=${pageParam}&limit=${LIMIT}`
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
          preview_poster: doc.poster.previewUrl || doc.poster.url,
          year: doc.year,
        } as Movie)
    ),
  };
};

export const useGetMovies = () => {
  return useInfiniteQuery({
    queryKey: [QUERY_KEY],
    queryFn: fetchMovies,
    getNextPageParam: (lastPage, pages) => {
      if (lastPage.data.length > 0) {
        return pages.length * 10 + 1;
      }
      return undefined;
    },
    initialPageParam: 1,
  });
};
