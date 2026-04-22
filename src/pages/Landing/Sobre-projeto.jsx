import { Globe2, ShieldCheck, Zap, HeartHandshake } from "lucide-react";
import "./sobre-projeto.css";
import ImgHub from "../../assets/img-hub.png";

const ConhecaProjeto = () => {
  return (
    <section id="projeto" className="projeto-container">
      <div className="projeto-content">
        <div className="section-header">
          <div className="header-icon">
            <Globe2 size={30} />
          </div>
          <h2 className="section-title">Sobre o Projeto</h2>
          <p className="section-subtitle">
            Conectando Shapers através do diálogo e cooperação global
          </p>
        </div>

        <div className="projeto-grid">
          <div className="projeto-image-wrapper">
            <img src={ImgHub} alt="Hub Florianópolis" className="projeto-img" />
          </div>

          <div className="projeto-info">
            <div className="projeto-extra">
              <p className="projeto-text-small">
                Fazemos parte de uma rede global que conecta pessoas de diferentes
                culturas, origens e idiomas. Por meio de conversas
                significativas e experiências compartilhadas, criamos
                oportunidades para praticar idiomas, desenvolver confiança,
                formar amizades e abrir portas para <span className="highlight-blue">oportunidades globais reais.
                </span>
                .
              </p>

              <p className="projeto-origin">
                Criado em julho de 2025 pelo Hub de Florianópolis.
              </p>

              <div className="projeto-stats">
                <div className="stat-card">
                  <strong>82</strong>
                  <span>Shapers</span>
                </div>

                <div className="stat-card">
                  <strong>23</strong>
                  <span>Nationalities</span>
                </div>

                <div className="stat-card">
                  <strong>31</strong>
                  <span>Hubs</span>
                </div>
              </div>
            </div>

            <ul className="projeto-list">
              <li>
                <div className="list-icon">
                  <Globe2 size={20} />
                </div>
                <span>Conexão entre Hubs internacionais</span>
              </li>
              <li>
                <div className="list-icon">
                  <ShieldCheck size={20} />
                </div>
                <span>Ambiente seguro e amigável para prática</span>
              </li>
              <li>
                <div className="list-icon">
                  <Zap size={20} />
                </div>
                <span>Desenvolvimento de competências globais</span>
              </li>
              <li>
                <div className="list-icon">
                  <HeartHandshake size={20} />
                </div>
                <span>Fortalecimento da rede Shapers</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConhecaProjeto;
