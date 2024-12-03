import { useQuery } from 'react-query';
import { movieService } from '../services/api';

export function useMovies() {
  return useQuery('movies', () => movieService.getTrending());
}

export function useNewReleases() {
  return useQuery('new-releases', () => movieService.getNewReleases());
}

export function usePopularMovies() {
  return useQuery('popular', () => movieService.getPopular());
}

export function useCategories() {
  return useQuery('categories', () => movieService.getCategories());
}

export function useMovie(id: string) {
  return useQuery(['movie', id], () => movieService.getMovieById(id));
}

export function useMovieSearch(query: string) {
  return useQuery(['movies', query], () => movieService.searchMovies(query), {
    enabled: query.length > 0,
  });
}