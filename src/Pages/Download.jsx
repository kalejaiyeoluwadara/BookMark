import React, { useState } from "react";
import Header from "../Components/Header";
import Extension from "./Slot";
import icon from "../assets/images/logo-chrome.svg";
import icon1 from "../assets/images/logo-opera.svg";
import icon2 from "../assets/images/logo-firefox.svg";
function Download() {
  const [items, setItems] = useState([
    {
      img: icon,
      title: "Add to Chrome",
      text: "Minimum version 62",
    },
    {
      img: icon1,
      title: "Add to Firefox",
      text: "Minimum version 55",
    },
    ,
    {
      img: icon2,
      title: "Add to Opera",
      text: "Minimum version 46",
    },
  ]);
  return (
    <div className="h-auto py-40 flex flex-col  items-center justify-center w-screen ">
      <Header
        name={"Download the extension"}
        content={`We’ve got more browsers in the pipeline. Please do let us know if you’ve 
  got a favourite you’d like us to prioritize.`}
      />
      {/* Slots Section */}
      <section className="flex mt-20 gap-10">
        {items.map((slot, id) => {
          const { img, title, text } = slot;
          return (
            <div
              style={{
                marginTop: `${id * 40}px`,
              }}
              key={id}
            >
              <Extension img={img} title={title} text={text} />
            </div>
          );
        })}
      </section>
    </div>
  );
}

export default Download;
