import { useWorkoutStore } from "../stores/WorkoutStore";

export const useWorkout = () => useWorkoutStore((state) => state);

export const useTitle = () => useWorkoutStore((state) => state.title);
export const useSetTitle = () => useWorkoutStore((state) => state.setTitle);

export const useExercises = () => useWorkoutStore((state) => state.exercises);
export const useAddExercise = () =>
  useWorkoutStore((state) => state.addExercise);

export const useChangeWeight = () =>
  useWorkoutStore((state) => state.changeWeight);
export const useChangeReps = () => useWorkoutStore((state) => state.changeReps);

export const useCheckSet = () => useWorkoutStore((state) => state.checkSet);
export const useDeleteSet = () => useWorkoutStore((state) => state.deleteSet);
export const useAddSet = () => useWorkoutStore((state) => state.addSet);
