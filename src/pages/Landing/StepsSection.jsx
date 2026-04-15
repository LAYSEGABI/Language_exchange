import React from 'react';
import './styles.css';
import { UserPlus, Search, CalendarDays, MessageSquareText } from 'lucide-react';

const stepsData = [
  { 
    number: 1, 
    icon: <UserPlus size={32} color="#FFFFFF" />, 
    title: "Registre-se", 
    description: "Crie seu perfil e indique os idiomas que domina e os que quer aprender." 
  },
  { 
    number: 2, 
    icon: <Search size={32} color="#FFFFFF" />, 
    title: "Encontre Match", 
    description: "Nossa plataforma sugere parceiros ideais para você praticar." 
  },
  { 
    number: 3, 
    icon: <CalendarDays size={32} color="#FFFFFF" />, 
    title: "Agende", 
    description: "Combine um horário que funcione para ambos via chat ou e-mail." 
  },
  { 
    number: 4, 
    icon: <MessageSquareText size={32} color="#FFFFFF" />, 
    title: "Pratique", 
    description: "Realize a call e compartilhe sua experiência!" 
  },
];

const StepsSection = () => {
  return (
    <section id="como-funciona" className="steps-section">
      <h2>Como funciona</h2>
      <p>Siga o passo a passo para se conectar e praticar</p>

      <div className="steps-grid">
        {stepsData.map((step) => (
          <div key={step.number} className="step-card">
            <div className="step-header">
              <span className="step-number">{step.number}</span>
              <div className="icon-container">{step.icon}</div>
            </div>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StepsSection;
