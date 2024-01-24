import React from "react";

function Link({ link, name, special }) {
  return (
    <a
      className={`uppercase font-[600] ${
        special
          ? "bg-orange-600 rounded-[5px] border-none hover:bg-white hover:text-orange-500 border-2 hover:border-orange-500 text-white opacity-[0.8"
          : "bg-white"
      } py-3 px-4 ] hover:text-orange-600 `}
      href={link}
    >
      {name}
    </a>
  );
}

export default Link;
