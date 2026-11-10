import React from 'react';

import styles from './header.module.css';

export const Header: React.FC = () => (
  <header className={styles.siteHeader}>
    <div className={styles.siteHeaderWrapper}>
      <h2 className={styles.brand}>Marcelo Sousa</h2>
      <nav className={styles.nav}>
        <ul className={styles.navWrapper}>
          <li className={styles.navItem}><a href="/">Home</a></li>
          <li className={styles.navItem}><a href="/blog/">Blog</a></li>
        </ul>
      </nav>
    </div>
  </header>
);
