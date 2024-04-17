import React, { useEffect } from 'react';
import Navbar from './components/navbar';
import LandingPage from './components/landingPage';
import Marquee from './components/marquee';
import About from './components/about';
import EyesPlay from './components/eyesPlay';
import FeaturedProject from './components/featuredProject';
import Cards from './components/cards';
import Start from './components/start';
import Footer from './components/footer';
import LocomotiveScroll from 'locomotive-scroll';

function App() {

  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className='w-full h-screen text-black/80 !bg-[#f1f1f1]'>
      <Navbar />
      <LandingPage />
      <Marquee />
      <About />
      <EyesPlay />
      <FeaturedProject />
      <Cards />
      <Start />
      <Footer />
    </div>
  )
}

export default App