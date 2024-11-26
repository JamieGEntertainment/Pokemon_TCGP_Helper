import React from 'react';
import { useGameStore } from '../../store/gameStore';
import type { Deck } from '../../types/card';
import { LibrarySquare } from 'lucide-react';

export default function DeckList() {
  const { selectedDeck, setSelectedDeck } = useGameStore();
  
  // Placeholder decks for demonstration
  const decks: Deck[] = [];

  return (
    <div className="bg-white rounded-lg shadow p-4">
      <h3 className="font-semibold mb-4">Your Decks</h3>
      
      <div className="space-y-3">
        {decks.length > 0 ? (
          decks.map((deck) => (
            <button
              key={deck.id}
              onClick={() => setSelectedDeck(deck)}
              className={`w-full text-left p-3 rounded-lg border ${
                selectedDeck?.id === deck.id
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-gray-200 hover:bg-gray-50'
              }`}
            >
              <div className="flex items-center space-x-3">
                <LibrarySquare className="w-5 h-5 text-gray-500" />
                <div>
                  <h4 className="font-medium">{deck.name}</h4>
                  <p className="text-sm text-gray-500">
                    {deck.cards.length} cards
                  </p>
                </div>
              </div>
            </button>
          ))
        ) : (
          <p className="text-center text-gray-500 py-4">
            No decks created yet
          </p>
        )}
      </div>
    </div>
  );
}