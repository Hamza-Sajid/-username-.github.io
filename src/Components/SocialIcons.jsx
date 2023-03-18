import React from "react";
import Link from "../assets/link.png";

import Git from "../assets/git.png";

import Med from "../assets/med.png";
function SocialIcons() {
  return (
    <div className="flex flex-col justify-center mt-20 ml-4">
      <a href="https://www.linkedin.com/in/humza-sajid/">
        <img
          width={35}
          src={Link}
          alt="Linkdin"
          className="mt-8 mix-blend-luminosity opacity-80"
        />
      </a>
      <a href="https://github.com/Hamza-Sajid">
        <img
          width={35}
          src={Git}
          alt="GitHub"
          className="mt-8 mix-blend-luminosity opacity-80"
        />
      </a>

      <a href="https://medium.com/@humzasajid">
        <img
          width={38}
          src={Med}
          alt="Medium"
          className="mt-8  mix-blend-luminosity opacity-80"
        />
      </a>
    </div>
  );
}

export default SocialIcons;
