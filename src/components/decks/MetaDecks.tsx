import React from 'react';
import type { Deck } from '../../types/card';
import { Download } from 'lucide-react';

export default function MetaDecks() {
  // Placeholder meta decks for demonstration
  const metaDecks: Deck[] = [];

  return (
    <div className="bg-white rounded-lg shadow p-4">
      <h3 className="font-semibold mb-4">Meta Decks</h3>
      
      <div className="space-y-3">
        {metaDecks.length > 0 ? (
          metaDecks.map((deck) => (
            <div
              key={deck.id}
              className="p-3 border border-gray-200 rounded-lg hover:bg-gray-50"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-medium">{deck.name}</h4>
                  <p className="text-sm text-gray-500">
                    by {deck.creator}
                  </p>
                </div>
                <button className="p-1 hover:bg-gray-200 rounded">
                  <Download className="w-5 h-5" />
                </button>
              </div>
              {deck.description && (
                <p className="text-sm text-gray-600 mt-2">
                  {deck.description}
                </p>
              )}
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 py-4">
            No meta decks available
          </p>
        )}
      </div>
    </div>
  );
}