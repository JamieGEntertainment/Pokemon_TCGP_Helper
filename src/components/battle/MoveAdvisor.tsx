import React from 'react';
import { useGameStore } from '../../store/gameStore';

export default function MoveAdvisor() {
  const { playerHand, activePokemon, opponentActive } = useGameStore();

  return (
    <div className="bg-white rounded-lg shadow p-4">
      <h3 className="text-lg font-semibold mb-4">Move Advisor</h3>
      
      {activePokemon ? (
        <div className="space-y-4">
          <div className="p-4 bg-blue-50 rounded-lg">
            <h4 className="font-medium text-blue-900">Recommended Move:</h4>
            <p className="text-blue-800 mt-2">
              Analysis will appear here based on the current game state.
            </p>
          </div>
          
          <div className="space-y-2">
            <h4 className="font-medium">Available Options:</h4>
            <ul className="list-disc list-inside text-gray-700">
              <li>Option 1</li>
              <li>Option 2</li>
              <li>Option 3</li>
            </ul>
          </div>
        </div>
      ) : (
        <p className="text-gray-500">
          Select an active Pokemon to receive move recommendations.
        </p>
      )}
    </div>
  );
}