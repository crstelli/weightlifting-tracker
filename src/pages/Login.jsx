import { useState } from "react";
import { useNavigate } from "react-router";

import { logIn } from "../supabase/Form";
import { supabase } from "../supabase";

import { Button } from "../components/Button";
import { useLoadWorkouts } from "../hooks/useWorkouts";

function Login() {
  const [email, setEmail] = useState("giuseppe@crescitelli.it");
  const [password, setPassword] = useState("ciao1234");

  const navigate = useNavigate();
  const loadWorkouts = useLoadWorkouts();

  function handleSubmit(e) {
    e.preventDefault();

    if (!email || !password) return;

    async function login() {
      const data = await logIn({ email, password });

      if (data.user.aud === "authenticated") {
        const { data: workoutsData } = await supabase
          .from("workouts")
          .select("*")
          .eq("userUUID", data.user.id)
          .order("created_at", { ascending: true });

        const workouts = [];

        workouts.push(...workoutsData.map((wk) => wk.workout));

        navigate("/app");
        loadWorkouts(workouts || []);
      }
    }

    login();
    setEmail("");
    setPassword("");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex h-screen w-full flex-col items-center justify-center gap-2"
    >
      <h1 className="tex-center text-2xl">Log In</h1>
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="rounded-md border border-neutral-500 px-4 py-2"
        type="text"
        placeholder="Email"
      />
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="rounded-md border border-neutral-500 px-4 py-2"
        type="password"
        placeholder="Password"
      />
      <Button>Log In</Button>
    </form>
  );
}

export { Login };
