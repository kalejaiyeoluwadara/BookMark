import React from "react";
import Link from "../Components/Link";
import logo from "../assets/images/logo-bookmark.svg";
function Nav() {
  return (
    <div className="absolute px-20 h-[10vh] top-0 left-0 w-screen bg-white flex items-center justify-between">
      <div>
        <img src={logo} alt="" />
      </div>
      <ul className="flex justify-between items-center gap-10  ">
        {[
          {
            name: "Features",
            special: true,
            link: "#",
          },
          {
            name: "Pricing",
            special: true,
            link: "#",
          },
          {
            name: "Contact",
            special: true,
            link: "#",
          },
          {
            name: "Login",
            special: true,
            link: "#",
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
    </div>
  );
}

export default Nav;