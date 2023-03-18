import React from "react";
import Header from "./Components/Header";
import MainSection from "./Components/MainSection";
import Projects from "./Components/Projects";
import Tech from "./Components/Tech";

function HomePage() {
  return (
    <div>
      <header>
        <nav>
          <Header />
        </nav>
      </header>
      <MainSection />

      <div>
        <Tech />
      </div>

      <div>
        <Projects />
      </div>

      <footer
        className="
      
      bg-gradient-to-r from-yellow-500 via-blue-400 to-green-600 to-black to-pink-700
      mt-12 h-2"
      ></footer>
    </div>
  );
}

export default HomePage;
