import React, { useState } from 'react';
import DashboardLayout from '../../components/layout/DashboardLayout';
import PartnerCard from '../../components/common/PartnerCard';
import { Search, Filter } from 'lucide-react';
import './parceiros.css';

const FindPartners = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Dados mocados (depois puxaremos do Supabase)
  const partners = [
    { id: 1, name: "Elena Schmidt", hub: "Berlin", speaks: "Alemão, Inglês", learns: "Português" },
    { id: 2, name: "Mateo Garcia", hub: "Madrid", speaks: "Espanhol", learns: "Inglês" },
    { id: 3, name: "Yuki Tanaka", hub: "Tokyo", speaks: "Japonês, Inglês", learns: "Francês" },
    { id: 4, name: "Sarah Johnson", hub: "London", speaks: "Inglês", learns: "Espanhol" },
    { id: 5, name: "Lucas Silva", hub: "Florianópolis", speaks: "Português", learns: "Inglês, Alemão" },
  ];

  return (
    <DashboardLayout>
      <div className="partners-page-header">
        <h2>Encontrar Parceiros</h2>
        
        <div className="search-container">
          <div className="search-input-wrapper">
            <Search size={18} className="search-icon" />
            <input 
              type="text" 
              placeholder="Idioma ou Hub..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button className="filter-button">
            <Filter size={18} />
          </button>
        </div>
      </div>

      <div className="partners-grid">
        {partners.map(partner => (
          <PartnerCard key={partner.id} {...partner} />
        ))}
      </div>
    </DashboardLayout>
  );
};

export default FindPartners;