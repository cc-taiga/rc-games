import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Game, GameState } from "../types/game-types";

const initialFavorites: number[] = JSON.parse(localStorage.getItem('favorites') || '[]');

const initialState: GameState = {
  allGames: [],
  filteredGames: [],
  selectedCategory: 'START',
  selectedProvider: '',
  searchQuery: '',
  favorites: JSON.parse(localStorage.getItem('favorites') || '[]'),
  isFavoritesTab: false,
};

const gameSlice = createSlice({
  name: 'games',
  initialState,
  reducers: {
    setGames(state, action: PayloadAction<Game[]>) {
      state.allGames = action.payload.map(game => ({
        ...game,
        isFavorite: initialFavorites.includes(game.id),
      }));
      state.filteredGames = state.allGames;
    },
    setCategory(state, action: PayloadAction<string>) {
      state.selectedCategory = action.payload;
      state.filteredGames = state.allGames.filter(
        (game) => (game.category).includes(action.payload)
      );
    },
    setProvider(state, action: PayloadAction<string>) {
      state.selectedProvider = action.payload;
      state.filteredGames = state.allGames.filter(
        (game) => game.provider === action.payload
      );
    },
    setSearchQuery(state, action: PayloadAction<string>) {
      state.searchQuery = action.payload;
      state.filteredGames = state.allGames.filter((game) =>
        game.name.toLowerCase().includes(action.payload.toLowerCase())
      );
    },
    setFavoritesGames(state, action: PayloadAction<boolean>) {
      state.isFavoritesTab = action.payload;
      state.filteredGames = state.allGames.filter((game) =>
        game.isFavorite === true
      );
    },
    toggleFavorite(state, action: PayloadAction<number>) {
      const { payload: gameId } = action;
      const isAlreadyFavorite = state.favorites.includes(gameId);

      state.favorites = isAlreadyFavorite
        ? state.favorites.filter(id => id !== gameId)
        : [...state.favorites, gameId];

      try {
        localStorage.setItem('favorites', JSON.stringify(state.favorites));
      } catch (error) {
        console.error("Failed to save favorites:", error);
      }

      state.allGames = state.allGames.map(game =>
        game.id === gameId
          ? { ...game, isFavorite: !isAlreadyFavorite }
          : game
      );
    },
  },
});

export const { setGames, setCategory, setProvider, setSearchQuery, toggleFavorite, setFavoritesGames } = gameSlice.actions;
export default gameSlice.reducer;