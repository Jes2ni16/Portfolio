import Training from "./Training";
import Home from "./Home";
import UserList from "./Skills";
import Projects from "./Projects";

function HomeLayout() {
  return (
    <>
      <div className="md:px-16 px-4">
        <Home />
        <Training />
        <UserList />
        <Projects />
      </div>
    </>
  );
}

export default HomeLayout;
