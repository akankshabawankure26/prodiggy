import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About'
import Programs from "./components/Programs";
import Events from './components/Events';
import Contact from './components/Contact';
import Admission from './components/Admission';
import Footer from './components/Footer';
import Navbar from './components/Navbar';


const App = () => {
  return (
    <div >
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/program" element={<Programs />} />
          <Route path="/contact" element={< Contact />} />
          <Route path="/events" element={<Events />} />
          <Route path="/admission" element={<Admission />} />
        </Routes>
        <Footer />
      </Router>
    </div>


  );
}

export default App;