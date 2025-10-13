import { ExerciseSet } from "./ExerciseSet";
import { ButtonAdd } from "./ButtonAdd";
import { useAddSet } from "../hooks/useWorkout";

function Exercise({ title, sets, id }) {
  const addSet = useAddSet();

  return (
    <div className="mx-auto mt-4 flex w-[100%] max-w-[600px] flex-col rounded-md border border-neutral-400 bg-neutral-100 p-4">
      <ExerciseTitle>{title}</ExerciseTitle>
      <ExerciseHeader />
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

function ExerciseTitle({ children }) {
  return (
    <h3 className="text-lg font-medium tracking-[1.5px] uppercase">
      {children}
    </h3>
  );
}

function ExerciseHeader() {
  return (
    <div className="mt-2 grid grid-cols-[50px_150px_150px_1fr] gap-4">
      <span className="font-semibold">Set</span>
      <span className="font-semibold">Weight</span>
      <span className="font-semibold">Reps</span>
    </div>
  );
}

export { Exercise };
