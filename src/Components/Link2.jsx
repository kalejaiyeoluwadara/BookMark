import React from "react";

function Link({ link, name }) {
  return (
    <a
      className={`uppercase font-[500] py-3 px-4 text-[15px] text-white hover:text-orange-600 `}
      href={link}
    >
      {name}
    </a>
  );
}

export default Link;
