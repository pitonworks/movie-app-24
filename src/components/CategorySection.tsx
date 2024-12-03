import React from 'react';
import { MovieSection } from './MovieSection';
import type { MovieCategory, Movie } from '../types/movie';

interface CategorySectionProps {
  category: MovieCategory;
  onMovieClick: (movie: Movie) => void;
}

export function CategorySection({ category, onMovieClick }: CategorySectionProps) {
  return (
    <MovieSection
      title={category.name}
      movies={category.movies}
      onMovieClick={onMovieClick}
    />
  );
}