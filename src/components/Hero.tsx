import React from 'react';
import { Play, Info, Star, Clock } from 'lucide-react';
import type { Movie } from '../types/movie';

interface HeroProps {
  movie: Movie;
  onPlay: (movie: Movie) => void;
}

export function Hero({ movie, onPlay }: HeroProps) {
  return (
    <div className="relative h-[85vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={movie.thumbnailUrl}
          alt={movie.title}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/80 to-transparent" />
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
        <div className="animate-fade-in">
          <div className="flex items-center gap-3">
            {movie.rating && (
              <div className="flex items-center gap-1">
                <Star className="h-5 w-5 fill-yellow-500 text-yellow-500" />
                <span className="text-lg font-medium text-white">{movie.rating}</span>
              </div>
            )}
            <div className="flex items-center gap-1 text-gray-300">
              <Clock className="h-5 w-5" />
              <span>{movie.duration}</span>
            </div>
            <span className="rounded-full bg-gray-800 px-3 py-1 text-sm text-white">
              {movie.releaseYear}
            </span>
          </div>

          <h1 className="mt-4 text-5xl font-bold text-white md:text-7xl">{movie.title}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-300">{movie.description}</p>
          
          <div className="mt-8 flex items-center gap-4">
            <button
              onClick={() => onPlay(movie)}
              className="group flex items-center gap-2 rounded-lg bg-red-600 px-8 py-4 font-semibold text-white transition-all hover:bg-red-700"
            >
              <Play className="h-5 w-5 transition-transform group-hover:scale-110" fill="white" />
              Play Now
            </button>
            <button className="flex items-center gap-2 rounded-lg bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20">
              <Info className="h-5 w-5" />
              More Info
            </button>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {movie.genre.map((genre) => (
              <span
                key={genre}
                className="rounded-full bg-gray-800 px-4 py-1 text-sm text-gray-300"
              >
                {genre}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}