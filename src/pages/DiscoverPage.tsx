import React from 'react';
import { Compass } from 'lucide-react';

export function DiscoverPage() {
  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center text-white">
      <Compass className="h-16 w-16 text-gray-500" />
      <h2 className="mt-4 text-2xl font-bold">Discover New Movies</h2>
      <p className="mt-2 text-gray-400">Coming soon! Browse through our curated collections.</p>
    </div>
  );
}