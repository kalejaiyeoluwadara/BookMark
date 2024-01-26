import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation, easeIn } from "framer-motion";
function Reveal({ children }) {
  return (
    <div className="relative">
      <motion.div
        initial={{
          opacity: 0,
          y: 75,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
          delay: 0.5,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}

export default Reveal;
