import { useWorkoutsStore } from "../stores/workoutsStore";

export const useWorkouts = () => useWorkoutsStore((state) => state.workouts);
export const useAddWorkout = () =>
  useWorkoutsStore((state) => state.addWorkout);
export const useDeleteWorkout = () =>
  useWorkoutsStore((state) => state.deleteWorkout);
export const useLoadWorkouts = () =>
  useWorkoutsStore((state) => state.loadWorkouts);
