import { fetchMovies, MOVIES_QUERY_KEY } from "@/hooks/api/use-get-movies";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { MovieType } from "@/types/movie";
import GreyLogo from "@/assets/grey-logo.svg?react";
import Image from "next/image";
import Movies from "./movies";
import { MovieCard } from "@/app/movie-card";

interface Props {
  type: MovieType;
  offset: string;
}

export default async function MoviesPage({ type, offset }: Props) {
  const queryClient = new QueryClient();
  const weekTrending = await queryClient.fetchQuery({
    queryKey: [MOVIES_QUERY_KEY],
    queryFn: () => fetchMovies(parseInt(offset) || 1, "week")(),
  });
  const dayTrending = await queryClient.fetchQuery({
    queryKey: [MOVIES_QUERY_KEY],
    queryFn: () => fetchMovies(parseInt(offset) || 1, "day")(),
  });

  const defaultBackdrop =
    "https://image.tmdb.org/t/p/original/npD65vPa4vvn1ZHpp3o05A5vdKT.jpg";

  return (
    <>
      <div className="absolute top-0 left-0 w-full h-dvh -z-10">
        <div className="absolute inset-0 w-full h-full bg-background/80 backdrop-blur-3xl"></div>
        <Image
          src={
            weekTrending.find((mov) => mov.backdrop)?.backdrop ||
            defaultBackdrop
          }
          width={1920}
          height={1080}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <HydrationBoundary state={dehydrate(queryClient)}>
        <div>
          <div className="flex gap-6 flex-col w-full justify-center items-center py-16 relative z-10">
            <GreyLogo />
            <div className="flex flex-col justify-center items-center gap-4 max-w-[90%] sm:max-w-[80%] md:max-w-[60%] lg:max-w-[50%] text-center min-[200px]">
              <h1 className="text-3xl">Смотрите фильмы и сериалы</h1>
              <p className="text-dusty-mauve">
                Погрузитесь в захватывающий мир фильмов и сериалов: открывайте
                для себя тысячи увлекательных историй, читайте подробные
                описания, следите за любимыми проектами и находите новые хиты —
                всё это совершенно бесплатно и без ограничений.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <h2 className="font-semibold text-foreground text-2xl">
                Популярно сегодня
              </h2>
              <div className="flex w-full h-full gap-5 overflow-x-auto scrollbar-hide">
                {dayTrending?.map((movie) => (
                  <MovieCard key={movie.id} movie={movie} />
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="font-semibold text-foreground text-2xl">
                Популярно на этой неделе
              </h2>
              <div className="flex w-full h-full gap-5 overflow-x-auto scrollbar-hide">
                {weekTrending?.map((movie) => (
                  <MovieCard key={movie.id} movie={movie} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </HydrationBoundary>
    </>
  );
}
