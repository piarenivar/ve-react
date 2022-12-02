import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Skip from './components/Skip';
import Nav from './components/Nav';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Services from './pages/Services';
import Aboutus from './pages/About-us';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import Privacy from './pages/Privacy';

export default function App() {
  return (
    <div className="App">
      <Router>
        <Skip />
        <Nav />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/proyectos" element={<Projects />} />
          <Route exact path="/servicios" element={<Services />} />
          <Route exact path="/nosotros" element={<Aboutus />} />
          <Route exact path="/contacto" element={<Contact />} />
          <Route exact path="/privacidad" element={<Privacy />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};