import { useState } from "react";
import { Pen } from "lucide-react";

import { useAddSet, useEditExerciseTitle } from "../hooks/useWorkout";

import { ExerciseSet } from "./ExerciseSet";

import { ButtonAdd } from "../../../shared/ui/ButtonAdd";
import { Button } from "../../../shared/ui/Button";

function Exercise({ title, sets, id }) {
  const addSet = useAddSet();

  return (
    <div className="mx-auto mt-4 flex flex-col rounded-md border border-neutral-400 bg-neutral-100 p-4">
      <Title exerciseId={id}>{title}</Title>
      <Header />
      <div className="mt-2 flex flex-col">
        {sets.map((s, i) => (
          <ExerciseSet key={s.id} set={s} index={i + 1} exId={id} />
        ))}
      </div>
      <ButtonAdd onClick={() => addSet(id)} classes={"self-start mt-4"}>
        Set
      </ButtonAdd>
    </div>
  );
}

function Title({ children, exerciseId }) {
  const [isEditing, setIsEditing] = useState(false);
  const editTitle = useEditExerciseTitle();

  return (
    <div className="flex gap-2 text-lg font-medium tracking-[1.5px]">
      {isEditing ? (
        <>
          <input
            type="text"
            value={children}
            className="w-full rounded-md border border-neutral-500 bg-neutral-100 pl-4"
            onChange={(e) => editTitle(exerciseId, e.target.value)}
          />
          <Button
            onClick={() =>
              children.length > 1 && children.length < 20 && setIsEditing(false)
            }>
            Save
          </Button>
        </>
      ) : (
        <h3 className="flex items-center gap-1 uppercase">
          <p>{children}</p>
          <span className="translate-y-[1px] cursor-pointer">
            <Pen onClick={() => setIsEditing(true)} />
          </span>
        </h3>
      )}
    </div>
  );
}

function Header() {
  return (
    <div className="mt-2 grid w-full grid-cols-[1fr_2fr_2fr_1fr] gap-4">
      <span className="font-semibold">Set</span>
      <span className="font-semibold">Weight</span>
      <span className="font-semibold">Reps</span>
    </div>
  );
}

export { Exercise };
