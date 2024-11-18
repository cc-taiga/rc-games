export interface Game {
    id: number;
    name: string;
    category: string[];
    provider: string;
    isFavorite?: boolean;
  }
  
 export interface GameState {
    allGames: Game[];
    filteredGames: Game[];
    selectedCategory: string;
    selectedProvider: string;
    searchQuery: string;
    favorites: number[];
    isFavoritesTab: boolean;
  }
  