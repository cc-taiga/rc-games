import React from 'react';
import styles from './index.module.scss';
import classNames from 'classnames';
import { getAllAssets } from '../../utils/assetsUtils';
import { ReactComponent as GPSvg } from '../../assets/search/providers_btn.svg';

interface CategoriesModalProps {
  providers: string[];
  selectedProvider: string;
  isProviderModalOpen: boolean;
  changeProvider: (provider: string) => void;
  closeModal: () => void;
}

const CategoriesModal: React.FC<CategoriesModalProps> = ({ providers, selectedProvider, isProviderModalOpen, changeProvider, closeModal }) => {
  const assets = getAllAssets('game_providers')
  let keys = Object.keys(assets);
  const list = keys
    .filter(key => providers.includes(key.toUpperCase()))
    .sort((a, b) => providers.indexOf(a.toUpperCase()) - providers.indexOf(b.toUpperCase()));
  return (
    <div className={classNames(styles.hideMainCont, {
      [styles.showModal]: isProviderModalOpen
    })}>
        <div className={styles.titleCont}>
          <GPSvg />
          <div className={styles.titleText}>Game Providers <span> ({list.length + 1})</span></div>
          <div className={styles.closeBtn} onClick={closeModal}>X</div>
        </div>
      <div className={styles.gameList}>
        {list.map((provider, index) => (
          <div
            key={provider}
            className={classNames(styles.gameItem, {
            [styles.activeGameItem] : provider === selectedProvider.toLocaleUpperCase()
            })}
            onClick={() => changeProvider(provider)}
          >
            <img src={assets[provider]} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default React.memo(CategoriesModal);