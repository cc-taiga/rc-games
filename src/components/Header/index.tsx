import React from 'react';
import styles from './index.module.scss';
import { getAllAssets } from '../../utils/assetsUtils';

const Header: React.FC = () => {
  const assets = getAllAssets('header');
  const moneyVal = '$1,990.60';
  return (
    <div className={styles.headerMainCont}>
      <div className={styles.rightCont}>
        <div className={styles.menu}>
          <img src={assets['3BAR']} alt="3BAR" />
        </div>
        <div className={styles.logo}>
          <img src={assets['web_logo']} alt="web_logo" />
        </div>
      </div>
      <div className={styles.leftCont}>
        <div className={styles.wallet}>
          <img src={assets['wallet']} alt="wallet" />
        </div>
        <div className={styles.money}>{moneyVal}</div>
        <div className={styles.userIcon}>
          <img src={assets['user_icon']} alt="user_icon" />
        </div>
      </div>
    </div>
  );
};

export default React.memo(Header);