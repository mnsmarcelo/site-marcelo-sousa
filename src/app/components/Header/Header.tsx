import React from 'react';

import { Container } from '../Container/Container';

import styles from './header.module.css'

export const Header: React.FC = () => {
    return (
        <header className={styles.siteHeader}>
            <div className={styles.siteHeaderWrapper}>
                <a href="#" className={styles.brand}>Marcelo Sousa</a>
                <nav className={styles.nav}>
                    <button className={styles.navToggle} aria-expanded="false" type="button">
                        menu
                    </button>
                    <ul className={styles.navWrapper}>
                        <li className={styles.navItem}><a href="#">Home</a></li>
                        <li className={styles.navItem}><a href="#">About</a></li>
                        <li className={styles.navItem}><a href="#">Services</a></li>
                        <li className={styles.navItem}><a href="#">Hire us</a></li>
                        <li className={styles.navItem}><a href="#">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};
