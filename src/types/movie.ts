export enum MovieType {
  Movie = "movie",
  TV = "tv",
  Cartoon = "cartoon",
  Anime = "anime",
}

export interface Movie {
  type: MovieType;
  id: string;
  tmdb_id: number;
  imdb_id?: string;
  title: string;
  original_title: string;
  description: string;
  custom_description?: string;
  poster: string;
  preview_poster: string;
  backdrop: string;
  start_year: number;
  end_year?: number;
  rating: number;
  seasons_count?: number;
}
