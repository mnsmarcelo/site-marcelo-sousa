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
            Como Front-end Engineer no Banco do Nordeste desde junho de 2023,
            estou envolvido na evolução e manutenção do portal de cartões, além
            do desenvolvimento do portal de Crédito Consolidado, utilizando
            tecnologias como React, Typescript, e Material UI.
          </p>
          <br />
          <p className={styles.aboutP}>
            Anteriormente, como Software Engineer no iFood, de janeiro de 2022 a
            março de 2023, trabalhei na criação e evolução de micro frontends
            para emissão de cartões de benefícios, utilizando React/NextJS e
            outras tecnologias relacionadas.
          </p>
          <br />
          <p className={styles.aboutP}>
            Como Javascript Engineer na NetPOS, de outubro de 2018 a dezembro de
            2021, desenvolvi um dashboard e um catálogo para clientes de um
            software de automação comercial, integrando com sistemas de
            pagamento online e utilizando tecnologias como React, Docker,
            NodeJS, e MongoDB.
          </p>
          <br />
          <p className={styles.aboutP}>
            Antes disso, como Front-end Developer na Plus IT, participei do
            desenvolvimento de uma plataforma de empregabilidade para a Kroton
            Educacional, utilizando AngularJS, CSS, e Java.
          </p>
          <br />
          <p className={styles.aboutP}>
            Iniciei minha carreira como Desenvolvedor Front-end na Assertiva,
            onde trabalhei no desenvolvimento de um CRM e outras aplicações,
            utilizando tecnologias como Java, Hibernate, React, NodeJS, e
            Express.JS, além de participar de hackathons como mentor de
            negócios e tecnologia.
          </p>
          <br />
          <p className={styles.aboutP}>
            Minha experiência abrange tanto o desenvolvimento front-end quanto
            back-end, utilizando uma variedade de tecnologias e participando
            ativamente no desenvolvimento e evolução de diferentes tipos de
            projetos.
          </p>
        </div>
      </div>
    </div>
  </div>
);
