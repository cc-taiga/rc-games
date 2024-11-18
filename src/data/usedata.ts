import { useEffect, useMemo, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setGames, setCategory, setProvider, setSearchQuery, toggleFavorite, setFavoritesGames } from '../store/gamesSlice';
import { fetchGames } from '../services/mock-api';
import { RootState } from '../store/store';
import { Game } from '../types/game-types';


export const useData = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const allGames = useSelector((state: RootState) => state.games.allGames);
  const selectedCategory = useSelector((state: RootState) => state.games.selectedCategory);
  const selectedProvider = useSelector((state: RootState) => state.games.selectedProvider);
  const searchQuery = useSelector((state: RootState) => state.games.searchQuery);
  const isFavoritesTab = useSelector((state: RootState) => state.games.isFavoritesTab);


  const initialGamesRef = useRef<Game[] | null>(null);

  useEffect(() => {
    if (initialGamesRef.current === null) {
      setLoading(true)
      fetchGames().then((games) => {
        dispatch(setGames(games));
        initialGamesRef.current = games;
        setLoading(false)
      });
    }
  }, [dispatch]);


  const filteredGames = useMemo(() => {
    let games = initialGamesRef.current || [];
    
    if (selectedCategory) {
      games = allGames.filter((game) => (game.category).includes(selectedCategory.toUpperCase()));
      if (selectedProvider) {
        if (selectedProvider !== 'NothingSelected') {
          games = games.filter((game) => game.provider === selectedProvider);
        }
      }
      if (searchQuery) {
        games = games.filter((game) =>
          game.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
      }
      if (isFavoritesTab) {
        games = games.filter((game) =>
          game.isFavorite === true
        );
      }
    }
    return games;
  }, [selectedCategory, allGames, selectedProvider, searchQuery, isFavoritesTab]);

  const changeCategory = (category: string) => {
    dispatch(setCategory(category));
  };

  const changeProvider = (provider: string) => {
    dispatch(setProvider(provider));
  };

  const changeSearchQuery = (query: string) => {
    dispatch(setSearchQuery(query));
  };

  const handleFavoriteToggle = (gameId: number) => {
    dispatch(toggleFavorite(gameId));
  };

  const setIsFavoritesTab = (val: boolean) => {
    dispatch(setFavoritesGames(val));
  };


  const categoryList = [
    "START",
    "NEW",
    "SLOTS",
    "LIVE",
    "JACKPOTS",
    "TABLEGAMES",
    "BINGO",
    "OTHERS"
  ]

  const gameProvidersList = [
    'EM',
    'EVO',
    'EXPANSE',
    'EZG',
    'GAMEART',
    'HAB',
    'HACKSAW',
    'INBET',
    'MPLAY',
    'NETENT',
    'PGSOFT',
    'PNG',
    'PP',
    'PRAGMATICPLAY',
    'PS',
    'PT',
    'REDTIGER',
    'RELAX'
  ]
  return {
    gameProvidersList,
    categoryList,
    filteredGames,
    selectedCategory,
    selectedProvider,
    searchQuery,
    loading,
    changeCategory,
    changeProvider,
    changeSearchQuery,
    handleFavoriteToggle,
    setIsFavoritesTab
  };
};