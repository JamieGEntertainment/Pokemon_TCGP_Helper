import React from 'react';
import { useGameStore } from '../../store/gameStore';
import { POCKET_RULES } from '../../constants/gameRules';

export default function BattleField() {
  const { activePokemon, bench, opponentActive, opponentBench } = useGameStore();

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="space-y-8">
        {/* Opponent's field */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Opponent's Field</h3>
          <div className="flex gap-4">
            <div className="w-32 h-44 bg-gray-100 rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center">
              {opponentActive ? (
                <div className="text-center">
                  <img
                    src={opponentActive.imageUrl}
                    alt={opponentActive.name}
                    className="w-24 h-24 object-contain mx-auto"
                  />
                  <p className="text-sm mt-2">{opponentActive.name}</p>
                </div>
              ) : (
                <p className="text-gray-500 text-sm text-center">No Active Pokemon</p>
              )}
            </div>
            <div className="flex gap-2">
              {[...Array(POCKET_RULES.MAX_BENCH_SIZE)].map((_, i) => (
                <div
                  key={i}
                  className="w-24 h-32 bg-gray-100 rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center"
                >
                  {opponentBench[i] ? (
                    <div className="text-center">
                      <img
                        src={opponentBench[i].imageUrl}
                        alt={opponentBench[i].name}
                        className="w-16 h-16 object-contain mx-auto"
                      />
                      <p className="text-xs mt-1">{opponentBench[i].name}</p>
                    </div>
                  ) : (
                    <p className="text-gray-500 text-xs text-center">Empty</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Player's field */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Your Field</h3>
          <div className="flex gap-4">
            <div className="w-32 h-44 bg-gray-100 rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center">
              {activePokemon ? (
                <div className="text-center">
                  <img
                    src={activePokemon.imageUrl}
                    alt={activePokemon.name}
                    className="w-24 h-24 object-contain mx-auto"
                  />
                  <p className="text-sm mt-2">{activePokemon.name}</p>
                </div>
              ) : (
                <p className="text-gray-500 text-sm text-center">No Active Pokemon</p>
              )}
            </div>
            <div className="flex gap-2">
              {[...Array(POCKET_RULES.MAX_BENCH_SIZE)].map((_, i) => (
                <div
                  key={i}
                  className="w-24 h-32 bg-gray-100 rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center"
                >
                  {bench[i] ? (
                    <div className="text-center">
                      <img
                        src={bench[i].imageUrl}
                        alt={bench[i].name}
                        className="w-16 h-16 object-contain mx-auto"
                      />
                      <p className="text-xs mt-1">{bench[i].name}</p>
                    </div>
                  ) : (
                    <p className="text-gray-500 text-xs text-center">Empty</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}