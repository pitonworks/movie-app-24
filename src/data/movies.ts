import { Movie } from '../types/movie';

export const movies: Movie[] = [
  {
    id: '1',
    title: 'Big Buck Bunny',
    description: 'A large and lovable rabbit deals with three tiny bullies who harass him and other forest creatures.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1590179068383-b9c69aacebd3',
    videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    duration: '9:56',
    genre: ['Animation', 'Short', 'Comedy'],
    releaseYear: 2008
  },
  {
    id: '2',
    title: 'Elephant\'s Dream',
    description: 'The first Blender Open Movie from 2006',
    thumbnailUrl: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba',
    videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    duration: '10:53',
    genre: ['Animation', 'Sci-Fi'],
    releaseYear: 2006
  },
  {
    id: '3',
    title: 'Sintel',
    description: 'A lonely young woman searches for a dragon in a fantasy world.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1626814026160-2237a95fc5a0',
    videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4',
    duration: '14:48',
    genre: ['Animation', 'Fantasy'],
    releaseYear: 2010
  }
];