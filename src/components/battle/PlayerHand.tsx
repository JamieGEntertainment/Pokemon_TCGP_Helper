import React from 'react';
import { useGameStore } from '../../store/gameStore';

export default function PlayerHand() {
  const { playerHand } = useGameStore();

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Your Hand</h3>
      <div className="flex gap-2 overflow-x-auto pb-4">
        {playerHand.length > 0 ? (
          playerHand.map((card, index) => (
            <div
              key={index}
              className="w-24 h-32 flex-shrink-0 bg-white rounded-lg shadow border-2 border-gray-200 flex items-center justify-center"
            >
              <p className="text-sm text-center">{card.name}</p>
            </div>
          ))
        ) : (
          <div className="w-full text-center text-gray-500">
            No cards in hand
          </div>
        )}
      </div>
    </div>
  );
}