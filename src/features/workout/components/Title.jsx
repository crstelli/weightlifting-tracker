import { useState } from "react";
import { Pen } from "lucide-react";

import { useTitle, useSetTitle } from "../hooks/useWorkout";
import { Button } from "../../../shared/ui/Button";

function Title() {
  const [isEditing, setIsEditing] = useState(false);

  const title = useTitle();
  const setTitle = useSetTitle();

  return (
    <div className="flex justify-center gap-2">
      {isEditing ? (
        <>
          <input
            type="text"
            className="rounded-md border border-neutral-500 bg-neutral-100 text-center"
            value={title}
            onChange={(e) =>
              e.target.value.length < 25 && setTitle(e.target.value)
            }
          />
          <Button
            onClick={() => {
              title && setIsEditing(false);
            }}>
            Save
          </Button>
        </>
      ) : (
        <>
          <h2 className="text-2xl font-semibold">{title}</h2>
          <Pen
            onClick={() => setIsEditing(true)}
            className="translate-y-[2px] cursor-pointer self-center"
          />
        </>
      )}
    </div>
  );
}

export { Title };
