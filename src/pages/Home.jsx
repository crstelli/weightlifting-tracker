import { Link } from "react-router";
import { motion } from "motion/react";

import { Button } from "../components/Button";

function Home() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-neutral-950 font-[Nunito] text-neutral-50">
      <motion.h1
        initial={{
          opacity: 0,
          translateY: 20,
        }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{
          duration: 1,
          delay: 0.5,
        }}
        className="bg-gradient-to-r from-sky-600 to-red-400 bg-clip-text text-6xl font-bold text-transparent"
      >
        Welcome
      </motion.h1>
      <motion.h2
        initial={{
          opacity: 0,
          translateY: 20,
        }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{
          duration: 1,
          delay: 1,
        }}
        className="text-neutral-500"
      >
        This is a <span>Weight-Lifting Tracker</span>
      </motion.h2>
      <motion.div
        className="mt-10"
        initial={{
          opacity: 0,
          translateY: 20,
        }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{
          duration: 1,
          delay: 1.5,
        }}
      >
        <Link to="/login">
          <Button bg="bg-gradient-to-r from-sky-600 text-black to-red-400">
            Enter the App
          </Button>
        </Link>
      </motion.div>
      <motion.span
        initial={{
          opacity: 0,
          translateY: 20,
        }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{
          duration: 1,
          delay: 4,
        }}
        className="absolute bottom-10 font-thin text-neutral-400"
      >
        Made by crstelly &copy; 2025
      </motion.span>
    </div>
  );
}

export { Home };
