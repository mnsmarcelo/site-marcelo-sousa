import React, { FC } from 'react';

import styles from './wordandeducation.module.css';

export const WorkAndEducation: FC = () => (
  <div className={styles.workAndEducationSection}>
    <div className={styles.workAndEducationWrapper}>
      <div className={styles.sectionHead}>
        <h3 className={styles.title}>
          Work
        </h3>
      </div>
      <div className={styles.workResumeWrapper}>
        <div className={styles.workResumeRow}>
          <div className={styles.workResumeRowLeft}>
            <div className={styles.border}>
              <h6 className={styles.workResumeTitle}>Front-end Engineer</h6>
              <p>Junho 2023 - Atual</p>
            </div>
          </div>
          <div className={styles.workResumeRowRight}>
            <h6 className={styles.workResumeTitle}>Banco do Nordeste (consultoria G4F)</h6>
            <p>
              Manutenção e desenvolvimento do front do BNB no segmento de cartões.
            </p>
          </div>
        </div>
        <div className={styles.workResumeRow}>
          <div className={styles.workResumeRowLeft}>
            <div className={styles.border}>
              <h6 className={styles.workResumeTitle}>Softwate Engineer</h6>
              <p>Janeiro 2022 - Março 2023</p>
            </div>
          </div>
          <div className={styles.workResumeRowRight}>
            <h6 className={styles.workResumeTitle}>iFood Benefícios</h6>
            <p>
              Criação, manutenção e evolução do micro frontend onde os clientes do iFood Benefícios podem emitir cartões para os seus colaboradores.
              Emissões de cartões em lotes, segunda via e acompanhamento da entrega são algumas possibilidades.
            </p>
          </div>
        </div>
        <div className={styles.workResumeRow}>
          <div className={styles.workResumeRowLeft}>
            <div className={styles.border}>
              <h6 className={styles.workResumeTitle}>Javascript Engineer</h6>
              <p>Outubro 2018 - Dezembro 2021</p>
            </div>
          </div>
          <div className={styles.workResumeRowRight}>
            <h6 className={styles.workResumeTitle}>NetPOS</h6>
            <p>
              Desenvolvimento do zero de um dashboard para os clientes de um software de automação comercial. Essa aplicação web ajuda nossos clientes a realizarem tarefas mais complexas
              e ter uma gestão melhor das informações do seu estabelecimento numa tela maior como a de um desktop.
              Também desenvolvi inicialmente um catálogo para que os cliente possam expor os seus produtos e assim vender diretamente pela internet, no início de 2020 com as restrições provocadas pela pandemia da COVD-19, fizemos uma integração com o checkout da PagSeguro, dando a possibilidade ao nosso cliente de vender e receber online.
            </p>
          </div>
        </div>
        <div className={styles.workResumeRow}>
          <div className={styles.workResumeRowLeft}>
            <div className={styles.border}>
              <h6 className={styles.workResumeTitle}>Front-end Developer</h6>
              <p>Julho 2018 - Outubro 2018</p>
            </div>
          </div>
          <div className={styles.workResumeRowRight}>
            <h6 className={styles.workResumeTitle}>PlusIT</h6>
            <p>
              Participação no desenvolvimento em uma plataforma de empregabilidade para a Kroton Educacional.
            </p>
          </div>
        </div>
        <div className={styles.workResumeRow}>
          <div className={styles.workResumeRowLeft}>
            <div className={styles.border}>
              <h6 className={styles.workResumeTitle}>Full Stack Developer</h6>
              <p>Junho 2014 - Janeiro 2018</p>
            </div>
          </div>
          <div className={styles.workResumeRowRight}>
            <h6 className={styles.workResumeTitle}>Assertiva</h6>
            <p>
              Desenvolvimento back end com tecnologias como Java, Hibernate e Sql Server. Aplicar correções e feedbacks dos clientes internos.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);
