import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Login from './pages/Login/Login';
import SignUp from './pages/Login/SignUp';


import Dashboard from './pages/Dashboard/Dashboard';
import Partner from './pages/FindPartners/Parceiros';
import Sessoes from './pages/MySessions/Sessoes';
import Recursos from './pages/Resources/Recursos';
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
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/partners" element={<Partner />} />
        <Route path="/sessions" element={<Sessoes />} />
        <Route path="/resources" element={<Recursos />} />
        
      </Routes>
    </Router>
  );
}

export default App;