import React from 'react';
import HeroSection from './HeroSection';
import StepsSection from './StepsSection';
import Faixa from './Faixa';
import './styles.css';

const Landing = () => {
  return (
    <div className="landing-page">
      <HeroSection />
      <Faixa />
      <StepsSection />
      {/* Adicione ResourcesSection aqui depois que criar */}
      
      
    </div>
  );
};

export default Landing;

