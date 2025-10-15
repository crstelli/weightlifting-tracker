import { Link } from "react-router";

import { WorkoutsList } from "../components/WorkoutsList";

import { Navbar } from "../../../shared/ui/Navbar";
import { Main } from "../../../shared/ui/Main";
import { Footer } from "../../../shared/ui/Footer";
import { ButtonAdd } from "../../../shared/ui/ButtonAdd";

function Home() {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <Main>
        <WorkoutsList />
        <Link to="/workout">
          <ButtonAdd classes={"mx-auto mt-8"}>New workout</ButtonAdd>
        </Link>
      </Main>
      <Footer />
    </div>
  );
}

export { Home };
