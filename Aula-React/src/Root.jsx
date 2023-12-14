import { Outlet, Link } from "react-router-dom";


function Header() {
    return (
      <header>
        <nav>
        <Link to={"/"}>Home</Link>
        <Link to={"/about"}>Sobre</Link>
        </nav>
      </header>
    );
  }

function Root() {
  return (
  <>
        <Header />
      <Outlet />
      </>
  );
}


export default Root;