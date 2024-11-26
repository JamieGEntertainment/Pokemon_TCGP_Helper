import React from 'react';
import { Link } from 'react-router-dom';
import { LibrarySquare, Swords, BookOpen, LayoutGrid } from 'lucide-react';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-blue-600 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center space-x-2">
              <LayoutGrid className="w-8 h-8" />
              <span className="font-bold text-xl">Pokemon TCG Helper</span>
            </Link>
            <div className="flex space-x-4">
              <Link to="/battle" className="flex items-center space-x-1 hover:bg-blue-700 px-3 py-2 rounded">
                <Swords className="w-5 h-5" />
                <span>Battle</span>
              </Link>
              <Link to="/decks" className="flex items-center space-x-1 hover:bg-blue-700 px-3 py-2 rounded">
                <LibrarySquare className="w-5 h-5" />
                <span>Decks</span>
              </Link>
              <Link to="/cards" className="flex items-center space-x-1 hover:bg-blue-700 px-3 py-2 rounded">
                <BookOpen className="w-5 h-5" />
                <span>Card Library</span>
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <main className="max-w-7xl mx-auto px-4 py-6">
        {children}
      </main>
    </div>
  );
}