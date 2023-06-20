import React from "react";
import Header from "./Components/Header";
import { Link } from "react-router-dom";
import { HiHome } from "react-icons/hi2";
import ResumePDF from "./assets/Resume.pdf";
function Resume() {
  return (
    <div className="flex flex-col min-h-screen">
      <div>
        <Header />
      </div>

      <div className=" sm:ml-24 ml-2 mb-4">
        <Link to={"/"}>
          <button className="border-2 border-solid rounded-xl p-2 hover:bg-gray-700 ">
            <HiHome className="text-3xl text-gray-700 hover:text-white" />
          </button>
        </Link>
      </div>
      <div className="mb-8">
        <object
          data={ResumePDF}
          type="application/pdf"
          className="w-10/12 block m-auto h-screen rounded-lg"
        ></object>
      </div>

      <footer
        className="
        mt-auto
      bg-gradient-to-r from-yellow-500 via-blue-400 to-green-600 to-black to-pink-700
      h-2"
      ></footer>
    </div>
  );
}

export default Resume;
