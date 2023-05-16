import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Projects from './pages/Projects';
import About from './pages/About';
import Resume from './pages/Resume';
import Contact from './pages/Contact';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        {/* navbar will exist on every page */}
        <Navbar />
        <Routes>
          <Route path='/' element={<Projects />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/resume' element={<Resume />} />
        </Routes>

        <Footer />

      </Router>
    </div>
  );
}

export default App;

