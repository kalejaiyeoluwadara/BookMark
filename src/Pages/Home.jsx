import React from "react";
import illustration from "../assets/images/illustration-hero.svg";
import dot from "../assets/images/bg-dots.svg";
import Button from "../Components/Button";
import { motion } from "framer-motion";
function Home() {
  return (
    <div
      id="home"
      className="w-screen h-[100vh] mt-4 bgi flex py-20 px-10 items-center justify-center"
    >
      {/* Text content Div */}
      {/* <img className="absolute right-10 top-10" src={dot} alt="" /> */}
      <div className="sm:w-[40%] flex flex-col ">
        <h1 className="font-[600] opacity-[0.9] w-[400px] text-[40px] ">
          A Simple Bookmark Manager
        </h1>
        <p className="w-[500px] mt-2 text-[22px] font-[500] opacity-[0.8]">
          A clean and simple interface to organize your favourite websites. Open
          a new browser tab and see your sites load instantly. Try it for free.
        </p>
        <section className="mt-4 flex gap-4 w-full ">
          <Button name={"Get it on Chrome"} blue={true} />
          <Button name={"Get it on Firefox"} blue={false} />
        </section>
      </div>
      {/* Illustration Div */}
      <div className="sm:w-[40%] flex items-center justify-center ">
        <img src={illustration} alt="" />
      </div>
    </div>
  );
}

export default Home;
