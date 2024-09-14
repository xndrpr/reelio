import { useInfiniteQuery } from "@tanstack/react-query";

enum MovieType {
  Movie,
  Series,
  Anime,
  Cartoon,
}
const QUERY_KEY = "getMovies";
const LIMIT = 25;

const fetchMovies = async ({
  pageParam = 1,
  type,
}: {
  pageParam?: number;
  type: number;
}) => {
  const res = await fetch(
    `${
      process.env.NEXT_PUBLIC_API_URL
    }/movies?offset=${pageParam}&limit=${LIMIT}&type=${type + 1}`
  );
  const data = await res.json();

  return {
    total: data.data.length,
    data: data.data.map((doc: any) => ({
      id: doc.id,
      title: doc.name,
      rating_imdb: doc.rating.imdb,
      rating_kp: doc.rating.kp,
      poster: doc.poster.url,
      preview_poster: doc.poster.previewUrl || doc.poster.url,
      year: doc.year,
    })),
    pages: data.pages,
  };
};

export const useGetMovies = (type: MovieType) => {
  return useInfiniteQuery({
    queryKey: [QUERY_KEY, type],
    queryFn: ({ pageParam = 1 }) => fetchMovies({ pageParam, type }),
    getNextPageParam: (lastPage, pages) => {
      if (lastPage.data.length > 0) {
        return pages.length + 1;
      }
      return undefined;
    },
    initialPageParam: 1,
  });
};
