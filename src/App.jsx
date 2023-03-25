import Certificate from "./Certificate";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import HomePage from "./HomePage";
import Resume from "./Resume";

function App() {
  return (
    <Router>
      <Analytics />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/certification" element={<Certificate />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </Router>
  );
}

export default App;
