import { useState } from "react";
import { useWorkouts } from "../hooks/useWorkouts";

import { SectionTitle } from "./SectionTitle";
import { WorkoutModal } from "./WorkoutModal";
import { Modal } from "./Modal";

function WorkoutsList() {
  const workouts = useWorkouts();

  const [selectedWorkout, setSelectedWorkout] = useState({});

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
      <div className="mt-2 grid h-full grid-cols-1 gap-2 sm:grid-cols-2">
        {workouts.map((wk) => (
          <Workout
            key={wk.id}
            title={wk.title}
            duration={wk.duration}
            exercises={wk.exercises.length}
            onClick={() => setSelectedWorkout(wk)}
          />
        ))}
      </div>
      {Object.keys(selectedWorkout).length !== 0 && (
        <Modal>
          <WorkoutModal
            workout={selectedWorkout}
            handleClose={() => setSelectedWorkout({})}
          />
        </Modal>
      )}
    </div>
  );
}

function Workout({ title, duration, exercises, onClick }) {
  return (
    <div
      onClick={onClick}
      className="grid cursor-pointer grid-cols-1 items-center rounded-md border border-neutral-400 bg-neutral-100 p-2 text-center sm:grid-cols-[2fr_1fr] sm:grid-rows-2"
    >
      <p className="row-span-2 font-semibold">{title}</p>
      <span className="mt-2 sm:mt-0">{duration} min.</span>
      <span>{exercises} exercises</span>
    </div>
  );
}

export { WorkoutsList };
