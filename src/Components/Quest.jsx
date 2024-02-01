import React, { useState } from "react";
import icon from "../assets/images/icon-arrow.svg";
import { motion, AnimatePresence } from "framer-motion";
function Quest({ question, answer }) {
  const [isOPened, setIsOpened] = useState(false);
  return (
    <motion.div className="px-3">
      <section className=" py-6 w-[85%] sm:w-[650px] border-t-2 border-opacity-25 border-gray-400 flex  sm:justify-between items-center">
        <p className="sm:text-[20px] text-[18px] sm:text-start w-full  sm:w-auto  ">
          {question}
        </p>
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
      <AnimatePresence>
        {isOPened && (
          <motion.section
            key={isOPened}
            initial={{
              height: "0",
            }}
            animate={{
              height: "auto",
            }}
            exit={{
              opacity: "0",
              height: 0,
            }}
          >
            <p className="text-[20px] w-[85%] sm:text-start mb-6 sm:w-[650px] opacity-80 ">
              {answer}
            </p>
          </motion.section>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default Quest;
