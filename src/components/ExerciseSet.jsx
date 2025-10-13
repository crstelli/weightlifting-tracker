import { CircleCheck, Trash } from "lucide-react";
import {
  useChangeReps,
  useChangeWeight,
  useCheckSet,
  useDeleteSet,
} from "../hooks/useWorkout";

function ExerciseSet({ set, exId, index }) {
  const { id, weight, reps, check } = set;

  const changeWeight = useChangeWeight();
  const changeReps = useChangeReps();

  const checkSet = useCheckSet();
  const deleteSet = useDeleteSet();

  return (
    <div
      className={`grid grid-cols-[50px_150px_150px_1fr] items-center gap-4 rounded-md p-2 ${check ? "bg-green-200" : null}`}
    >
      <span className="px-1 font-bold">{index}</span>
      <SetInput
        onChange={(e) => changeWeight(id, exId, e.target.value)}
        value={weight || ""}
        disabled={check}
      />
      <SetInput
        onChange={(e) => changeReps(id, exId, e.target.value)}
        value={reps || ""}
        disabled={check}
      />
      <div className="flex gap-2">
        <CircleCheck
          onClick={() => checkSet(id, exId)}
          className="cursor-pointer"
        />
        <Trash onClick={() => deleteSet(id, exId)} className="cursor-pointer" />
      </div>
    </div>
  );
}

function SetInput({ value, disabled, onChange }) {
  return (
    <input
      value={value}
      disabled={disabled}
      onChange={onChange}
      placeholder="10"
      type="number"
      className="text-bold rounded-md border border-neutral-400 bg-white px-4 disabled:border-neutral-100 disabled:bg-green-100 disabled:font-semibold"
    />
  );
}

export { ExerciseSet };
