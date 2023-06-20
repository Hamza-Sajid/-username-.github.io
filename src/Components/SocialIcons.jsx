import React from "react";
import Link from "../assets/link.png";

import Git from "../assets/git.png";

import Med from "../assets/med.png";
import Slide from "../assets/slides.png";
function SocialIcons() {
  return (
    <div className="flex flex-col justify-center mt-14 ml-4">
      <a href="https://www.linkedin.com/in/humza-sajid/">
        <img
          width={35}
          src={Link}
          alt="Humza Sajid Linkdin Profile"
          className="mt-8 mix-blend-luminosity opacity-80"
        />
      </a>
      <a href="https://github.com/Hamza-Sajid">
        <img
          width={35}
          src={Git}
          alt="Humza Sajid GitHub Profile"
          className="mt-8 mix-blend-luminosity opacity-80"
        />
      </a>

      <a href="https://medium.com/@humzasajid">
        <img
          width={38}
          src={Med}
          alt="Humza Sajid Medium Profile"
          className="mt-8  mix-blend-luminosity opacity-80"
        />
      </a>

      <a href="https://www.slideshare.net/Hamza170691">
        <img
          width={38}
          src={Slide}
          alt="Humza Sajid Slideshare Profile"
          className="mt-8  mix-blend-luminosity opacity-80"
        />
      </a>
    </div>
  );
}

export default SocialIcons;
