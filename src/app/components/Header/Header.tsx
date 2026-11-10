import React from 'react';

import styles from './header.module.css';

export const Header: React.FC = () => (
  <header className={styles.siteHeader}>
    <div className={styles.siteHeaderWrapper}>
      <h2 className={styles.brand}>Marcelo Sousa</h2>
    </div>
  </header>
);
