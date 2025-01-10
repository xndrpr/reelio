export enum MovieType {
  Movie = "movie",
  TV = "tv",
  Cartoon = "cartoon",
  Anime = "anime",
}

export interface Movie {
  id: number;
  imdb_id: string;
  type: MovieType;
  title: string;
  lower_title: string;
  original_title: string;
  lower_original_title: string;
  overview: string;
  custom_description: string;
  poster: string;
  backdrop: string;
  release_date: string;
  start_year: number;
  end_year: number;
  vote_average: number;
  vote_count: number;
  popularity: number;
  genres: any[];
  original_language: string;
  runtime: number;
  adult: boolean;
  revenue: number;
  budget: number;
  homepage: string;
  tagline: string;
  status: string;
  origin_country: string[];
  belongs_to_collection: any;
  production_companies: any;
  production_countries: any;
  number_of_seasons: number;
  number_of_episodes: number;
  seasons: any;
  spoken_languages: any;
  is_full: boolean;
}
