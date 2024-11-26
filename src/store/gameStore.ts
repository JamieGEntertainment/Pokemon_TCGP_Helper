import { create } from 'zustand';
import type { PokemonCard, Deck } from '../types/card';

interface GameState {
  playerHand: PokemonCard[];
  activePokemon: PokemonCard | null;
  bench: PokemonCard[];
  opponentActive: PokemonCard | null;
  opponentBench: PokemonCard[];
  selectedDeck: Deck | null;
  setPlayerHand: (hand: PokemonCard[]) => void;
  setActivePokemon: (pokemon: PokemonCard | null) => void;
  setBench: (bench: PokemonCard[]) => void;
  setOpponentActive: (pokemon: PokemonCard | null) => void;
  setOpponentBench: (bench: PokemonCard[]) => void;
  setSelectedDeck: (deck: Deck | null) => void;
}

export const useGameStore = create<GameState>((set) => ({
  playerHand: [],
  activePokemon: null,
  bench: [],
  opponentActive: null,
  opponentBench: [],
  selectedDeck: null,
  setPlayerHand: (hand) => set({ playerHand: hand }),
  setActivePokemon: (pokemon) => set({ activePokemon: pokemon }),
  setBench: (bench) => set({ bench }),
  setOpponentActive: (pokemon) => set({ opponentActive: pokemon }),
  setOpponentBench: (bench) => set({ opponentBench: bench }),
  setSelectedDeck: (deck) => set({ selectedDeck: deck }),
}));