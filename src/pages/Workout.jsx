import { useNavigate } from "react-router";

import { useAddExercise, useExercises, useWorkout } from "../hooks/useWorkout";

import { Navbar } from "../components/Navbar";
import { Main } from "../components/Main";

import { WorkoutTitle } from "../components/WorkoutTitle";
import { Exercise } from "../components/Exercise";

import { ButtonAdd } from "../components/ButtonAdd";
import { Button } from "../components/Button";
import { useAddWorkout } from "../hooks/useWorkouts";

function Workout() {
  const navigate = useNavigate();

  const exercises = useExercises();
  const workout = useWorkout();

  const addWorkout = useAddWorkout();
  const addExercise = useAddExercise();

  function handleFinish() {
    addWorkout(workout);
    navigate("/app");
  }

  return (
    <div>
      <Navbar />
      <Main>
        <WorkoutTitle />
        {exercises.map((ex) => (
          <Exercise key={ex.id} id={ex.id} title={ex.title} sets={ex.sets} />
        ))}
        <ButtonAdd onClick={() => addExercise()} classes={"mx-auto mt-8"}>
          Add Exercise
        </ButtonAdd>
        <div className="mt-10">
          {exercises.length > 1 && (
            <Button
              onClick={handleFinish}
              bg={
                "bg-gradient-to-l from-green-400/80 to-green-400 text-neutral-800"
              }
              classes={"mx-auto block "}
            >
              Finish Workout
            </Button>
          )}
          <Button
            bg={"bg-gradient-to-l from-red-400/80 to-red-400 text-neutral-800"}
            classes={"mx-auto block mt-2"}
          >
            Discard Workout
          </Button>
        </div>
      </Main>
    </div>
  );
}

export { Workout };
