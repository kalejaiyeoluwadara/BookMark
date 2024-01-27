import React from "react";
import Link from "../Components/Link2";
import logo from "../assets/images/logo-bookmark.svg";
import face from "../assets/images/icon-facebook.svg";
import twiter from "../assets/images/icon-twitter.svg";
function Footer() {
  return (
    <div
      id="footer"
      className="w-screen sm:h-[15vh] h-[30vh] h-auto sm:flex-row flex-col bg-gray-900 flex justify-between items-center px-20  "
    >
      <div className="flex sm:flex-row flex-col  gap-6">
        <img src={logo} alt="" />
        <ul className="flex sm:flex-row flex-col  justify-between items-center gap-5  ">
          {[
            {
              name: "Features",
              special: false,
              link: "#",
            },
            {
              name: "Pricing",
              special: false,
              link: "#",
            },
            {
              name: "Contact",
              special: false,
              link: "#",
            },
          ].map((item, id) => {
            const { name, special, link } = item;
            return (
              <li>
                <Link key={id} name={name} link={link} />
              </li>
            );
          })}
        </ul>
      </div>
      {/* Social */}
      <div className="flex items-center justify-center gap-10">
        <img src={face} alt="" />
        <img src={twiter} alt="" />
      </div>
    </div>
  );
}

export default Footer;
