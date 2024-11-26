import React, { useState } from 'react';
import { useGameStore } from '../../store/gameStore';
import type { PokemonCard } from '../../types/card';
import { Plus, X } from 'lucide-react';
import { POCKET_RULES } from '../../constants/gameRules';
import { validateDeck } from '../../utils/deckValidation';

export default function DeckBuilder() {
  const { selectedDeck } = useGameStore();
  const [searchTerm, setSearchTerm] = useState('');
  const [validationErrors, setValidationErrors] = useState<string[]>([]);
  
  // Placeholder available cards for demonstration
  const availableCards: PokemonCard[] = [];

  const handleSave = () => {
    if (selectedDeck) {
      const { isValid, errors } = validateDeck(selectedDeck);
      setValidationErrors(errors);
      
      if (isValid) {
        // Save deck logic here
        setValidationErrors([]);
      }
    }
  };

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">
          {selectedDeck ? `Editing: ${selectedDeck.name}` : 'Create New Deck'}
        </h2>
        {selectedDeck && (
          <button 
            onClick={handleSave}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Save Changes
          </button>
        )}
      </div>

      {validationErrors.length > 0 && (
        <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
          <h4 className="text-red-800 font-medium mb-2">Deck Validation Errors:</h4>
          <ul className="list-disc list-inside text-red-700">
            {validationErrors.map((error, index) => (
              <li key={index}>{error}</li>
            ))}
          </ul>
        </div>
      )}

      <div className="mb-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
        <h4 className="text-blue-800 font-medium">Pokemon TCG Pocket Rules:</h4>
        <ul className="list-disc list-inside text-blue-700 mt-2">
          <li>Deck must contain exactly {POCKET_RULES.DECK_SIZE} cards</li>
          <li>Maximum {POCKET_RULES.MAX_BENCH_SIZE} Pokemon on bench</li>
          <li>Maximum 4 copies of any card</li>
        </ul>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="font-medium mb-3">Available Cards</h3>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search cards..."
            className="w-full px-3 py-2 border border-gray-300 rounded-md mb-4"
          />
          <div className="h-[600px] overflow-y-auto space-y-2">
            {availableCards.map((card) => (
              <div
                key={card.id}
                className="flex items-center justify-between p-2 border border-gray-200 rounded hover:bg-gray-50"
              >
                <div className="flex items-center space-x-2">
                  <img
                    src={card.imageUrl}
                    alt={card.name}
                    className="w-10 h-10 object-cover rounded"
                  />
                  <div>
                    <p className="font-medium">{card.name}</p>
                    <p className="text-sm text-gray-500">{card.type}</p>
                  </div>
                </div>
                <button 
                  className="p-1 hover:bg-gray-200 rounded"
                  disabled={selectedDeck?.cards.length === POCKET_RULES.DECK_SIZE}
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-medium mb-3">
            Current Deck ({selectedDeck?.cards.length || 0}/{POCKET_RULES.DECK_SIZE})
          </h3>
          {selectedDeck ? (
            <div className="h-[600px] overflow-y-auto space-y-2">
              {selectedDeck.cards.map((card) => (
                <div
                  key={card.id}
                  className="flex items-center justify-between p-2 border border-gray-200 rounded hover:bg-gray-50"
                >
                  <div className="flex items-center space-x-2">
                    <img
                      src={card.imageUrl}
                      alt={card.name}
                      className="w-10 h-10 object-cover rounded"
                    />
                    <div>
                      <p className="font-medium">{card.name}</p>
                      <p className="text-sm text-gray-500">{card.type}</p>
                    </div>
                  </div>
                  <button className="p-1 hover:bg-gray-200 rounded text-red-500">
                    <X className="w-5 h-5" />
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div className="h-[600px] flex items-center justify-center border-2 border-dashed border-gray-300 rounded-lg">
              <p className="text-gray-500">
                Select a deck to edit or create a new one
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}