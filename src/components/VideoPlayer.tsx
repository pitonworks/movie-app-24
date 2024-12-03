import React from 'react';
import { X } from 'lucide-react';
import { Movie } from '../types/movie';

interface VideoPlayerProps {
  movie: Movie;
  onClose: () => void;
}

export function VideoPlayer({ movie, onClose }: VideoPlayerProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
      <button
        onClick={onClose}
        className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
      >
        <X className="h-6 w-6" />
      </button>
      <div className="w-full max-w-6xl px-4">
        <div className="relative pt-[56.25%]">
          <video
            className="absolute inset-0 h-full w-full rounded-lg"
            controls
            autoPlay
            src={movie.videoUrl}
          />
        </div>
      </div>
    </div>
  );
}