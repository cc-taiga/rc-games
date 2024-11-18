import React, { useState, useEffect } from 'react';
import styles from './index.module.scss';
import { getAllAssets } from '../../utils/assetsUtils';

const BannerCarousel: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const assets = getAllAssets('banner');
  let keys = Object.keys(assets);

  useEffect(() => {
    const interval = setInterval(() => {
      const isLastIndex = keys.length === (currentImageIndex + 1);

      if (isLastIndex) {
        setCurrentImageIndex(0);
      } else {
        setCurrentImageIndex((prev) => prev + 1);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [currentImageIndex, keys.length]);
  return (
    <div className={styles.bannerMainCont}>
      <div className={styles.banner}>
        <div
          className={styles.bannerImages}
          style={{
            transform: `translateX(-${currentImageIndex * 100}vw)`
          }}
        >
          {keys.map((key, index) => (
            <div className={styles.bannerImgCont}>
              <img
                key={index}
                src={assets[key]}
                alt={`Banner ${index + 1}`}
                className={styles.bannerImage}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BannerCarousel;
