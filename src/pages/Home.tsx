import React from 'react';
import { Link } from 'react-router-dom';
import { Swords, LibrarySquare, BookOpen } from 'lucide-react';

export default function Home() {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Pokemon TCG Decision Helper
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Make better decisions in your Pokemon TCG battles with our advanced analysis tools and deck building assistance.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mt-8">
        <Link to="/battle" className="transform hover:scale-105 transition-transform">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center justify-center w-12 h-12 bg-red-100 rounded-full mb-4">
              <Swords className="w-6 h-6 text-red-600" />
            </div>
            <h2 className="text-xl font-semibold mb-2">Battle Assistant</h2>
            <p className="text-gray-600">
              Get real-time suggestions for your next move based on your hand and the current game state.
            </p>
          </div>
        </Link>

        <Link to="/decks" className="transform hover:scale-105 transition-transform">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4">
              <LibrarySquare className="w-6 h-6 text-blue-600" />
            </div>
            <h2 className="text-xl font-semibold mb-2">Deck Builder</h2>
            <p className="text-gray-600">
              Create and manage your decks, or explore top meta decks from the community.
            </p>
          </div>
        </Link>

        <Link to="/cards" className="transform hover:scale-105 transition-transform">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-4">
              <BookOpen className="w-6 h-6 text-green-600" />
            </div>
            <h2 className="text-xl font-semibold mb-2">Card Library</h2>
            <p className="text-gray-600">
              Browse the complete collection of Pokemon TCG cards with detailed information.
            </p>
          </div>
        </Link>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg mt-8">
        <h2 className="text-2xl font-semibold mb-4">Getting Started</h2>
        <div className="space-y-4">
          <p className="text-gray-600">
            1. Browse the Card Library to familiarize yourself with available cards
          </p>
          <p className="text-gray-600">
            2. Create your deck or import a meta deck from our collection
          </p>
          <p className="text-gray-600">
            3. Use the Battle Assistant during matches for optimal play suggestions
          </p>
        </div>
      </div>
    </div>
  );
}