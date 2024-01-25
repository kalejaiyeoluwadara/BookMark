import React from "react";

function Header({ name, content }) {
  return (
    <section className="w-full flex flex-col items-center justify-center gap-4 ">
      <h3 className="font-[600] text-[35px] ">{name}</h3>
      <p className="w-[600px] text-center text-[20px] opacity-[0.8] ">
        {content}
      </p>
    </section>
  );
}

export default Header;
