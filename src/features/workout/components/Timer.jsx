import { formatTime } from "../../../shared/utils/formatTime";

function Timer({ time }) {
  return <p className="text-center text-xl font-thin">{formatTime(time)}</p>;
}

export { Timer };
