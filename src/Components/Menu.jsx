import React from "react";
import logo from "../assets/images/logo-bookmark.svg";
import cancel from "../assets/images/icon-close.svg";
function Menu() {
  return (
    <div className="fixed top-0 left-0 bgg z-50 h-screen w-screen flex items-start justify-center ">
      <div className="flex justify-between items-center w-full px-12 pt-12 ">
        <img src={logo} alt="logo" />
        <img src={cancel} alt="cancel" />
      </div>
      {/* Links */}
      <div>{}</div>
      {/* Footer */}
    </div>
  );
}

export default Menu;
