import React from 'react';
import {
  Header, HomeIntro, HomeWrapper, About,
  Footer, WorkAndEducation,
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
      <WorkAndEducation />
      <Footer />
    </>
  );
}
