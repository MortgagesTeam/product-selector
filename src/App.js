import React, {Component} from 'react';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './pages/Home';
import FactFind from './pages/FactFind';
import About from './pages/About';
import Contact from './pages/Contact';
import Vendor from './pages/Vendor';
import Success from './pages/Success';
import Login from './pages/Login';
import LandingPage from './pages/LandingPage';
import Application from './pages/Application';
import Thankyou from './pages/Thankyou';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
        <Route exact path="/" element={ <LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/factfind" element={<FactFind />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/vendor" element={<Vendor />} />
        <Route path="/success" element={<Success />} />
        <Route path="/application" element={<Application />} />
        <Route path="/thankyou" element={<Thankyou />} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
//}
}

export default App;
