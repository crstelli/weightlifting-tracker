import { BrowserRouter, Routes, Route } from "react-router";
import { Toaster } from "react-hot-toast";

import { WorkoutsHistory } from "./pages/WorkoutsHistory";
import { Workout } from "./pages/Workout";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <Toaster />
        <Routes>
          <Route index element={<Home />} />

          <Route path="app" element={<WorkoutsHistory />} />
          <Route path="workout" element={<Workout />} />
          <Route path="login" element={<Login />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
