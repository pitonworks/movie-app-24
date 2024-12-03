import React from 'react';
import { ChevronRight } from 'lucide-react';
import { MovieCard } from './MovieCard';
import type { Movie } from '../types/movie';
import { cn } from '../lib/utils';

interface MovieSectionProps {
  title: string;
  movies: Movie[];
  onMovieClick: (movie: Movie) => void;
  className?: string;
}

export function MovieSection({ title, movies, onMovieClick, className }: MovieSectionProps) {
  return (
    <section className={cn("space-y-4", className)}>
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white">{title}</h2>
        <button className="flex items-center gap-1 text-sm text-gray-400 hover:text-white">
          View All <ChevronRight className="h-4 w-4" />
        </button>
      </div>
      <div className="relative">
        <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              onClick={onMovieClick}
              className="min-w-[300px]"
            />
          ))}
        </div>
      </div>
    </section>
  );
}