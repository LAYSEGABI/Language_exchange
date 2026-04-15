import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        {/* Rota principal que carrega a Landing Page */}
        <Route path="/" element={<Landing />} />
        
        {/* No futuro, você adicionará as outras rotas aqui, como:
           <Route path="/login" element={<Login />} />
           <Route path="/dashboard" element={<Dashboard />} />
        */}
      </Routes>
    </Router>
  );
}

export default App;