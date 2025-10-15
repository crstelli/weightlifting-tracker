import { Exercise } from "./Exercise";

function ExercisesList({ exercises }) {
  return (
    <div className="mx-auto w-[90%] max-w-[500px] min-w-[300px]">
      {exercises.map((ex) => (
        <Exercise key={ex.id} id={ex.id} title={ex.title} sets={ex.sets} />
      ))}
    </div>
  );
}

export { ExercisesList };
