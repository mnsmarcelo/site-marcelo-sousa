import React, { FC, ReactElement } from 'react';

import styles from './container.module.css';

interface ContainerProps {
  children: ReactElement,
}

// eslint-disable-next-line max-len
export const Container: FC<ContainerProps> = ({ children }) => (<div className={styles.container}>{children}</div>);
