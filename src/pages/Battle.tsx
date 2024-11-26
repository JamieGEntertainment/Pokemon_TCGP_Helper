import React from 'react';
import { useGameStore } from '../store/gameStore';
import BattleField from '../components/battle/BattleField';
import PlayerHand from '../components/battle/PlayerHand';
import MoveAdvisor from '../components/battle/MoveAdvisor';

export default function Battle() {
  const { playerHand, activePokemon, bench } = useGameStore();

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-900">Battle Assistant</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <BattleField />
        </div>
        <div>
          <MoveAdvisor />
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow p-4">
        <PlayerHand />
      </div>
    </div>
  );
}