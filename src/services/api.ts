import axios from 'axios';
import { Movie, MovieCategory } from '../types/movie';

const API_KEY = 'dc6zaTOxFJmzC';
const BASE_URL = 'https://api.themoviedb.org/3';

const api = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
  },
});

const mockMovies: Movie[] = [
  {
    id: '1',
    title: 'Inception',
    description: 'A thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1',
    videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    duration: '2:28:00',
    genre: ['Action', 'Sci-Fi', 'Thriller'],
    releaseYear: 2010,
    rating: 4.8,
    isNew: false
  },
  {
    id: '2',
    title: 'The Matrix',
    description: 'A computer programmer discovers that reality as he knows it is a simulation created by machines, and joins a rebellion to break free.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5',
    videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    duration: '2:16:00',
    genre: ['Action', 'Sci-Fi'],
    releaseYear: 1999,
    rating: 4.9,
    isNew: false
  },
  {
    id: '3',
    title: 'Interstellar',
    description: 'A team of explorers travel through a wormhole in space in an attempt to ensure humanity\'s survival.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa',
    videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4',
    duration: '2:49:00',
    genre: ['Adventure', 'Drama', 'Sci-Fi'],
    releaseYear: 2014,
    rating: 4.7,
    isNew: false
  },
  {
    id: '4',
    title: 'Blade Runner 2049',
    description: 'A young blade runner\'s discovery of a long-buried secret leads him to track down former blade runner Rick Deckard.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1485163819542-13adeb5e0068',
    videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    duration: '2:44:00',
    genre: ['Action', 'Drama', 'Sci-Fi'],
    releaseYear: 2017,
    rating: 4.5,
    isNew: true
  },
  {
    id: '5',
    title: 'Arrival',
    description: 'A linguist works with the military to communicate with alien lifeforms after twelve mysterious spacecraft appear around the world.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa',
    videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    duration: '1:56:00',
    genre: ['Drama', 'Sci-Fi'],
    releaseYear: 2016,
    rating: 4.6,
    isNew: true
  }
];

export const movieService = {
  async getTrending(): Promise<Movie[]> {
    return mockMovies;
  },

  async getNewReleases(): Promise<Movie[]> {
    return mockMovies.filter(movie => movie.isNew);
  },

  async getPopular(): Promise<Movie[]> {
    return mockMovies.sort((a, b) => (b.rating || 0) - (a.rating || 0));
  },

  async getCategories(): Promise<MovieCategory[]> {
    const genres = Array.from(new Set(mockMovies.flatMap(movie => movie.genre)));
    return genres.map(genre => ({
      id: genre.toLowerCase(),
      name: genre,
      movies: mockMovies.filter(movie => movie.genre.includes(genre))
    }));
  },

  async searchMovies(query: string): Promise<Movie[]> {
    return mockMovies.filter(movie =>
      movie.title.toLowerCase().includes(query.toLowerCase()) ||
      movie.description.toLowerCase().includes(query.toLowerCase())
    );
  },

  async getMovieById(id: string): Promise<Movie | undefined> {
    return mockMovies.find(movie => movie.id === id);
  }
};