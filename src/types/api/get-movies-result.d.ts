import { Data } from "./common-api-types";

interface Movie {
  type: string;
  id: number;
  title: string;
  description: string;
  poster: string;
  preview_poster: string;
  backdrop: string;
  year: number;
  end_year?: number;
  rating_imdb: number;
  rating_kp: number;
}

interface GetMoviesResult extends Data<Movie> {}
