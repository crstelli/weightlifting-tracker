import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

function findExercise(state, exerciseId) {
  return state.exercises.find((ex) => ex.id === exerciseId);
}

function findSet(state, exerciseId, setId) {
  return findExercise(state, exerciseId).sets.find((s) => s.id === setId);
}

export const useWorkoutStore = create(
  immer((set) => ({
    id: Date.now(),
    title: "My New Workout",
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
          {
            id: 4,
            weight: 30,
            reps: 8,
            check: false,
          },
        ],
      },
    ],

    // Workout Logic
    setTitle: (value) =>
      set((state) => {
        state.title = value;
      }),

    reset: () => {
      set(() => ({
        id: Date.now(),
        title: "My New Workout",
        exercises: [],
      }));
    },

    // Exercise Logic
    addExercise: () =>
      set((state) => {
        const newExercise = {
          id: Date.now(),
          title: "New Exercise",
          sets: [
            {
              id: 1,
              weight: 0,
              reps: 0,
              check: false,
            },
            {
              id: 2,
              weight: 0,
              reps: 0,
              check: false,
            },
            {
              id: 3,
              weight: 0,
              reps: 0,
              check: false,
            },
          ],
        };

        state.exercises.push(newExercise);
      }),

    editExerciseTitle: (exerciseId, value) =>
      set((state) => {
        findExercise(state, exerciseId).title = value;
      }),

    // Set Logic
    changeWeight: (setId, exerciseId, value) =>
      set((state) => {
        const set = findSet(state, exerciseId, setId);
        set.weight = value;
      }),

    changeReps: (setId, exerciseId, value) =>
      set((state) => {
        const set = findSet(state, exerciseId, setId);
        set.reps = value;
      }),

    checkSet: (setId, exerciseId) =>
      set((state) => {
        const set = findSet(state, exerciseId, setId);
        set.check = !set.check;
      }),

    addSet: (exerciseId) => {
      set((state) => {
        const newSet = {
          id: Date.now(),
          weight: 0,
          reps: 0,
          check: false,
        };

        findExercise(state, exerciseId).sets.push(newSet);
      });
    },

    deleteSet: (setId, exerciseId) =>
      set((state) => {
        const exercise = findExercise(state, exerciseId);
        exercise.sets = exercise.sets.filter((s) => s.id !== setId);
      }),
  })),
);
