import { POCKET_RULES } from '../constants/gameRules';
import type { Deck, PokemonCard } from '../types/card';

export function validateDeck(deck: Deck): { isValid: boolean; errors: string[] } {
  const errors: string[] = [];

  // Check deck size
  if (deck.cards.length !== POCKET_RULES.DECK_SIZE) {
    errors.push(`Deck must contain exactly ${POCKET_RULES.DECK_SIZE} cards`);
  }

  // Count card copies
  const cardCounts = new Map<string, number>();
  deck.cards.forEach(card => {
    const count = cardCounts.get(card.name) || 0;
    cardCounts.set(card.name, count + 1);
  });

  // Check for card limits (max 4 copies of any card)
  cardCounts.forEach((count, cardName) => {
    if (count > 4) {
      errors.push(`Deck contains more than 4 copies of ${cardName}`);
    }
  });

  return {
    isValid: errors.length === 0,
    errors
  };
}