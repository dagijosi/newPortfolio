import React from "react";
import { motion } from "framer-motion";

const Home: React.FC = () => {
  return (
    <div id="home" className="relative bg-gradient-to-r from-polo-950 to-polo-900 text-white flex flex-col md:flex-row justify-between items-center p-4 md:p-[2rem] md:pb-0 gap-16 overflow-x-hidden">
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
          onClick={() => window.location.href = '#projects'}
        >
          View My Work
        </motion.button>
      </div>

      {/* Right Section: Image */}
      <motion.img
        src="image/pic2.png"
        alt="A developer showcasing their work on a laptop screen"
        className="w-full max-w-lg h-[38rem] flex-shrink-0 mt-8 md:mt-0 rounded-lg shadow-md z-10"
        loading="lazy"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      />

       {/* Wave Section with Framer Motion */}
       <div className="absolute bottom-0 left-0 w-screen overflow-hidden z-0">
        <motion.div
          className="h-52 bg-[#414d74]"
          animate={{
            clipPath: [
              // Approximation of the SVG wave path using polygon
              "polygon(0% 60%, 5% 55%, 10% 60%, 15% 55%, 20% 50%, 25% 55%, 30% 50%, 35% 55%, 40% 60%, 45% 55%, 50% 50%, 55% 55%, 60% 60%, 65% 55%, 70% 50%, 75% 55%, 80% 60%, 85% 55%, 90% 50%, 95% 55%, 100% 60%, 100% 100%, 0% 100%)",
              // Second wave cycle
              "polygon(0% 50%, 5% 45%, 10% 50%, 15% 45%, 20% 50%, 25% 45%, 30% 50%, 35% 45%, 40% 50%, 45% 45%, 50% 40%, 55% 45%, 60% 50%, 65% 45%, 70% 40%, 75% 45%, 80% 50%, 85% 45%, 90% 40%, 95% 45%, 100% 50%, 100% 100%, 0% 100%)",
            ],
          }}
          transition={{
            duration: 4,
            ease: "easeInOut",
            repeat: Infinity, // Loop the animation for continuous wave effect
            repeatType: "reverse", // Make it reverse after each cycle
          }}
        />
      </div>
    </div>
  );
};

export default Home;
