import Certificate from "./Certificate";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import HomePage from "./HomePage";
import Resume from "./Resume";

import Link from "./assets/link.png";

import Git from "./assets/git.png";

import Med from "./assets/med.png";
import Slide from "./assets/slides.png";
function App() {
  return (
    <Router>
      <div className="block sm:hidden ">
        <div class="flex justify-around fixed bottom-0 w-full bg-gray-100 shadow-md py-2 border border-solid  ">
          <a href="https://www.linkedin.com/in/humza-sajid/">
            <img
              width={35}
              src={Link}
              alt="Humza Sajid Linkdin Profile"
              className="mt-2  opacity-100"
            />
          </a>
          <a href="https://github.com/Hamza-Sajid">
            <img
              width={35}
              src={Git}
              alt="Humza Sajid GitHub Profile"
              className="mt-2  opacity-100"
            />
          </a>

          <a href="https://medium.com/@humzasajid">
            <img
              width={38}
              src={Med}
              alt="Humza Sajid Medium Profile"
              className="mt-2   opacity-100"
            />
          </a>

          <a href="https://www.slideshare.net/Hamza170691">
            <img
              width={38}
              src={Slide}
              alt="Humza Sajid Slideshare Profile"
              className="mt-2   opacity-100"
            />
          </a>
        </div>
      </div>
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
