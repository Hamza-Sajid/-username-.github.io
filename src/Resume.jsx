import React from "react";
import CV from "./assets/cv1.png";
import Header from "./Components/Header";
import { Link } from "react-router-dom";
import { HiHome } from "react-icons/hi2";
function Resume() {
  return (
    <div>
      <div>
        <Header />
      </div>

      <div className=" sm:ml-24 ml-2">
        <Link to={"/"}>
          <button>
            <HiHome className="text-3xl text-gray-700 border-2 border-solid rounded-xl" />
          </button>
        </Link>
      </div>
      <img src={CV} alt="" />

      <footer
        className="
      
      bg-gradient-to-r from-yellow-500 via-blue-400 to-green-600 to-black to-pink-700
      mt-12 h-2"
      ></footer>
    </div>
  );
}

export default Resume;
