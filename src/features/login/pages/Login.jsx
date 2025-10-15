// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import { useState } from "react";

import { Button } from "../../../shared/ui/Button";
import { Spinner } from "../../../shared/ui/Spinner";

import { useLogin } from "../hooks/useLogin";

function Login() {
  const [email, setEmail] = useState("giuseppe@crescitelli.it");
  const [password, setPassword] = useState("ciao1234");

  const { isLoading, handleLogin } = useLogin();

  function handleSubmit(e) {
    e.preventDefault();
    handleLogin(email, password);
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}>
      <form
        onSubmit={handleSubmit}
        className="flex h-screen w-full flex-col items-center justify-center gap-2">
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
    </motion.div>
  );
}

export { Login };
