import React from "react";
import EmailLogo from "../assets/email.jpg";
import { TbCertificate } from "react-icons/tb";
import { SlUser } from "react-icons/sl";
import { Link } from "react-router-dom";
import Profile from "../assets/profile.png";
import Certificate from "../assets/certificate.png";

function Header() {
  return (
    <div className="p-4 flex w-11/12 m-auto justify-between ">
      <div className="w-4/5 sm:block hidden">
        <img src={EmailLogo} width="50" className=" inline opacity-70 "></img>
        <input
          type="email"
          name=""
          value={"HumzaSajidCS@Gmail.com"}
          className="text-gray-600 email"
          id=""
        />
      </div>

      <div className=" flex sm:m-0 m-auto">
        <Link to={"/resume"}>
          <div className="cursor-pointer flex flex-col items-center justify-center gap-1 w-26 h-28 bg-gray-50 sm:bg-transparent rounded-lg sm:-ml-0  -ml-28">
            <img src={Profile} className="w-10 h-10" alt="" />
            {/* <SlUser className="inline text-2xl text-gray-600" /> */}
            <h5
              className="ml-2 inline text-sm text-gray-700 normal_font font-semibold
          hover:bg-gray-700 hover:rounded-2xl hover:text-white p-2
          "
            >
              Resume
            </h5>
          </div>
        </Link>

        <Link to={"/certification"}>
          <div className="cursor-pointer flex flex-col items-center justify-center gap-1  w-26 h-28  bg-gray-50 sm:bg-transparent rounded-lg sm:-ml-0  ml-6">
            {/* <SlUser className="inline text-2xl text-gray-600" /> */}
            <img src={Certificate} className="w-10 h-10" alt="" />
            <h5
              className="ml-2 inline text-sm text-gray-700 normal_font font-semibold
          hover:bg-gray-700 hover:rounded-2xl hover:text-white p-2
          "
            >
              Certification
            </h5>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
