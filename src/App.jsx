import { Routes, Route } from "react-router-dom";
import Home from "./Views/Home";
import Supply from "./Views/Supply";
import Install from "./Views/Install";
import Portfolio from "./Views/Portfolio";
import About from "./Views/About";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/supply" element={<Supply />} />
        <Route exact path="/install" element={<Install />} />
        <Route exact path="/portfolio" element={<Portfolio />} />
        <Route exact path="/about" element={<About />} />
      </Routes>
    </>
  );
};

export default App;
