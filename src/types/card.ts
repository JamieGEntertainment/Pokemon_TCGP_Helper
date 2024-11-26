export interface PokemonCard {
  id: string;
  name: string;
  type: string;
  hp: number;
  stage: string;
  abilities?: Ability[];
  attacks?: Attack[];
  weaknesses?: Weakness[];
  retreatCost: number;
  imageUrl: string;
}

export interface Ability {
  name: string;
  description: string;
}

export interface Attack {
  name: string;
  cost: string[];
  damage: number;
  description: string;
}

export interface Weakness {
  type: string;
  value: string;
}

export interface Deck {
  id: string;
  name: string;
  cards: PokemonCard[];
  creator: string;
  description?: string;
  isMetaDeck?: boolean;
}