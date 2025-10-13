import { useWorkouts } from "../hooks/useWorkouts";

import { SectionTitle } from "./SectionTitle";

function WorkoutsList() {
  const workouts = useWorkouts();

  return (
    <div>
      {workouts.length > 0 ? (
        <SectionTitle>My Workouts</SectionTitle>
      ) : (
        <p className="text-center text-lg">
          You didn't created a workout yet.
          <br />
          Start by clicking the button below
        </p>
      )}
      <div className="mt-2 grid grid-cols-2 gap-2">
        {workouts.map((wk) => (
          <Workout
            key={wk.id}
            title={wk.title}
            duration={wk.duration}
            exercises={wk.exercises.length}
          />
        ))}
      </div>
    </div>
  );
}

function Workout({ title, duration, exercises }) {
  return (
    <div className="grid cursor-pointer grid-cols-[2fr_1fr] grid-rows-2 items-center rounded-md border border-neutral-400 bg-neutral-100 p-2">
      <p className="row-span-2">{title}</p>
      <span>{duration} min.</span>
      <span>{exercises} exercises</span>
    </div>
  );
}

export { WorkoutsList };
