import { create } from "zustand";

export const useWorkoutsStore = create((set) => ({
  workouts: [
    {
      id: 1,
      title: "My Workout",
      duration: 40,
      exercises: [
        {
          id: 1,
          title: "Bench Press",
          sets: [
            {
              id: 1,
              weight: 50,
              reps: 10,
              check: true,
            },
            {
              id: 2,
              weight: 50,
              reps: 8,
              check: true,
            },
            {
              id: 3,
              weight: 40,
              reps: 12,
              check: false,
            },
          ],
        },
        {
          id: 2,
          title: "Lat Pulldown",
          sets: [
            {
              id: 1,
              weight: 30,
              reps: 12,
              check: false,
            },
            {
              id: 2,
              weight: 30,
              reps: 10,
              check: false,
            },
            {
              id: 3,
              weight: 30,
              reps: 8,
              check: false,
            },
          ],
        },
      ],
    },
  ],

  addWorkout: (workout) =>
    set((state) => {
      return (state.workouts = [...state.workouts, workout]);
    }),
}));
