import { AnimatePresence } from "motion/react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router";
import { Toaster } from "react-hot-toast";

import { Landing } from "./features/landing/pages/Landing";
import { Login } from "./features/login/pages/Login";
import { Home } from "./features/home/pages/Home";
import { Workout } from "./features/workout/pages/Workout";

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route index element={<Landing />} />

        <Route path="home" element={<Home />} />
        <Route path="workout" element={<Workout />} />
        <Route path="login" element={<Login />} />
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
