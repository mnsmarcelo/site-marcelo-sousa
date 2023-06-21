import Image from 'next/image'
import styles from './page.module.css'
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

import { Header } from './components';

export default function Home() {
  return (
    <>
      <Header />
    </>
  )
}
