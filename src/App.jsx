import { BrowserRouter, Routes, Route, useLocation } from "react-router";
import { Toaster } from "react-hot-toast";
import { AnimatePresence, motion } from "motion/react";

import { WorkoutsHistory } from "./pages/WorkoutsHistory";
import { Workout } from "./pages/Workout";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          index
          element={
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <Home />
            </motion.div>
          }
        />

        <Route path="app" element={<WorkoutsHistory />} />
        <Route path="workout" element={<Workout />} />
        <Route
          path="login"
          element={
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <Login />
            </motion.div>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Toaster />
      <AnimatedRoutes />
    </BrowserRouter>
  );
}
