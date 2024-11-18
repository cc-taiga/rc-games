
import React from 'react';
import styles from './index.module.scss';
import classNames from 'classnames';
import { getAllAssets } from '../../utils/assetsUtils';
import game_categories from '../../utils/game_categories';


interface CategoriesProps {
  categoryList: string[];
  selectedCategory: string;
  changeCategory: (category: string) => void;
}
type GameCategoryKeys = keyof typeof game_categories;

const CategoriesHorizontal: React.FC<CategoriesProps> = ({ categoryList, selectedCategory, changeCategory }) => {
  const assets = getAllAssets('game_categories');
  let keys = Object.keys(assets);
  const list = keys
    .filter(key => categoryList.includes(key.toUpperCase()))
    .sort((a, b) => categoryList.indexOf(a.toUpperCase()) - categoryList.indexOf(b.toUpperCase()));
  console.log(list, categoryList)
  return (
    <div className={styles.categoryContainer}>
      <div className={styles.categoryBoxes}>
        {list.map((item, index) => {
          const category = item.toUpperCase();
          const SvgComponent = game_categories[item as GameCategoryKeys];
          return (
            <div
              key={index}
              className={classNames(styles.categoryItem, {
                [styles.active]: selectedCategory === category
              })}
              onClick={() => changeCategory(category)}
            >
              <SvgComponent />
              <div className={classNames(styles.categoryName, {
                [styles.biggerCont]: item === 'tablegames' || item === 'jackpots'
              })}>{category}</div>
            </div>
          );
        })}

      </div>
    </div>
  );
};

export default React.memo(CategoriesHorizontal);