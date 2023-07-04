import React from 'react';
import {
  Header, HomeIntro, HomeWrapper, About,
  Footer,
} from './components';

export default function Home() {
  return (
    <>
      <HomeWrapper>
        <>
          <Header />
          <HomeIntro />
        </>
      </HomeWrapper>
      <About />
      <Footer />
    </>
  );
}
