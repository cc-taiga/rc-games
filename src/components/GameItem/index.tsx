// src/components/GameItem.tsx

import React from 'react';
import { Game } from '../../types/game-types';

interface GameItemProps {
  game: Game;
  handleFavoriteToggle: (gameId: number) => void;
}

const GameItem: React.FC<GameItemProps> = ({ game, handleFavoriteToggle }) => {
  return (
    <div style={{ border: '1px solid #ddd', padding: '10px', margin: '10px' }}>
      <h3>{game.name}</h3>
      <p>Category: {game.category}</p>
      <p>Provider: {game.provider}</p>
      <button onClick={() => handleFavoriteToggle(game.id)}>
        {game.isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
      </button>
    </div>
  );
};

export default GameItem;