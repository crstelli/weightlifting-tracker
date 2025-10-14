import { useNavigate } from "react-router";

import {
  useAddExercise,
  useExercises,
  useReset,
  useWorkout,
} from "../hooks/useWorkout";

import { Navbar } from "../components/Navbar";
import { Main } from "../components/Main";
import { Footer } from "../components/Footer";

import { WorkoutTitle } from "../components/WorkoutTitle";
import { Exercise } from "../components/Exercise";

import { ButtonAdd } from "../components/ButtonAdd";
import { Button } from "../components/Button";
import { useAddWorkout } from "../hooks/useWorkouts";

function Workout() {
  const navigate = useNavigate();

  const exercises = useExercises();
  const workout = useWorkout();
  const reset = useReset();

  const addWorkout = useAddWorkout();
  const addExercise = useAddExercise();

  function handleFinish() {
    const newWorkout = {
      id: workout.id,
      title: workout.title,
      exercises: [...workout.exercises],
      duration: 60,
    };

    addWorkout(newWorkout);

    navigate("/app");
    reset();
  }

  function handleDiscard() {
    navigate("/app");
    reset();
  }

  return (
    <div className="relative h-full pb-10">
      <Navbar />
      <Main>
        <WorkoutTitle />
        <div className="mx-auto w-[90%] max-w-[500px] min-w-[300px]">
          {exercises.map((ex) => (
            <Exercise key={ex.id} id={ex.id} title={ex.title} sets={ex.sets} />
          ))}
        </div>
        <ButtonAdd onClick={() => addExercise()} classes={"mx-auto mt-8"}>
          Add Exercise
        </ButtonAdd>
        <div className="mt-10">
          {exercises.length > 0 && (
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
            onClick={handleDiscard}
            bg={"bg-gradient-to-l from-red-400/80 to-red-400 text-neutral-800"}
            classes={"mx-auto block mt-2"}
          >
            Discard Workout
          </Button>
        </div>
      </Main>
      <Footer />
    </div>
  );
}

export { Workout };
