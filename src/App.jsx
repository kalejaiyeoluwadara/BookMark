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
const App = () => {
  return (
    <AnimatePresence>
      <Nav />
      <Home />
      <Feature />
      <Download />
      <Faq />
      <Contact />
      <Footer />
    </AnimatePresence>
  );
};
export default App;
