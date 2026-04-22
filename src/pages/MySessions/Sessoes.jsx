import React from 'react';
import DashboardLayout from '../../components/layout/DashboardLayout';
import { PlusCircle } from 'lucide-react';
import './sessoes.css';

const MySessions = () => {
  // Dados de exemplo (depois virão do Supabase)
  const sessions = [
    { id: 1, partner: "Elena Schmidt", date: "28 Fev 2026", duration: "45min", language: "Inglês/Alemão", status: "Registada" },
    { id: 2, partner: "Mateo Garcia", date: "24 Fev 2026", duration: "60min", language: "Espanhol", status: "Pendente" },
  ];

  return (
    <DashboardLayout>
      <div className="sessions-header">
        <h2>Minhas Sessões</h2>
        <button className="btn-new-session">
          <PlusCircle size={20} /> Novo Registro
        </button>
      </div>

      <div className="table-container">
        <table className="sessions-table">
          <thead>
            <tr>
              <th>PARCEIRO</th>
              <th>DATA</th>
              <th>DURAÇÃO</th>
              <th>IDIOMA</th>
              <th>STATUS</th>
            </tr>
          </thead>
          <tbody>
            {sessions.map((session) => (
              <tr key={session.id}>
                <td className="partner-name">{session.partner}</td>
                <td>{session.date}</td>
                <td>{session.duration}</td>
                <td>{session.language}</td>
                <td>
                  <span className={`status-badge ${session.status.toLowerCase()}`}>
                    {session.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </DashboardLayout>
  );
};

export default MySessions;