import React from 'react';
import styles from './index.module.scss';
import { ReactComponent as LoadingSvg } from '../../assets/loading/loading.svg';

const Loading: React.FC = () => {

    return (
        <div className={styles.loadingMainCont}>
            <div className={styles.loadingIcon}>
                <LoadingSvg />
            </div>
        </div>
    );
};

export default React.memo(Loading);
