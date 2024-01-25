import React, { useState } from "react";
import Button from "../Components/Button";
import illus from "../assets/images/illustration-features-tab-1.svg";
import illus1 from "../assets/images/illustration-features-tab-2.svg";
import illus2 from "../assets/images/illustration-features-tab-3.svg";
function Feature() {
  const [countstate, setCounstate] = useState(0);
  return (
    <div className="h-[90vh] w-screen flex flex-col items-center justify-center">
      {/* First Section */}
      <section className="w-full flex flex-col items-center justify-center gap-4 ">
        <h3 className="font-[600] text-[30px] ">Features</h3>
        <p className="w-[400px] text-center text-[17px] opacity-[0.8] ">
          Our aim is to make it quick and easy for you to access your favourite
          websites. Your bookmarks sync between your devices so you can access
          them on the go.
        </p>
      </section>

      {/* Second Section */}
      <section className="bg-white w-full flex items-center justify-center flex-col">
        {/* Nav section */}
        <nav className="flex h-[15vh] border-b-[1px] mt-12 sm:w-auto gap-10 items-end justify-center border-opacity-[0.3] ">
          {[
            {
              name: "Simple BookMarking",
              count: 0,
              img: illus,
              content: "",
            },
            {
              name: "Speedy Searching",
              count: 1,
              img: illus,
              content: "",
            },
            {
              name: "Easy Sharing",
              count: 2,
              img: illus,
              content: "",
            },
          ].map((nav, id) => {
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
        <div className="flex w-full gap-10 items-center justify-center">
          <section>
            <img className="sm:w-[40%]" src={illus} alt="" />
          </section>
          <section className="flex flex-col gap-3 items-center justify-center">
            <h3>Bookmark in one click</h3>
            <p>
              Organize your bookmarks however you like. Our simple drag-and-drop
              interface gives you complete control over how you manage your
              favourite sites.
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
