// export default App
import React, { useState } from "react";
import "./App.css";
import Home from "./Pages/Home";
import Nav from "./Pages/Nav";
import Feature from "./Pages/Feature";
const App = () => {
  return (
    <>
      <Nav />
      <Home />
      <Feature />
    </>
  );
};
export default App;
