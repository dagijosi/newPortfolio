import React from "react";
import { motion } from "framer-motion";

const Home: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-polo-950 to-polo-900 text-white flex flex-col md:flex-row justify-between items-center p-4 md:p-[2rem] gap-16 min-h-screen">
      {/* Left Section: Text */}
      <div className="max-w-2xl mx-auto text-left">
        <motion.h1
          className="text-[2.1rem] md:text-[3.5rem] bg-gradient-to-r from-polo-200 to-polo-500 bg-clip-text text-transparent font-bold mb-6 whitespace-nowrap"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          Hi, I'm Dagmawi Yoseph
        </motion.h1>

        <motion.p
          className="mt-4 text-[1rem] md:text-[1.2rem] leading-[1.8] text-polo-200 mb-8"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          A passionate Full Stack Developer crafting beautiful and functional
          web experiences. I specialize in building modern, responsive
          applications that solve real-world problems.
        </motion.p>

        <motion.button
          className="bg-gradient-to-r from-polo-500 to-polo-600 text-polo-50 py-4 px-8 rounded-lg text-lg font-semibold cursor-pointer transition-all duration-300 ease-in-out hover:transform hover:translate-y-[-2px] hover:shadow-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          View My Work
        </motion.button>
      </div>

      {/* Right Section: Image */}
      <motion.img
        src="image/pic2.png"
        alt="John Doe showcasing his work on a laptop screen"
        className="w-[32rem] h-[38rem] flex-shrink-0 mt-8 md:mt-0"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      />
    </div>
  );
};

export default Home;
