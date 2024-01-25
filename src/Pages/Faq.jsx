import React from "react";
import Header from "../Components/Header";

function Faq() {
  return (
    <div className="h-[100vh] w-screen flex items-center justify-center ">
      <Header
        name={"Frequently Asked Questions"}
        content={`Here are some of our FAQs. If you have any other questions you’d like 
  answered please feel free to email us.`}
      />
    </div>
  );
}

export default Faq;
