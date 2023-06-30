import React from 'react';

import { FaGithubSquare, FaLinkedin, FaInstagramSquare } from 'react-icons/fa';

import styles from './homeintro.module.css'

export const HomeIntro: React.FC = () => {
    return (
        <div className={styles.homeIntro}>
            <div className={styles.homeIntroWrapper}>
                <div className={styles.headerHero}>
                    <span>
                        {`I'm a front-end`}
                    </span>
                    <br />
                    <span>
                        developer.
                    </span>
                </div>
                <div className={styles.buttonCVWrapper}>
                    <button className={styles.button64} role="button">
                        <span className="text">Download CV</span>
                    </button>
                </div>
                <div className={styles.socialLinks}>
                    <a href="https://github.com/mnsmarcelo"
                       target="_blank"
                       rel="noreferrer"
                       title="GitHub profile"
                    >
                        <FaGithubSquare />
                    </a>

                    <a href="https://www.linkedin.com/in/mnsmarcelo/"
                       target="_blank"
                       rel="noreferrer"
                       title="Linkedin profile"
                    >
                    <FaLinkedin />
                    </a>
                    <a href="https://www.instagram.com/mnsmarcelo"
                       target="_blank"
                       rel="noreferrer"
                       title="Instagram profile"
                    >
                        <FaInstagramSquare />
                    </a>
                </div>
            </div>
        </div>
    );
}