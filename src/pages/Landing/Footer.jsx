import React from "react";
import { Instagram, ArrowUpRight, Mail, Linkedin, Facebook } from "lucide-react";
import "./footer.css";
import LogoFooter from "../../assets/logo-branca-GSF.svg";


const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="footer-container">
        
        <div className="footer-layout-grid">
          
          {/* LADO ESQUERDO: Contatos e Redes */}
          <div className="footer-side left">
            <div className="footer-group">
              <h3>Contato</h3>
              <a href="mailto:shapersfloripa@gmail.com"><Mail size={14} /> shapersfloripa@gmail.com</a>
              
            </div>
            <div className="footer-group">
              <a href="#">Facebook <ArrowUpRight size={14} /></a>
              <a href="https://instagram.com/globalshapersfloripa">Instagram <ArrowUpRight size={14} /></a>
              <a href="#">LinkedIn <ArrowUpRight size={14} /></a>
            </div>
          </div>

          {/* CENTRO: Logo e CTAs */}
          <div className="footer-center">
            <div className="shapers-logo-wrapper">
              <img src={LogoFooter} alt="Global Shapers" />
            </div>
            <h2 className="footer-brand">Global Shapers</h2>
            <p className="footer-tagline">"From words to worlds"</p>
            
            <div className="footer-actions">
              <a href="#" className="btn-cta primary">
                Faça parte <ArrowUpRight size={18} />
              </a>
              <a href="#" className="btn-cta secondary">
                Nosso Instagram <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* LADO DIREITO: Seções da LP */}
          <div className="footer-side right">
            <div className="footer-group">
              <h3>Navegação</h3>
              <a href="#">O Projeto</a>
              <a href="#">Como funciona</a>
              <a href="#">FAQ</a>
              <a href="#">Privacidade</a>
            </div>
          </div>

        </div>

        <div className="footer-copyright">
          <p>© 2026 Global Shapers Florianópolis. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;