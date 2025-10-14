function Modal({ children }) {
  return (
    <div className="absolute top-0 left-0 h-full w-full backdrop-blur-md backdrop-brightness-70">
      {children}
    </div>
  );
}

export { Modal };
