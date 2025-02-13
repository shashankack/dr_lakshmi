import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AboutFounder from "./pages/AboutFounder";
import AboutMission from "./pages/AboutMission";
import AboutCSR from "./pages/AboutCSR";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about/founder" element={<AboutFounder />} />
        <Route path="/about/mission" element={<AboutMission />} />
        <Route path="/about/csr" element={<AboutCSR />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
