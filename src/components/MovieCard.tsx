import React from 'react';
import { Play, Star, Clock } from 'lucide-react';
import { Movie } from '../types/movie';
import { cn } from '../lib/utils';

interface MovieCardProps {
  movie: Movie;
  onClick: (movie: Movie) => void;
  className?: string;
}

export function MovieCard({ movie, onClick, className }: MovieCardProps) {
  return (
    <div 
      className={cn(
        "group relative h-[280px] cursor-pointer overflow-hidden rounded-lg transition-all duration-300 hover:ring-2 hover:ring-red-500",
        className
      )}
      onClick={() => onClick(movie)}
    >
      <img
        src={movie.thumbnailUrl}
        alt={movie.title}
        className="h-full w-full object-cover transition-all duration-300 group-hover:scale-105 group-hover:brightness-[0.3]"
      />
      
      {movie.isNew && (
        <div className="absolute right-2 top-2 rounded-full bg-red-500 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
          New
        </div>
      )}

      <div className="absolute inset-x-0 bottom-0 p-4">
        <div className="transform space-y-2 transition-all duration-300 group-hover:translate-y-0">
          <div className="flex items-center gap-2">
            {movie.rating && (
              <div className="flex items-center gap-1 rounded bg-black/50 px-1.5 py-0.5 text-xs backdrop-blur-sm">
                <Star className="h-3 w-3 fill-yellow-500 text-yellow-500" />
                <span className="font-medium text-white">{movie.rating}</span>
              </div>
            )}
            <div className="flex items-center gap-1 rounded bg-black/50 px-1.5 py-0.5 text-xs text-white backdrop-blur-sm">
              <Clock className="h-3 w-3" />
              {movie.duration}
            </div>
          </div>

          <h3 className="text-sm font-bold text-white md:text-base">{movie.title}</h3>
          
          <div className="flex flex-wrap gap-1">
            {movie.genre.slice(0, 2).map((genre) => (
              <span
                key={genre}
                className="rounded bg-black/50 px-1.5 py-0.5 text-[10px] text-gray-300 backdrop-blur-sm"
              >
                {genre}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <button className="flex items-center gap-2 rounded-full bg-red-600 px-4 py-2 text-sm font-semibold text-white transition-transform hover:bg-red-700 group-hover:scale-110">
          <Play className="h-4 w-4" fill="white" />
          Play
        </button>
      </div>
    </div>
  );
}