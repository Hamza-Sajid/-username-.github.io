import React from "react";
import EmailLogo from "../assets/email.jpg";
import { TbCertificate } from "react-icons/tb";
import { SlUser } from "react-icons/sl";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="p-4 flex w-11/12 m-auto justify-between">
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
          <div className="cursor-pointer ">
            <SlUser
              className="inline text-2xl text-gray-600
            hover:bg-gray-700
            hover:rounded-2xl
            hover:text-white"
            />
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
          <div className="cursor-pointer inline ml-4">
            <TbCertificate
              className="text-3xl text-gray-600 inline
          
          hover:bg-gray-700
          hover:rounded-2xl
          hover:text-white
          "
            />
            <h5
              className="ml-2 inline text-sm text-gray-700 normal_font font-semibold
          hover:bg-gray-700 hover:rounded-2xl hover:text-white p-2
          "
            >
              Certificate
            </h5>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
