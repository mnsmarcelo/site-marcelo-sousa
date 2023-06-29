import Image from 'next/image'
import styles from './page.module.css'
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

import { Header, HomeIntro, HomeWrapper } from './components';

export default function Home() {
  return (
    <>
        <HomeWrapper>
            <>
                <Header />
                <HomeIntro/>
            </>
        </HomeWrapper>

    </>
  )
}
