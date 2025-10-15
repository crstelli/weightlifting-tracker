// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";

function AnimatedDiv({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}>
      {children}
    </motion.div>
  );
}

export { AnimatedDiv };
