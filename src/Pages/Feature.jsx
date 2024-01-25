import React from "react";

function Feature() {
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
        <nav className="flex h-[15vh] border-b-[1px] mt-12 sm:w-[70%] items-center justify-center border-opacity-[0.3] ">
          {[
            {
              name: "Simple BookMarking",
              count: 0,
            },
            {
              name: "Simple BookMarking",
              count: 0,
            },
            {
              name: "Simple BookMarking",
              count: 0,
            },
          ].map((nav, id) => {
            const { name, count } = nav;
            return <Link name={name} count={count} />;
          })}
        </nav>
      </section>
    </div>
  );
}
const Link = ({ name, count }) => {
  return <p>{name}</p>;
};
export default Feature;
