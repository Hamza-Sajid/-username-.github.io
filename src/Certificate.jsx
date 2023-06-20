import React from "react";
import { Link } from "react-router-dom";
import Header from "./Components/Header";
import Iancon from "./assets/iancon.jpeg";
import techkaro from "./assets/techkaro.png";
import coursera from "./assets/coursera.png";
import UETSummit from "./assets/Summit.jpg";
import Nic from "./assets/Certificate.jpeg";
import { HiHome } from "react-icons/hi2";
import Digi from "./assets/dig.png";
import Digi2 from "./assets/digi.png";

function Certificate() {
  return (
    <div>
      <header>
        <nav>
          <Header />
        </nav>
      </header>

      <div className="w-4/5 m-auto  mt-12">
        <Link to={"/"}>
          <button className=" p-2 border-2 border-solid rounded-xl bg-gray-100 border-gray-200 hover:bg-gray-700 -mt-12 hover:text-white">
            <HiHome className="text-3xl text-gray-700  hover:text-white" />
          </button>
        </Link>
        <h2 className="name text-center text-4xl font-semibold text-gray-800">
          Certifications
        </h2>

        <div className="flex mt-12 justify-between flex-wrap">
          <div className="">
            <h3 className="name font-thin text-lg italic underline text-gray-700">
              Internship (IANCON-GROUP)
            </h3>
            <img
              src={Iancon}
              width={500}
              className="rounded-lg shadow-xl  mt-2 cursor-pointer"
              alt=""
            />
          </div>

          <div className="">
            <h3 className="name font-thin text-lg italic underline text-gray-700">
              Engro Sponsored - CIRCLE Bootcamp
            </h3>
            <img
              src={techkaro}
              width={500}
              className="rounded-lg shadow-xl  mt-2 cursor-pointer"
              alt=""
            />
          </div>
          <div className="">
            <h3 className="name font-thin text-lg italic underline text-gray-700">
              National Incubation Center , KUST
            </h3>
            <img
              src={Nic}
              width={500}
              className="rounded-lg shadow-xl  mt-2 cursor-pointer"
              alt=""
            />
          </div>
          <div className="mt-12">
            <h3 className="name font-thin text-lg italic underline text-gray-700">
              Coursera - Meta Front-End Developer Professional Certificate
            </h3>
            <img
              src={coursera}
              width={800}
              className="rounded-lg shadow-xl mt-2 cursor-pointer"
              alt=""
            />
          </div>

          <div className="mt-12">
            <h3 className="name font-thin text-lg italic underline text-gray-700">
              UET - Summit on Soft-Skills
            </h3>
            <img
              src={UETSummit}
              width={800}
              className="rounded-lg shadow-xl mt-2 cursor-pointer"
              alt=""
            />
          </div>

          <div className="mt-12">
            <h3 className="name font-thin text-lg italic underline text-gray-700">
              E-commerce Management (DigiSkills)
            </h3>
            <img
              src={Digi}
              width={800}
              className="rounded-lg shadow-xl mt-2 cursor-pointer"
              alt=""
            />
          </div>

          <div className="mt-12">
            <h3 className="name font-thin text-lg italic underline text-gray-700">
              Introductry Freelancing (DigiSkills)
            </h3>
            <img
              src={Digi2}
              width={800}
              className="rounded-lg shadow-xl mt-2 cursor-pointer"
              alt=""
            />
          </div>
        </div>
      </div>

      <footer
        className="
      
      bg-gradient-to-r from-yellow-500 via-blue-400 to-green-600 to-black to-pink-700
      mt-12 h-2"
      ></footer>
    </div>
  );
}

export default Certificate;
