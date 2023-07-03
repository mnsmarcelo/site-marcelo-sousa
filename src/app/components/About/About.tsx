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
            src="/fot.jpg"
            width={300}
            height={300}
            alt="Marcelo Sousa"
          />
        </div>
        <div>
          <p className={styles.aboutP}>
            {`Olá, meu nome é Marcelo Sousa, sou de Ji-paraná/RO e atualmente moro em Sumaré/SP.
            Meu interesse sobre desenvolvimento web surgiu ainda em 2009, quando se falava muito que aplicações web era o futuro.
            Em 2012 surgiu uma oportunidade de trabalhar numa pequena empresa de mídia, criando e customizando sites com Wordpress,
            foi onde tive que aprender um pouco sobre CSS, HTML e PHP.`}
          </p>
        </div>
      </div>
    </div>
  </div>
);
