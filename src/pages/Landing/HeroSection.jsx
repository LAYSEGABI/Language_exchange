import React from "react";
import "./styles.css";
import "./hero.css"
import logoGlobalShapers from "../../assets/logo-azul-GSF.svg";

const HeroSection = () => {
  return (
  <>
  
    {/* Header isolado da Hero */}
    <header className="landing-header">
      <div className="container">
        <nav className="landing-nav">
          <img
            src={logoGlobalShapers}
            alt="Global Shapers Logo"
            className="logo-nav"
          />
          <div className="nav-links">
            <a href="#projeto">O Projeto</a>
            <a href="#como-funciona">Como funciona</a>
            <a href="#recursos">Recursos</a>
            <a href="#contato">Contato</a>
          </div>
          <button className="cta-header">Faça parte</button>
        </nav>
      </div>
    </header>

    {/* Hero Section focada apenas no Banner */}
    <section className="hero-section">
      <div className="container">
        <div className="hero-content">
          <p className="subtitle">HUB FLORIANÓPOLIS, BRAZIL</p>
          <h1 className="hero-title">
            Language <span className="highlight">Exchange</span>
          </h1>
          <p className="quote">"From words to worlds"</p>
          <p className="description">
            Expanda seus horizontes através da conexão cultural. Encontre Shapers
            ao redor do mundo para praticar novos idiomas e fortalecer nossa
            comunidade global.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary">Começar agora</button>
            <button className="btn-outline">Saiba mais</button>
          </div>
        </div>
      </div>
    </section>
  </>
);
};

export default HeroSection;
