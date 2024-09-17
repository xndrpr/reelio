import { Data } from "./common-api-types";

interface Movie {
  id: number;
  title: string;
  description: string;
  poster: string;
  preview_poster: string;
  backdrop: string;
  year: number;
  rating_imdb: number;
  rating_kp: number;
}

interface GetMoviesResult extends Data<Movie> {}
