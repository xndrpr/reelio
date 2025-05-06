"use client";

import React from "react";
import { SmartPoster } from "./smart-poster";
import slug from "slug";
import { Movie } from "@/types/movie";
import RatingIcon from "@/assets/icons/rating.svg?react";

interface Props {
  movie: Movie;
}

export const MovieCard = ({ movie }: Props) => {
  if (!movie || !movie.poster || !movie.title) return null;

  return (
    <div className="w-full h-full flex flex-col gap-1">
      <a
        href={`/${movie.type}/${movie.id}-${slug(movie.title)}`}
        className="text-[${fgColor}] no-underline cursor-pointer transition-opacity hover:opacity-70"
      >
        <SmartPoster poster={movie.poster} />
        <div className="flex items-center justify-start gap-1 max-w-[200px] w-full">
          <h3 className="text-sm font-bold whitespace-nowrap overflow-hidden text-ellipsis">
            {movie.title}
          </h3>
        </div>
      </a>
      <div className="flex items-center justify-start gap-1">
        <div className="flex gap-2">
          {movie.vote_average ? (
            <div className="flex items-center justify-center gap-1 font-semibold text-rating text-[11px] h-5">
              <RatingIcon /> {movie.vote_average.toFixed(1)}
            </div>
          ) : null}
          <p className="text-dusty-mauve text-[13px] font-light text-ellipsis">
            {movie.start_year}
          </p>
        </div>
      </div>
    </div>
  );
};
