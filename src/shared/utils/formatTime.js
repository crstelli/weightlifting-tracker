function formatTime(seconds) {
  return `${String(Math.trunc(seconds / 60)).padStart(2, 0)}:${String(seconds % 60).padStart(2, 0)}`;
}

export { formatTime };
