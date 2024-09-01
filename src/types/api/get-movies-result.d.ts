import { Data } from "./common-api-types";

interface Movie {
  id: number;
  title: string;
  poster: string;
  year: number;
}

interface GetMoviesResult extends Data<Movie> { }