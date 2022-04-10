import React from 'react';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './pages/Home';
import FactFind from './pages/FactFind';
import About from './pages/About';
import Contact from './pages/Contact';
import Vendor from './pages/Vendor';
import Success from './pages/Success';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/factfind" element={<FactFind />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/vendor" element={<Vendor />} />
        <Route path="/success" element={<Success />} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
