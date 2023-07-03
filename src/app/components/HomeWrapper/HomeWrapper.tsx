import React, { ReactElement } from 'react';

import styles from './homewrapper.module.css';

interface ContainerProps {
  children: ReactElement,
}

export const HomeWrapper: React.FC<ContainerProps> = ({ children }) => (
  <div className={styles.homeIntro}>
    {children}
  </div>
);
