import { useState } from "react";
import { Link } from "react-router";

import { useSignUp } from "../hooks/useSignup";

import { AnimatedDiv } from "../../../shared/ui/AnimatedDiv";
import { Button } from "../../../shared/ui/Button";
import { Spinner } from "../../../shared/ui/Spinner";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const { isLoading, handleSignUp } = useSignUp();

  function handleSubmit(e) {
    e.preventDefault();
    handleSignUp(email, password, confirmPassword);
  }

  return (
    <AnimatedDiv>
      <form
        onSubmit={handleSubmit}
        className="flex h-screen w-full flex-col items-center justify-center gap-2">
        <h1 className="text-center font-[Nunito] text-2xl font-thin uppercase">
          Create a new Account
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
        <input
          value={confirmPassword}
          disabled={isLoading}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="rounded-md border border-neutral-500 px-4 py-2 disabled:bg-neutral-200 disabled:text-neutral-400"
          type="password"
          placeholder="Confirm Password"
        />
        {isLoading ? (
          <Spinner />
        ) : (
          <>
            <Button classes={"mt-2"}>Sign Up</Button>
            <p className="mt-2 text-lg">
              Or{" "}
              <Link
                className="text cursor-pointer border-b-1 font-bold"
                to="/login">
                Log In
              </Link>
            </p>
          </>
        )}
      </form>
    </AnimatedDiv>
  );
}

export { Signup };
