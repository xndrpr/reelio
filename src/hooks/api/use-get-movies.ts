import { MovieType } from "@/types/movie";
import { useQuery } from "@tanstack/react-query";

export const MOVIES_QUERY_KEY = "getMovies";

function typeToId(type: MovieType): number | null {
  if (type === MovieType.Anime) return 210024;
  else return null;
}

export const fetchMovies = (offset: number, type: MovieType) => {
  return async () => {
    if (!process.env.API_KEY) return [];

    const tmdbType =
      type === MovieType.Cartoon || type == MovieType.Movie
        ? MovieType.Movie
        : MovieType.TV;
    const keyword = typeToId(type);

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
    const url = `${
      process.env.API_URL
    }/discover/${tmdbType}?include_adult=false&include_video=false&language=ru-RU&page=${
      offset <= 500 ? offset : offset - 500
    }&sort_by=vote_count.desc${keyword ? `&with_keywords=${keyword}` : ""}${
      tmdbType === MovieType.Movie ? movie_date : tv_date
    }${
      type === MovieType.Cartoon || type === MovieType.Anime
        ? "&with_genres=16"
        : ""
    }`;

    const res = await fetch(url, {
      headers: {
        Authorization: `Bearer ${process.env.API_KEY}`,
      },
      next: { revalidate: 60 * 15 },
    });
    const data = await res.json();

    return {
      total: data?.total_pages || 0,
      data: data?.results?.map((doc: any) => ({
        ...doc,
        title: doc?.title || doc?.name,
        type: tmdbType,
        rating: Math.round(doc?.vote_average * 10) / 10,
        poster:
          doc?.poster_path &&
          `https://image.tmdb.org/t/p/w400${doc?.poster_path}`,
        year:
          doc?.release_date?.slice(0, 4) || doc?.first_air_date?.slice(0, 4),
        end_year: data?.last_air_date?.slice(0, 4),
      })),
    };
  };
};

export const useGetMovies = (offset: number, type: MovieType) => {
  return useQuery({
    queryKey: [MOVIES_QUERY_KEY, type],
    queryFn: () => fetchMovies(offset, type),
  });
};
