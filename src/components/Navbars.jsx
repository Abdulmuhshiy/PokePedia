import { Navbar } from "flowbite-react";
import { Link, useLocation } from "react-router-dom";

const Navbars = () => {
  const location = useLocation();

  return (
    <Navbar rounded className="shadow-md">
      <Navbar.Brand as={Link} to="/">
        <img src="https://www.pngplay.com/wp-content/uploads/10/Pokemon-Free-PNG.png" className="mr-3 h-6 sm:h-9" alt="Poke Pedia Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Poke Pedia</span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link as={Link} to="/" active={location.pathname === "/"}>
          Home
        </Navbar.Link>
        <Navbar.Link as={Link} to="/rating" active={location.pathname === "/rating"}>
          Rating
        </Navbar.Link>
        <Navbar.Link as={Link} to="/about" active={location.pathname === "/about"}>
          About
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navbars;
