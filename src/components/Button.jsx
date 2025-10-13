function Button({ children, onClick, classes, bg = "" }) {
  return (
    <button
      onClick={onClick}
      className={`cursor-pointer rounded-md px-4 py-1 font-semibold ${classes} ${bg || "bg-neutral-900 text-white"}`}
    >
      {children}
    </button>
  );
}

export { Button };
