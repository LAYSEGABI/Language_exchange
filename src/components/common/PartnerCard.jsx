import React from 'react';
import './partner-card.css';
import { MessageSquare } from 'lucide-react';

const PartnerCard = ({ name, hub, speaks, learns }) => {
  return (
    <div className="partner-card">
      <div className="card-header">
        <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${name}`} alt={name} className="card-avatar" />
        <div className="card-titles">
          <h4>{name}</h4>
          <span>📍 HUB {hub?.toUpperCase()}</span>
        </div>
      </div>

      <div className="card-info">
        <div className="info-group">
          <label>FALA</label>
          <div className="tags">
            {speaks?.split(',').map(lang => <span key={lang} className="tag speaks">{lang.trim()}</span>)}
          </div>
        </div>
        
        <div className="info-group">
          <label>APRENDE</label>
          <div className="tags">
            {learns?.split(',').map(lang => <span key={lang} className="tag learns">{lang.trim()}</span>)}
          </div>
        </div>
      </div>

      <button className="btn-connect">
        <MessageSquare size={16} /> Conectar
      </button>
    </div>
  );
};

export default PartnerCard;