import { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from './pages/Home';
import AOS from "aos";
import "aos/dist/aos.css";
import { ServicosPage } from './pages/Servicos';

function App() {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/servicos" element={<ServicosPage />} />
      </Routes>
    </Router>
  );
}

export default App;
