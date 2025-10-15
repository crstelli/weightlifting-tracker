import { Timer } from "./Timer";
import { Button } from "../../../shared/ui/Button";

function Actions({ exercisesLength, onFinish, onDiscard, duration }) {
  return (
    <div className="mt-10">
      <Timer time={duration} />
      {exercisesLength > 0 && (
        <Button
          onClick={onFinish}
          bg={
            "bg-gradient-to-l from-green-400/80 to-green-400 text-neutral-800"
          }
          classes={"mx-auto block "}>
          Finish Workout
        </Button>
      )}

      <Button
        onClick={onDiscard}
        bg={"bg-gradient-to-l from-red-400/80 to-red-400 text-neutral-800"}
        classes={"mx-auto block mt-2"}>
        Discard Workout
      </Button>
    </div>
  );
}

export { Actions };
