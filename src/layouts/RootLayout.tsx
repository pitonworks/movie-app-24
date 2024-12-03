import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export function RootLayout() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}