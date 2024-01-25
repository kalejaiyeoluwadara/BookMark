import React, { useState } from "react";
import icon from "../assets/images/icon-arrow.svg";
function Quest({ question, answer }) {
  const [isOPened, setIsOpened] = useState(false);
  return (
    <div className=" sm:w-[800px] flex flex-col ">
      <section className=" py-6 w-full border-t-2 border-opacity-25 border-gray-400 flex  justify-between items-center">
        <p className="text-[20px]  ">{question}</p>
        <img
          src={icon}
          className={`cursor-pointer hover:text-orange-600 ${
            isOPened ? "rotate-180 " : " "
          } `}
          onClick={() => {
            setIsOpened(!isOPened);
          }}
          alt=""
        />
      </section>
      {/* Content */}
      {isOPened && (
        <section>
          <p className="text-[20px] mb-6 w-[100%] opacity-80 ">{answer}</p>
        </section>
      )}
    </div>
  );
}

export default Quest;
