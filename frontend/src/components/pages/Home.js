import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import NosSection from '../NosSection';

function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
      <NosSection/>
      <Footer />
    </>
  );
}

export default Home;