import { Movie, MovieType } from "@/types/movie";
import { useQuery } from "@tanstack/react-query";

export const MOVIES_QUERY_KEY = "getMovies";

export const fetchMovies = (offset: number, period: "day" | "week") => {
  return async (): Promise<Movie[]> => {
    const movie_date = `&release_date.gte=${
      offset <= 500
        ? "2010-01-01"
        : offset <= 1000
        ? "2000-01-01"
        : "1980-01-01"
    }&release_date.lte=${
      offset <= 500
        ? new Date().toISOString().split("T")[0]
        : offset <= 1000
        ? "2009-12-31"
        : "1990-12-31"
    }`;
    const tv_date = `&first_air_date.gte=${
      offset <= 500
        ? "2010-01-01"
        : offset <= 1000
        ? "2000-01-01"
        : "1980-01-01"
    }&first_air_date.lte=${
      offset <= 500
        ? new Date().toISOString().split("T")[0]
        : offset <= 1000
        ? "2009-12-31"
        : "1990-12-31"
    }`;
    const url = `${process.env.API_URL}/trending/all/${period}?include_adult=false&include_video=false&language=ru-RU&page=${offset}`;

    const res = await fetch(url, {
      headers: {
        Authorization: `Bearer ${process.env.API_KEY}`,
      },
      next: { revalidate: 60 * 15 },
    });
    const data = await res.json();

    return data?.results?.map((doc: any) => ({
      ...doc,
      title: doc?.title || doc?.name,
      type: doc?.media_type,
      rating: Math.round(doc?.vote_average * 10) / 10,
      poster:
        doc?.poster_path &&
        `https://image.tmdb.org/t/p/w400${doc?.poster_path}`,
      backdrop:
        doc?.backdrop_path &&
        `https://image.tmdb.org/t/p/w1280${doc?.backdrop_path}`,
      start_year:
        doc?.release_date?.slice(0, 4) || doc?.first_air_date?.slice(0, 4),
      end_year: data?.last_air_date?.slice(0, 4),
    }));
  };
};

export const useGetMovies = (offset: number, period: "day" | "week") => {
  return useQuery({
    queryKey: [MOVIES_QUERY_KEY],
    queryFn: () => fetchMovies(offset, period),
  });
};
