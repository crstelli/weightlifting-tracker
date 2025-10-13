function Navbar() {
  return (
    <div className="w-full bg-neutral-900 text-white">
      <nav className="mx-auto flex w-full max-w-[1000px] justify-between px-4 py-2">
        <h1 className="text-xl font-semibold">Workout Tracker</h1>
        <ul className="flex items-center gap-4">
          <NavItem>Home</NavItem>
          <NavItem>Workout</NavItem>
          <NavItem>Settings</NavItem>
        </ul>
      </nav>
    </div>
  );
}

function NavItem({ children }) {
  return <li>{children}</li>;
}

export { Navbar };
