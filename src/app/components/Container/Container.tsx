import { FC, ReactElement } from 'react';

import styles from './container.module.css';

interface ContainerProps {
    children: ReactElement,
}

export const Container: FC<ContainerProps> = ({ children }) => (<div className={styles.container}>{children}</div>);
