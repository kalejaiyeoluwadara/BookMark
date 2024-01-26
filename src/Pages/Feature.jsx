import React, { useState } from "react";
import Button from "../Components/Button";
import illus from "../assets/images/illustration-features-tab-1.svg";
import illus1 from "../assets/images/illustration-features-tab-2.svg";
import illus2 from "../assets/images/illustration-features-tab-3.svg";
import Header from "../Components/Header";
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
      className="h-[90vh] w-screen flex flex-col items-center justify-center"
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
        <nav className="flex h-[15vh] border-b-[1px] mt-12 sm:w-auto gap-10 items-end justify-center border-opacity-[0.3] ">
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
        <div className="flex w-full mb-8  mt-20 sm:gap-20 items-center justify-center">
          <section className="sm:w-[40%] flex justify-end  ">
            <img className="h-[300px]" src={items[countstate].img} alt="" />
          </section>
          <section className="flex w-[50%] flex-col gap-3 items-start justify-center">
            <h3 className="font-[600] capitalize text-[30px] ">
              {" "}
              {items[countstate].header}
            </h3>
            <p className="w-[500px] text-[18px] ">
              {items[countstate].content}
            </p>
            <Button name={"More info"} blue={true} />
          </section>
        </div>
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
      className={` py-5 px-8 rounded-[4px] cursor-pointer text-[20px] ${
        count == countstate ? "border-b-[5px] font-[600] border-orange-600" : ""
      } `}
    >
      {name}
    </p>
  );
};
export default Feature;
