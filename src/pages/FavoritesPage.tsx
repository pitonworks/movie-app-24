import React, { useState } from 'react';
import { Heart } from 'lucide-react';

export function FavoritesPage() {
  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center text-white">
      <Heart className="h-16 w-16 text-gray-500" />
      <h2 className="mt-4 text-2xl font-bold">Your Favorites</h2>
      <p className="mt-2 text-gray-400">Coming soon! Save your favorite movies here.</p>
    </div>
  );
}