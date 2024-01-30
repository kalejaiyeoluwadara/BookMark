// export default App
import React, { useState } from "react";
import "./App.css";
import Home from "./Pages/Home";
import Nav from "./Pages/Nav";
import Feature from "./Pages/Feature";
import Download from "./Pages/Download";
import Faq from "./Pages/Faq";
import Contact from "./Pages/Contact";
import Footer from "./Pages/Footer";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "./reveal";
import Menu from "./Components/Menu";
const App = () => {
  return (
    <AnimatePresence>
      <Menu />
      <Nav />
      <Reveal>
        <Home />
      </Reveal>
      <Reveal>
        <Feature />
      </Reveal>
      <Reveal>
        <Download />
      </Reveal>
      <Reveal>
        <Faq />
      </Reveal>
      <Contact />
      <Footer />
    </AnimatePresence>
  );
};
export default App;
