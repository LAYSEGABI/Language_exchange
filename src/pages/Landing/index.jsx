import React from 'react';
import HeroSection from './HeroSection';
import StepsSection from './StepsSection';
import AboutSection from './Sobre-projeto';
import Faixa from './Faixa';
import Resources from './ResourcesSection';

import './styles.css';

const Landing = () => {
  return (
    <div className="landing-page">
      <HeroSection />
      <Faixa />
      <AboutSection />
      <StepsSection />
      <Resources />
    </div>
  );
};

export default Landing;

