import React from "react";
import Button from "../Components/Button";
import icon from "../assets/images/logo-chrome.svg";
function Extension({ img, title, text }) {
  return (
    <div className="h-[360px] gap-6 flex flex-col rounded-[12px] py-6 items-center justify-around  w-[300px] bg-white shadow-md ">
      <section>
        <img src={img} alt="" />
      </section>
      <section>
        <h3 className="font-[600] text-[22px] ">{title}</h3>
        <p className="text-[18px] opacity-80 ">{text}</p>
      </section>
      <section>
        <hr />
        <Button name={"Add & Install Extension"} blue={true} />
      </section>
    </div>
  );
}

export default Extension;
