import { useState } from "react";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";

import { logIn } from "../supabase/Form";
import { supabase } from "../supabase";

import { Button } from "../components/Button";
import { Spinner } from "../components/Spinner";

import { useLoadWorkouts } from "../hooks/useWorkouts";

function Login() {
  const [email, setEmail] = useState("giuseppe@crescitelli.it");
  const [password, setPassword] = useState("ciao1234");

  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const loadWorkouts = useLoadWorkouts();

  function handleSubmit(e) {
    e.preventDefault();

    if (!email || !password) return;

    setIsLoading(true);

    async function login() {
      const { data, error } = await logIn({ email, password });

      if (error) {
        toast.error(error.message);
      }

      if (data?.user?.aud === "authenticated") {
        const { data: workoutsData } = await supabase
          .from("workouts")
          .select("*")
          .eq("userUUID", data.user.id)
          .order("created_at", { ascending: true });

        const workouts = [];

        workouts.push(...workoutsData.map((wk) => wk.workout));

        navigate("/app");
        toast.success("Login successfully!");
        loadWorkouts(workouts || []);
      }

      setIsLoading(false);
      setEmail("");
      setPassword("");
    }

    login();
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex h-screen w-full flex-col items-center justify-center gap-2"
    >
      <h1 className="text-center font-[Nunito] text-2xl font-thin uppercase">
        Log in into your account
      </h1>
      <input
        value={email}
        disabled={isLoading}
        onChange={(e) => setEmail(e.target.value)}
        className="mt-4 rounded-md border border-neutral-500 px-4 py-2 disabled:bg-neutral-200 disabled:text-neutral-400"
        type="text"
        placeholder="Email"
      />
      <input
        value={password}
        disabled={isLoading}
        onChange={(e) => setPassword(e.target.value)}
        className="rounded-md border border-neutral-500 px-4 py-2 disabled:bg-neutral-200 disabled:text-neutral-400"
        type="password"
        placeholder="Password"
      />
      {isLoading ? <Spinner /> : <Button>Log In</Button>}
    </form>
  );
}

export { Login };
