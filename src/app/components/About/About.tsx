import React, { FC } from 'react';
import Image from 'next/image';

import styles from './about.module.css';

export const About: FC = () => (
  <div className={styles.aboutSection}>
    <div className={styles.aboutWrapper}>
      <div className={styles.sectionHead}>
        <h3 className={styles.title}>About</h3>
      </div>
      <div className={styles.aboutContent}>
        <div>
          <Image
            className={styles.profilePicture}
            src="/marcelo-sousa-picture.jpg"
            width={250}
            height={250}
            alt="Marcelo Sousa"
          />
        </div>
        <div>
          <p className={styles.aboutP}>
            {`Olá, sou desenvolvedor front-end atualmente trabalhando no Banco do Nordeste com ReactJS.
            Já passei por empresas como a Assertiva em Campinas e Plus-IT e NetPos e iFood Benefícios.`}
          </p>
        </div>
      </div>
    </div>
  </div>
);
