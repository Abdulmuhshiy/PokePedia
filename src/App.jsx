import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavbarFooter from "./components/NavbarFooter";
import Home from "./pages/Home";
import Ratings from "./pages/Ratings";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "react-toastify/dist/ReactToastify.css";
import About from "./pages/About";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavbarFooter />}>
            <Route index element={<Home />} />
            <Route path="rating" element={<Ratings />} />
            <Route path="about" element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
