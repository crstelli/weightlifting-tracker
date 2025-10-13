import { Link } from "react-router";

import { Button } from "../components/Button";

function Home() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-10">
      <h1 className="text-6xl">Welcome</h1>
      <Link to="/app">
        <Button>Enter the app</Button>
      </Link>
    </div>
  );
}

export { Home };
