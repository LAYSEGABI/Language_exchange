import React from 'react';
import './Faixa.css';

const Faixa = () => {
  // Códigos ISO de 2 letras (ex: Brasil é BR) que a API usa
  const countries = [
    'br', 'us', 'es', 'fr', 'de', 'it', 'jp', 'cn', 
    'gb', 'ca', 'ar', 'mx', 'pt', 'co', 'za'
  ];

  return (
    <div className="flag-strip-container">
      <div className="flag-track">
        {countries.concat(countries).map((code, index) => (
          <div key={index} className="flag-item">
            <img
              /* Alterado para carregar uma versão de maior resolução (w160) */
              src={`https://flagcdn.com/w160/${code}.png`}
              width="60" /* Definimos um tamanho fixo para o navegador redimensionar com nitidez */
              alt={`Bandeira ${code}`}
              className="country-flag"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faixa;