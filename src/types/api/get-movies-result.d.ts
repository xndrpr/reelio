import { Data } from "./common-api-types";

interface Movie {
  id: number;
  title: string;
  poster: string;
}

interface GetMoviesResult extends Data<Movie> { }