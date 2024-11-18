import React from 'react';
import { Game } from '../../types/game-types';
import styles from './index.module.scss';
import { getAllAssets } from '../../utils/assetsUtils';
import classNames from 'classnames';
import { ReactComponent as StarSvg } from '../../assets/game_list/fave.svg';

interface GameItemProps {
  game: Game;
  handleFavoriteToggle: (gameId: number) => void;
}

const GameItem: React.FC<GameItemProps> = ({ game, handleFavoriteToggle }) => {
  const assets = getAllAssets('game_list')
  return (
    <div className={styles.mainCont}>
      <div className={styles.gameItemCont}>
        <img src={assets[game.name]} alt="" />
        <div className={styles.triangle}></div>
        <div className={styles.fave} onClick={() => handleFavoriteToggle(game.id)}>
          <div className={classNames(styles.star, {
            [styles.favorite]: game.isFavorite
          }
          )}>
            <div className={styles.starCont}><StarSvg /></div>
          </div>
        </div>
      </div >
    </div>
  );
};

export default React.memo(GameItem);