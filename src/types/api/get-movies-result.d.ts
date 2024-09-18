import { Data } from "./common-api-types";

interface Movie {
  type: string;
  id: number;
  title: string;
  original_title: string;
  description: string;
  poster: string;
  preview_poster: string;
  backdrop: string;
  year: number;
  end_year?: number;
  rating: number;
  seasons_count?: number;
}

interface GetMoviesResult extends Data<Movie> {}
