import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import GetStarted from "./pages/GetStarted";

import "./App.css"; // ✅ global styles

function App() {
  return (
    <Router>
      <nav className="navbar">
        <Link to="/">💻 Home</Link>
        <Link to="/about">📇 About</Link>
        <Link to="/team">🙂‍↕️ Team</Link>
        <Link to="/contact">📠 Contact</Link>
        <Link to="/getstarted">✅ Get Started</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/getstarted" element={<GetStarted />} />
      </Routes>
    </Router>
  );
}

export default App;
