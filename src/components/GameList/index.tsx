import React, { useState } from 'react';
import { useData } from '../../hooks/usedata';
import GameItem from '../GameItem';
import styles from './index.module.scss'; // Import SCSS module


const GameList: React.FC = () => {
    const [selecteddCategory, setSelectedCategory] = useState(null);
  
    const handleCategoryChange = (event: any) => {
      setSelectedCategory(event.target.value);
    };
  
  const {
    filteredGames,
    selectedCategory,
    selectedProvider,
    searchQuery,
    changeCategory,
    changeProvider,
    changeSearchQuery,
    handleFavoriteToggle
  } = useData();

  return (
    <div>
      <div>
        <h4>Filters</h4>

    <div className={styles.categoryContainer}>
      <h3>Select a Category</h3>
      <div className={styles.categoryBoxes}>
        {['Category 1', 'Category 2', 'Category 3', 'Category 4', 'Category 5'].map((category, index) => (
          <label key={index} className={`${styles.categoryBox} ${selecteddCategory === category ? styles.selected : ''}`}>
            <input
              type="radio"
              name="category"
              value={category}
              checked={selecteddCategory === category}
              onChange={handleCategoryChange}
            />
            <span>{category}</span>
          </label>
        ))}
      </div>
    </div>
        <select value={selectedCategory} onChange={(e) => changeCategory(e.target.value)}>
          <option value="START">START</option>
          <option value="NEW">NEW</option>
          <option value="SLOTS">SLOTS</option>
        </select>
        
        <select value={selectedProvider} onChange={(e) => changeProvider(e.target.value)}>
          <option value="">All Providers</option>
          <option value="Provider A">Provider A</option>
          <option value="Provider B">Provider B</option>
          <option value="Provider C">Provider C</option>
        </select>
        
        <input 
          type="text" 
          value={searchQuery} 
          onChange={(e) => changeSearchQuery(e.target.value)} 
          placeholder="Search Games..." 
        />
      </div>

      {/* Game Items List */}
      <div>
        {filteredGames.map((game) => (
          <GameItem 
            key={game.id} 
            game={game}
            handleFavoriteToggle={handleFavoriteToggle} 
          />
        ))}
      </div>
    </div>
  );
};

export default GameList;
