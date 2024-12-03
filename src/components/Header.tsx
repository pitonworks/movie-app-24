import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Film, Bell, User } from 'lucide-react';
import { cn } from '../lib/utils';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 z-50 w-full transition-all duration-300',
        isScrolled ? 'bg-gray-900/95 backdrop-blur supports-[backdrop-filter]:bg-gray-900/75' : 'bg-transparent'
      )}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4">
        <div className="flex items-center gap-12">
          <div className="flex items-center gap-2">
            <Film className="h-8 w-8 text-red-600" />
            <span className="text-2xl font-bold text-white">MovieStream</span>
          </div>

          <nav className="hidden space-x-6 md:flex">
            {['Home', 'Movies', 'TV Shows', 'New & Popular'].map((item) => (
              <NavLink
                key={item}
                to="#"
                className="text-sm font-medium text-gray-300 transition-colors hover:text-white"
              >
                {item}
              </NavLink>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-6">
          <button className="text-gray-300 hover:text-white">
            <Bell className="h-6 w-6" />
          </button>
          <button className="text-gray-300 hover:text-white">
            <User className="h-6 w-6" />
          </button>
        </div>
      </div>
    </header>
  );
}