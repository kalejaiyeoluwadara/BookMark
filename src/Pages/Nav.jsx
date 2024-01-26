import React from "react";
import Link from "../Components/Link";
import logo from "../assets/images/logo-bookmark.svg";
import nav from "../assets/images/icon-hamburger.svg";
function Nav() {
  return (
    <div className="fixed z-40 sm:px-20 px-12 sm:h-[15vh] h-[12vh] top-0 left-0 w-screen bg-white flex items-center justify-between">
      <div>
        <img src={logo} alt="" />
      </div>
      <ul className="sm:flex sm justify-between items-center gap-10  ">
        {[
          {
            name: "Features",
            special: false,
            link: "#features",
          },
          {
            name: "Pricing",
            special: false,
            link: "#pricing",
          },
          {
            name: "Contact",
            special: false,
            link: "#contact",
          },
          {
            name: "Login",
            special: true,
            link: "#contact",
          },
        ].map((item, id) => {
          const { name, special, link } = item;
          return (
            <li>
              <Link key={id} name={name} special={special} link={link} />
            </li>
          );
        })}
      </ul>
      <div>
        <img src={nav} alt="" />
      </div>
    </div>
  );
}

export default Nav;
