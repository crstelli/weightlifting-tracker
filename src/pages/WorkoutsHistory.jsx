import { Link } from "react-router";

import { ButtonAdd } from "../components/ButtonAdd";
import { Main } from "../components/Main";
import { Navbar } from "../components/Navbar";
import { WorkoutsList } from "../components/WorkoutsList";

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
    </div>
  );
}

export { WorkoutsHistory };
