import React from 'react';
import DeckList from '../components/decks/DeckList';
import DeckBuilder from '../components/decks/DeckBuilder';
import MetaDecks from '../components/decks/MetaDecks';

export default function Decks() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-900">Deck Manager</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <DeckBuilder />
        </div>
        <div>
          <DeckList />
          <div className="mt-6">
            <MetaDecks />
          </div>
        </div>
      </div>
    </div>
  );
}