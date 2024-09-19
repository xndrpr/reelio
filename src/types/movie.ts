export enum MovieType {
  MOVIE = 0,
  TV = 1,
}

export interface Movie {
  type: string | number;
  id: string;
  tmdbId: number;
  imdbId?: string;
  title: string;
  original_title: string;
  description: string;
  custom_description?: string;
  poster: string;
  preview_poster: string;
  backdrop: string;
  year: number;
  end_year?: number;
  rating: number;
  seasons_count?: number;
}
