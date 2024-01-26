import React from "react";

function Header({ name, content }) {
  return (
    <section className="w-full flex flex-col items-center justify-center gap-4 ">
      <h3 className="font-[600] sm:text-start text-center text-[35px] ">
        {name}
      </h3>
      <p className="sm:w-[600px] w-[80%] text-center text-[18px] sm:text-[20px] opacity-[0.8] ">
        {content}
      </p>
    </section>
  );
}

export default Header;
