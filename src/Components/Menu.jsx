import React, { useState } from "react";
import logo from "../assets/images/logo-bookmark.svg";
import face from "../assets/images/icon-facebook.svg";
import twiter from "../assets/images/icon-twitter.svg";
import cancel from "../assets/images/icon-close.svg";
function Menu() {
  const [links, setLinks] = useState([
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
  ]);
  return (
    <div className="fixed top-0 left-0 bgg z-50 h-screen w-screen flex flex-col items-center justify-start ">
      <div className="flex justify-between items-center w-full px-12 pt-12 ">
        <img src={logo} alt="logo" />
        <img src={cancel} alt="cancel" />
      </div>
      {/* Links */}
      <div className="flex text-white text-[24px] font-[500] mt-10 gap-10 items-center justify-center flex-col w-screen ">
        {links.map((item, id) => {
          const { name, speacial, link } = item;
          return (
            <a className=" border-y border-white  " href={link}>
              {name}
            </a>
          );
        })}
      </div>
      {/* Footer */}
      <div className="absolute bottom-10 w-screen flex items-center justify-center gap-20">
        {[face, twiter].map((log, id) => {
          return <img src={log} key={id} alt="" />;
        })}
      </div>
    </div>
  );
}

export default Menu;
