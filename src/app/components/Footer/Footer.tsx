import React, { FC } from 'react';

import styles from './footer.module.css';

export const Footer: FC = () => (
  <footer className={styles.footer}>
    <div className={styles.footerWrapper}>
      <div className={styles.policy}>
        <span>
          ©
          <strong> Marcelo Sousa </strong>
          - 2026
        </span>
      </div>
    </div>
  </footer>
);
