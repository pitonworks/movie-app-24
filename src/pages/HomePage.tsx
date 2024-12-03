import React, { useState } from 'react';
import { Hero } from '../components/Hero';
import { MovieSlider } from '../components/MovieSlider';
import { VideoPlayer } from '../components/VideoPlayer';
import { useMovies, useNewReleases, usePopularMovies, useCategories } from '../hooks/useMovies';
import type { Movie } from '../types/movie';
import { Loader2 } from 'lucide-react';

export function HomePage() {
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const { data: trending, isLoading: trendingLoading } = useMovies();
  const { data: newReleases, isLoading: newLoading } = useNewReleases();
  const { data: popular, isLoading: popularLoading } = usePopularMovies();
  const { data: categories, isLoading: categoriesLoading } = useCategories();

  const isLoading = trendingLoading || newLoading || popularLoading || categoriesLoading;

  if (isLoading) {
    return (
      <div className="flex min-h-[50vh] items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-white" />
      </div>
    );
  }

  const featuredMovie = trending?.[0];

  return (
    <div>
      {featuredMovie && (
        <Hero
          movie={featuredMovie}
          onPlay={(movie) => setSelectedMovie(movie)}
        />
      )}

      <div className="mx-auto max-w-7xl space-y-12 px-4 py-12">
        {trending && trending.length > 0 && (
          <MovieSlider
            title="Trending Now"
            movies={trending}
            onMovieClick={setSelectedMovie}
          />
        )}

        {newReleases && newReleases.length > 0 && (
          <MovieSlider
            title="New Releases"
            movies={newReleases}
            onMovieClick={setSelectedMovie}
          />
        )}

        {popular && popular.length > 0 && (
          <MovieSlider
            title="Popular Movies"
            movies={popular}
            onMovieClick={setSelectedMovie}
          />
        )}

        {categories?.map((category) => (
          <MovieSlider
            key={category.id}
            title={category.name}
            movies={category.movies}
            onMovieClick={setSelectedMovie}
          />
        ))}
      </div>

      {selectedMovie && (
        <VideoPlayer
          movie={selectedMovie}
          onClose={() => setSelectedMovie(null)}
        />
      )}
    </div>
  );
}