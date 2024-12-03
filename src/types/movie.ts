export interface Movie {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  videoUrl: string;
  duration: string;
  genre: string[];
  releaseYear: number;
  rating?: number;
  isNew?: boolean;
}

export type MovieCategory = {
  id: string;
  name: string;
  movies: Movie[];
};