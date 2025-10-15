function Modal({ children }) {
  return (
    <div className="absolute top-0 left-0 z-100 min-h-full w-full overflow-y-scroll py-10 backdrop-blur-md backdrop-brightness-70">
      {children}
    </div>
  );
}

export { Modal };
