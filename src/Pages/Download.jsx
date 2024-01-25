import React from "react";
import Header from "../Components/Header";

function Download() {
  return (
    <div className="h-[100vh] flex items-center justify-center w-screen ">
      <Header
        name={"Download the extension"}
        content={`We’ve got more browsers in the pipeline. Please do let us know if you’ve 
  got a favourite you’d like us to prioritize.`}
      />
    </div>
  );
}

export default Download;
