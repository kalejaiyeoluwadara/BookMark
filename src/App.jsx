// export default App
import React, { useState } from "react";
import "./App.css";
import Home from "./Pages/Home";
import Nav from "./Pages/Nav";
import Feature from "./Pages/Feature";
import Download from "./Pages/Download";
import Faq from "./Pages/Faq";
const App = () => {
  return (
    <>
      <Nav />
      <Home />
      <Feature />
      <Download />
      <Faq />
    </>
  );
};
export default App;
