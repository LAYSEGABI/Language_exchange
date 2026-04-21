import {
  UserPlus,
  Users,
  CalendarDays,
  MessageCircle,
  Workflow,
} from "lucide-react";

import "./steps-section.css";

const steps = [
  {
    number: "1",
    icon: <UserPlus size={28} />,
    title: "Registre-se",
    description:
      "Crie seu perfil, aguarde aprovação e indique os idiomas que domina e os que quer aprender.",
  },
  {
    number: "2",
    icon: <Users size={28} />,
    title: "Encontre Match",
    description:
      "Busque parceiros com interesses compatíveis na nossa base de dados.",
  },
  {
    number: "3",
    icon: <CalendarDays size={28} />,
    title: "Agende",
    description:
      "Combine um horário que funcione para ambos via chat ou e-mail.",
  },
  {
    number: "4",
    icon: <MessageCircle size={28} />,
    title: "Pratique",
    description: "Realize sua sessão de conversação e divirta-se aprendendo.",
  },
];

const ComoFunciona = () => {
  return (
    <section className="como-container">
      <div className="section-header">
        <div className="header-icon">
          <Workflow size={30} />
        </div>

        <h2 className="section-title">Como funciona</h2>

        <p className="section-subtitle">
          Siga o passo a passo para iniciar sua jornada cultural
        </p>
      </div>

      <div className="como-steps">
        {steps.map((step, index) => (
          <div key={index} className="step-card">
            <div className="step-number">{step.number}</div>

            <div className="step-icon">{step.icon}</div>

            <h3 className="step-title">{step.title}</h3>

            <p className="step-description">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ComoFunciona;
