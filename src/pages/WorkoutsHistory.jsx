import { Link } from "react-router";

import { ButtonAdd } from "../components/ButtonAdd";
import { Main } from "../components/Main";
import { Navbar } from "../components/Navbar";
import { WorkoutsList } from "../components/WorkoutsList";

import { Footer } from "../components/Footer";

function WorkoutsHistory() {
  return (
    <div>
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

export { WorkoutsHistory };
