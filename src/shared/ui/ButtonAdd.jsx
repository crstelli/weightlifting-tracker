import { CirclePlus } from "lucide-react";

import { Button } from "./Button";

function ButtonAdd({ children, onClick, classes }) {
  return (
    <Button onClick={onClick} classes={`flex items-center gap-1 ${classes}`}>
      <CirclePlus className="w-5" />
      <span>{children}</span>
    </Button>
  );
}

export { ButtonAdd };
