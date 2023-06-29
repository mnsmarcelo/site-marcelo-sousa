import React from 'react';

import styles from './homeintro.module.css'

export const HomeIntro: React.FC = () => {
    return (
        <div className={styles.homeIntro}>
            <div className={styles.homeIntroWrapper}>
                <div className={styles.headerHero}>
                    <span>
                        I'm a front-end
                    </span>
                    <br />
                    <span>
                        developer
                    </span>
                </div>
                <div className={styles.buttonCVWrapper}>
                    <button className={styles.button64} role="button">
                        <span className="text">Download CV</span>
                    </button>
                </div>
            </div>
        </div>
    );
}