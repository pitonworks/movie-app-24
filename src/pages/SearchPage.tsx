import React, { useState } from 'react';
import { Search, Loader2 } from 'lucide-react';
import { MovieGrid } from '../components/MovieGrid';
import { VideoPlayer } from '../components/VideoPlayer';
import { useMovieSearch } from '../hooks/useMovies';
import type { Movie } from '../types/movie';

export function SearchPage() {
  const [query, setQuery] = useState('');
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const { data: movies, isLoading } = useMovieSearch(query);

  return (
    <div className="space-y-6">
      <div className="relative">
        <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Search movies..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full rounded-lg bg-gray-800 py-3 pl-12 pr-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
        />
      </div>

      {isLoading && query && (
        <div className="flex justify-center py-12">
          <Loader2 className="h-8 w-8 animate-spin text-white" />
        </div>
      )}

      {query && movies && movies.length > 0 && (
        <MovieGrid
          movies={movies}
          onMovieClick={(movie) => setSelectedMovie(movie)}
        />
      )}

      {query && movies && movies.length === 0 && (
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <Search className="h-12 w-12 text-gray-500" />
          <h3 className="mt-4 text-xl font-semibold text-white">No results found</h3>
          <p className="mt-2 text-gray-400">Try adjusting your search terms</p>
        </div>
      )}

      {selectedMovie && (
        <VideoPlayer
          movie={selectedMovie}
          onClose={() => setSelectedMovie(null)}
        />
      )}
    </div>
  );
}