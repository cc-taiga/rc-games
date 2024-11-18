import React, { useEffect, useState } from 'react';
import styles from './index.module.scss';
import footer from '../../utils/footer';
import classNames from 'classnames';
import { useData } from '../../data/usedata';

const Footer: React.FC = () => {
  const { setIsFavoritesTab } = useData();
  const [selected, setSelected] = useState('SPORTS')
  const footerList = ['SPORTS', 'FAVORITES', 'INVITE', 'CASINO_LIVE', 'CASHIER']
  type FooterKeys = keyof typeof footer;

  useEffect(() => {
    if (selected === 'FAVORITES') {
      setIsFavoritesTab(true);
    } else {
      setIsFavoritesTab(false);
    }
  }, [selected, setIsFavoritesTab]);

  return (
    <div className={styles.footerMainCont}>
      {footerList.map((key, index) => {
        const SvgComponent = footer[key.toLowerCase() as FooterKeys];
        console.log(selected, key, selected.toLowerCase() === key)
        return (
          <div className={styles.item} onClick={() => setSelected(key)}>
            <div className={
              classNames(styles.footerImgCont, {
                [styles.selected]: selected === key
              }
              )}>
              <SvgComponent />
              <div>{key}</div>
            </div>
          </div>
        )
      })}
    </div>
  );
};

export default React.memo(Footer);