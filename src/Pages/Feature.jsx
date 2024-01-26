import React, { useState } from "react";
import Button from "../Components/Button";
import illus from "../assets/images/illustration-features-tab-1.svg";
import illus1 from "../assets/images/illustration-features-tab-2.svg";
import illus2 from "../assets/images/illustration-features-tab-3.svg";
import Header from "../Components/Header";
import { motion, AnimatePresence } from "framer-motion";
function Feature() {
  const [countstate, setCounstate] = useState(0);
  const [items, setItem] = useState([
    {
      name: "Simple BookMarking",
      count: 0,
      img: illus,
      header: "Bookmark in one click",
      content: `Organize your bookmarks however you like. Our simple drag-and-drop interface 
  gives you complete control over how you manage your favourite sites.`,
    },
    {
      name: "Speedy Searching",
      count: 1,
      img: illus1,
      header: "Intelligent search",
      content: `Our powerful search feature will help you find saved sites in no time at all. 
  No need to trawl through all of your bookmarks`,
    },
    {
      name: "Easy Sharing",
      count: 2,
      img: illus2,
      header: "Share your bookmarks",
      content: `Easily share your bookmarks and collections with others. Create a shareable 
  link that you can send at the click of a button.`,
    },
  ]);
  return (
    <div
      id="features"
      className="h-auto py-20 w-screen flex flex-col items-center justify-center"
    >
      {/* First Section */}
      <Header
        name={"Features"}
        content={`Our aim is to make it quick and easy for you to access your favourite
          websites. Your bookmarks sync between your devices so you can access
          them on the go.`}
      />

      {/* Second Section */}
      <section className="bg-white w-full flex items-center justify-center flex-col">
        {/* Nav section */}
        <nav className="flex  sm:flex-row flex-col h-[auto] sm:h-[15vh] border-b-[1px] mt-12 sm:w-auto w-full gap-10  items-center sm:items-end justify-center border-opacity-[0.3] ">
          {items.map((nav, id) => {
            const { name, count } = nav;
            return (
              <Link
                countstate={countstate}
                setCounstate={setCounstate}
                name={name}
                count={count}
              />
            );
          })}
        </nav>

        {/* Dynamic Content */}
        <motion.div
          layout
          key={countstate}
          initial={{
            opacity: 0,
            y: "100px",
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          exit={{
            y: "-100px",
          }}
          transition={{
            duration: 0.5,
          }}
          className="flex w-full mb-8 sm:flex-row flex-col mt-20 sm:gap-20 items-center  justify-center"
        >
          <section className="sm:w-[40%]  flex  justify-end  ">
            <img className="h-[300px]" src={items[countstate].img} alt="" />
          </section>
          <section className="flex sm:w-[50%] sm:gap-0  flex-col gap-3 items-center sm:items-start justify-center">
            <h3 className="font-[600] sm:mt-0 mt-6 sm:text-start text-center capitalize sm:text-[30px] text-[25px] ">
              {" "}
              {items[countstate].header}
            </h3>
            <p className="sm:w-[500px] sm:mb-0 mb-4 w-[90%] sm:text-start text-center text-[17px] = sm:text-[18px] ">
              {items[countstate].content}
            </p>
            <Button name={"More info"} blue={true} />
          </section>
        </motion.div>
      </section>
    </div>
  );
}
const Link = ({ name, count, countstate, setCounstate }) => {
  return (
    <p
      onClick={() => {
        setCounstate(count);
      }}
      className={` py-5 px-8 rounded-[4px] sm:block flex items-center justify-center sm:w-auto w-[80%] cursor-pointer text-[20px] ${
        count == countstate
          ? "border-b-[5px] font-[600] border-orange-600"
          : "  "
      } `}
    >
      {name}
    </p>
  );
};
export default Feature;
