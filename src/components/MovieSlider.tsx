import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { Movie } from '../types/movie';
import { MovieCard } from './MovieCard';

interface MovieSliderProps {
  title: string;
  movies: Movie[];
  onMovieClick: (movie: Movie) => void;
}

export function MovieSlider({ title, movies, onMovieClick }: MovieSliderProps) {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (!sliderRef.current) return;
    const scrollAmount = direction === 'left' ? -300 : 300;
    sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  return (
    <div className="relative space-y-3">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-white">{title}</h2>
        <button className="text-sm text-gray-400 transition-colors hover:text-white">
          View All
        </button>
      </div>
      
      <div className="group relative">
        <button
          onClick={() => scroll('left')}
          className="absolute -left-4 top-1/2 z-10 hidden -translate-y-1/2 rounded-full bg-black/80 p-2 text-white opacity-0 shadow-xl backdrop-blur-sm transition-all hover:bg-black group-hover:opacity-100 md:block"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        <div
          ref={sliderRef}
          className="flex gap-3 overflow-x-auto scroll-smooth pb-4 pt-1 scrollbar-hide"
        >
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              onClick={onMovieClick}
              className="min-w-[200px] flex-shrink-0 md:min-w-[240px]"
            />
          ))}
        </div>

        <button
          onClick={() => scroll('right')}
          className="absolute -right-4 top-1/2 z-10 hidden -translate-y-1/2 rounded-full bg-black/80 p-2 text-white opacity-0 shadow-xl backdrop-blur-sm transition-all hover:bg-black group-hover:opacity-100 md:block"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}