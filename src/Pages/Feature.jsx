import React, { useState } from "react";

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
            },
            {
              name: "Speedy Searching",
              count: 1,
            },
            {
              name: "Easy Sharing",
              count: 2,
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
      className={` py-3 px-8 rounded-[4px] cursor-pointer text-[20px] ${
        count == countstate ? "border-b-[5px] font-[600] border-orange-600" : ""
      } `}
    >
      {name}
    </p>
  );
};
export default Feature;
