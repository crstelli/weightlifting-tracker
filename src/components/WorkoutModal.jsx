import { X } from "lucide-react";

function WorkoutModal({ workout, handleClose }) {
  return (
    <div className="flex h-full w-full justify-center">
      <div className="absolute w-[50%] max-w-[500px] min-w-[300px] rounded-md bg-white p-4">
        <div className="text-center">
          <h1 className="text-xl font-semibold text-neutral-800">
            {workout.title}
          </h1>
          <p>Duration: {workout.duration} mins.</p>
        </div>
        <div className="mt-5 flex flex-col gap-4">
          {workout.exercises.map((ex) => (
            <ExerciseItem key={ex.id} exercise={ex} />
          ))}
        </div>
        <span onClick={handleClose}>
          <X className="absolute top-4 right-4 cursor-pointer" />
        </span>
      </div>
    </div>
  );
}

function ExerciseItem({ exercise }) {
  return (
    <div className="rounded-md border border-neutral-400 bg-neutral-100 p-2">
      <h2 className="tracking-[3px] uppercase">{exercise.title}</h2>
      <div className="mt-3 grid grid-cols-[2fr_3fr_3fr] text-center font-bold">
        <span>Set</span>
        <span>Weight</span>
        <span>Reps</span>
      </div>
      {exercise.sets.map((s, i) => (
        <SetItem key={s.id} set={s} index={i + 1} />
      ))}
    </div>
  );
}

function SetItem({ set, index }) {
  return (
    <div className="grid grid-cols-[2fr_3fr_3fr] text-center">
      <span>{index}</span>
      <span>{set.weight}</span>
      <span>{set.reps}</span>
    </div>
  );
}

export { WorkoutModal };
