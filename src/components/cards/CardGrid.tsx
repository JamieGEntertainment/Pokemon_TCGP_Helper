import React from 'react';
import type { PokemonCard } from '../../types/card';

interface CardGridProps {
  searchTerm: string;
  filters: {
    type: string;
    stage: string;
  };
}

export default function CardGrid({ searchTerm, filters }: CardGridProps) {
  // Placeholder cards for demonstration
  const cards: PokemonCard[] = [];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
      {cards.length > 0 ? (
        cards.map((card) => (
          <div key={card.id} className="bg-white rounded-lg shadow p-4">
            <div className="aspect-w-3 aspect-h-4 mb-2">
              <img
                src={card.imageUrl}
                alt={card.name}
                className="w-full h-full object-cover rounded"
              />
            </div>
            <h3 className="font-medium text-gray-900">{card.name}</h3>
            <p className="text-sm text-gray-500">{card.type}</p>
          </div>
        ))
      ) : (
        <div className="col-span-full text-center text-gray-500 py-8">
          No cards found matching your criteria
        </div>
      )}
    </div>
  );
}