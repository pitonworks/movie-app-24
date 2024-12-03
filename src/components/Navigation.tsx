import React from 'react';
import { NavLink } from 'react-router-dom';
import { Film, Home, Compass, Heart, Search } from 'lucide-react';
import { cn } from '../lib/utils';

const navItems = [
  { icon: Home, label: 'Home', path: '/' },
  { icon: Compass, label: 'Discover', path: '/discover' },
  { icon: Search, label: 'Search', path: '/search' },
  { icon: Heart, label: 'Favorites', path: '/favorites' },
];

export function Navigation() {
  return (
    <header className="fixed top-0 z-40 w-full border-b border-gray-800 bg-gray-900/95 backdrop-blur supports-[backdrop-filter]:bg-gray-900/75">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        <div className="flex items-center">
          <Film className="h-8 w-8 text-red-500" />
          <h1 className="ml-2 text-2xl font-bold text-white">MovieStream</h1>
        </div>
        
        <nav className="flex items-center space-x-6">
          {navItems.map(({ icon: Icon, label, path }) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                cn(
                  'flex items-center gap-2 text-sm font-medium transition-colors',
                  isActive ? 'text-white' : 'text-gray-400 hover:text-white'
                )
              }
            >
              <Icon className="h-5 w-5" />
              <span>{label}</span>
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}