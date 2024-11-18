import React from 'react';
import styles from './index.module.scss';
import { ReactComponent as NotifSvg } from '../../assets/announcement/bell.svg';

const Marquee: React.FC = () => {

    return (
        <div className={styles.marqueeMainCont}>
            <div className={styles.icon}>
                
            <NotifSvg />
            </div>
            <div className={styles.marqueeCont}>
                <div className={styles.marquee}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
            </div>
        </div>
    );
};

export default React.memo(Marquee);
