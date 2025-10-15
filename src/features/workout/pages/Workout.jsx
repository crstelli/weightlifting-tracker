import { useEffect } from "react";
import { useNavigate } from "react-router";

import {
  useAddExercise,
  useExercises,
  useReset,
  useWorkout,
  useIncrementTime,
} from "../hooks/useWorkout";
import { useAddWorkout } from "../../home/hooks/useWorkouts";

import { Navbar } from "../../../shared/ui/Navbar";
import { Main } from "../../../shared/ui/Main";
import { Footer } from "../../../shared/ui/Footer";
import { ButtonAdd } from "../../../shared/ui/ButtonAdd";

import { Title } from "../components/Title";
import { ExercisesList } from "../components/ExercisesList";
import { Actions } from "../components/Actions";

function Workout() {
  const navigate = useNavigate();

  const exercises = useExercises();
  const workout = useWorkout();
  const reset = useReset();

  const incrementTime = useIncrementTime();

  const addWorkout = useAddWorkout();
  const addExercise = useAddExercise();

  function handleFinish() {
    const newWorkout = {
      id: workout.id,
      title: workout.title,
      exercises: [...workout.exercises],
      duration: Math.trunc(workout.duration / 60),
    };

    addWorkout(newWorkout);

    navigate("/home");
    reset();
  }

  function handleDiscard() {
    navigate("/home");
    reset();
  }

  useEffect(() => {
    const timer = setInterval(incrementTime, 1000);

    return () => clearInterval(timer);
  }, [incrementTime]);

  return (
    <div className="relative min-h-screen pb-10">
      <Navbar />
      <Main>
        <Title />
        <ExercisesList exercises={exercises} />
        <ButtonAdd onClick={() => addExercise()} classes={"mx-auto mt-8"}>
          Add Exercise
        </ButtonAdd>
        <Actions
          exercisesLength={exercises.length}
          onFinish={handleFinish}
          onDiscard={handleDiscard}
          duration={workout.duration}
        />
      </Main>
      <Footer />
    </div>
  );
}

export { Workout };
