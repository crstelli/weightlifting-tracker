import { create } from "zustand";
import { supabase } from "../../../supabase";

export const useWorkoutsStore = create((set) => ({
  workouts: [],

  addWorkout: (workout) =>
    set((state) => {
      async function fetchWorkout() {
        const { data: user } = await supabase.auth.getUser();
        const id = user.user.id;

        const { error } = await supabase
          .from("workouts")
          .insert([{ workout, userUUID: id, id: workout.id }]);

        if (error) throw error;
      }

      fetchWorkout();
      return (state.workouts = [...state.workouts, workout]);
    }),

  deleteWorkout: (workoutId) =>
    set((state) => {
      async function fetchWorkout() {
        const { error } = await supabase
          .from("workouts")
          .delete()
          .eq("id", workoutId);

        if (error) throw error;
      }
      fetchWorkout();
      return (state.workouts = state.workouts.filter(
        (wk) => wk.id !== workoutId,
      ));
    }),

  loadWorkouts: (workouts) =>
    set((state) => {
      if (!workouts) return (state.workouts = []);

      return (state.workouts = [...workouts]);
    }),
}));
