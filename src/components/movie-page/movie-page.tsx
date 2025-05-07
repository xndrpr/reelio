"use client";

import React from "react";
import BackArrowIcon from "@/assets/icons/back-arrow.svg?react";
import RatingIcon from "@/assets/icons/rating.svg?react";
import { useRouter } from "next/navigation";
import { Movie, MovieType } from "@/types/movie";
import Image from "next/image";
import KinoboxPlayer from "@/shared/components/kino-box";
import { Video } from "@/hooks/api/use-get-videos";
import Link from "next/link";

interface Props {
  movie: Movie;
  type: MovieType;
}

const MoviePage = ({ movie, type }: Props) => {
  const router = useRouter();

  return (
    <div className="relative">
      <div className="fixed top-0 left-0 w-full h-dvh -z-10">
        <div className="absolute inset-0 w-full h-full bg-background/80 backdrop-blur-3xl"></div>
        <Image
          src={movie.backdrop}
          width={1920}
          height={1080}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <button
        className="mt-8 cursor-pointer hover:opacity-80 transition-all ease-in-out duration-300"
        onClick={() => router.push("/")}
      >
        <BackArrowIcon />
      </button>
      <div className="flex flex-col gap-2 mt-8">
        <div className="flex flex-col gap-2">
          <Image
            src={movie.poster}
            width={200}
            height={300}
            alt="Movie Poster"
            className=" rounded-xl"
          />
        </div>
        <div className="flex flex-col gap-2 w-full ">
          <div className="flex flex-col gap-1">
            <h1 className="text-3xl sm:text-4xl text-foreground">
              {movie.title}
            </h1>
            <h3 className="text-sm sm:text-xl text-foreground/50 font-light">
              {movie.original_title}
            </h3>
          </div>
          <div className="flex items-center gap-1 text-rating font-semibold text-base">
            <RatingIcon />
            {movie.vote_average.toFixed(1)}
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-dusty-mauve text-sm sm:text-base md:text-xl capitalize">
              {type === MovieType.TV
                ? `${movie.start_year} – ${
                    movie.end_year || "По настоящее время"
                  }`
                : `${movie.start_year}`}
              {` • ${movie.genres
                .map((g) => g.name.replace("НФ", "Научная Фантастика"))
                .join(", ")}`}
            </p>
            <p className="text-dusty-mauve/80 font-light max-w-[90%] sm:max-w-[50%] text-sm sm:text-base md:text-xl">
              {movie.overview}
            </p>
          </div>

          <div className="mt-4">
            <KinoboxPlayer movie={movie} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoviePage;
