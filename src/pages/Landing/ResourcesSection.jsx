import React from 'react';
import { BookOpen, HelpCircle, Info, ArrowRight } from 'lucide-react';
import './styles.css';

const resourcesData = [
  {
    icon: <BookOpen size={24} color="#2C6E9D" />,
    title: "Guia de Boas Práticas",
    description: "Dicas de etiqueta e como preparar sua primeira sessão com um parceiro desconhecido.",
    linkText: "Ler guia"
  },
  {
    icon: <HelpCircle size={24} color="#2C6E9D" />,
    title: "Ice Breakers",
    description: "Uma lista de perguntas e tópicos para 'quebrar o gelo' e manter o papo fluindo.",
    linkText: "Ver tópicos"
  },
  {
    icon: <Info size={24} color="#2C6E9D" />,
    title: "Informações Úteis",
    description: "Links úteis para ferramentas de videoconferência e tradução recomendadas.",
    linkText: "Saiba mais"
  }
];

const ResourcesSection = () => {
  return (
    <section id="recursos" className="resources-section">
      <div className="resources-header">
        <div className="header-text">
          <h2>Recursos e Dicas</h2>
          <p>Tudo o que você precisa para aproveitar ao máximo suas conversas.</p>
        </div>
        <a href="#todos" className="view-all">
          Ver todos os recursos <ArrowRight size={16} />
        </a>
      </div>

      <div className="resources-grid">
        {resourcesData.map((item, index) => (
          <div key={index} className="resource-card">
            <div className="resource-icon-bg">
              {item.icon}
            </div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <a href="#" className="resource-link">
              {item.linkText} <ArrowRight size={14} />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ResourcesSection;