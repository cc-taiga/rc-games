import React, { useState } from 'react';
import { useData } from '../../data/usedata';
import GameItem from '../GameItem';
import styles from './index.module.scss';
import SearchBar from '../SearchBar';
import CategoriesModal from '../CategoriesModal';
import CategoriesHorizontal from "../CategoriesHorizontal";
import { ReactComponent as SearchSvg } from '../../assets/search/search.svg';
import { ReactComponent as GPSvg } from '../../assets/search/providers_btn.svg';
import classNames from 'classnames';
import Loading from '../Loading';


const GameList: React.FC = () => {

  const {
    filteredGames,
    selectedCategory,
    selectedProvider,
    searchQuery,
    categoryList,
    gameProvidersList,
    loading,
    changeCategory,
    changeProvider,
    changeSearchQuery,
    handleFavoriteToggle
  } = useData();

  const [isProviderModalOpen, setIsProviderModalOpen] = useState(false);
  const [isSearchBarOpen, setisIsSearchBarOpen] = useState(false);
  const closeProvidersModal = () => {
    setIsProviderModalOpen(false);
  };
console.log(loading, "loading")
  return (
    <>{loading ? <Loading /> :
      <div className={styles.gameList}>
        <div className={styles.upperCont}>
          <div className={classNames(styles.search, {
            [styles.searchActive]: isSearchBarOpen
          })} onClick={() => setisIsSearchBarOpen(prev => !prev)}>
            <SearchSvg />
            <div className={styles.text}>SEARCH</div>
          </div>
          <CategoriesHorizontal
            categoryList={categoryList}
            selectedCategory={selectedCategory}
            changeCategory={changeCategory}
          />
        </div>
        {isSearchBarOpen &&
          <div className={styles.middleCont}>
            <SearchBar
              searchQuery={searchQuery}
              changeSearchQuery={changeSearchQuery}
            />
            <div className={styles.gpBtn} onClick={() => setIsProviderModalOpen(prev => !prev)}>
              <GPSvg />
            </div>
          </div>}
        <CategoriesModal
          providers={gameProvidersList}
          selectedProvider={selectedProvider}
          changeProvider={changeProvider}
          isProviderModalOpen={isProviderModalOpen}
          closeModal={closeProvidersModal}
        />
        <div className={classNames(
          styles.gameItemMainCont, {
          [styles.maintContSearchOpen]: isSearchBarOpen
        }
        )}>
          {filteredGames.map((game) => (
            <GameItem
              key={game.id}
              game={game}
              handleFavoriteToggle={handleFavoriteToggle}
            />
          ))}
        </div>
      </div>}
    </>
  );
};

export default GameList;
