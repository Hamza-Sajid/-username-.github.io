import React from "react";
import SocialIcons from "./SocialIcons";
import ProfilePic from "../assets/profile.jpg";
import Tech from "./Tech";
function MainSection() {
  return (
    <div className="flex">
      <div className="w-1/5 hidden sm:block h-screen p-6">
        <SocialIcons />
      </div>
      <div className="w-full flex  ">
        <div className="sm:w-1/2 w-full p-6">
          {/* PROFILE PIC ONLY FOR MOBILE */}
          <img
            src={ProfilePic}
            alt="profile_pic"
            className="block sm:hidden cursor-pointer mt-12 m-auto w-1/2 rounded-full transition duration-300 ease-in-out hover:shadow-lg dark:hover:shadow-black/30"
          />
          <h2 className="text-5xl sm:text-6xl  mt-12 name text-gray-900 font-semibold ">
            Humza Sajid
          </h2>
          <h5 className="email text-2xl font-semibold text-gray-700">
            Associate Software Enginner
          </h5>

          <p className="normal_font mt-8 text-xl text-gray-800 leading-8">
            <span className="relative -left-2 inline text-4xl italic">"</span>
            Fresh CS Graduate 🎓
            <br />
            Cat 🐱lover, love to listen and discuss tech all time.
            <br />
            <span className="inline bg-gray-700 text-white p-1 pr-2 pl-2 mr-1 rounded-lg">
              Technically{" "}
            </span>{" "}
            interested and experienced in Web Development, looking 👀 for a role
            as an Associate SE, MERN Stack, OR Frontend Engineer in an
            organization where I can upskill my knowledge and work on developing
            an impactful product for society.
            <span className="relative  inline text-4xl italic">"</span>
          </p>
        </div>

        <div className="hidden sm:block">
          <figure>
            <img
              src={ProfilePic}
              width={250}
              alt="profile_pic"
              className=" cursor-pointer mt-12 m-auto w-2/3 rounded-full transition duration-300 ease-in-out hover:shadow-lg dark:hover:shadow-black/30"
            />
          </figure>
        </div>
      </div>
    </div>
  );
}

export default MainSection;
