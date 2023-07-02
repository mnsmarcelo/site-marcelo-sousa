import React from 'react';
import { Header, HomeIntro, HomeWrapper } from './components';

export default function Home() {
  return (
    <HomeWrapper>
      <>
        <Header />
        <HomeIntro />
      </>
    </HomeWrapper>
  );
}
