import React from 'react';
import styles from './index.module.scss'

interface SearchBarProps {
    searchQuery: string;
    changeSearchQuery: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ searchQuery, changeSearchQuery }) => {

  return (
    <div className={styles.searchBar}>
        <input
        className={styles.input}
          type="text" 
          value={searchQuery} 
          onChange={(e) => changeSearchQuery(e.target.value)} 
          placeholder="Search Games..." 
        />
    </div>
  );
};

export default React.memo(SearchBar);
