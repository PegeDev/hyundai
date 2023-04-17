import { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Error404 from "./pages/Error404";
import Promo from "./pages/Promo";

import AOS from "aos";
import "aos/dist/aos.css";
import Stargazer from "./pages/product/Stargazer";
import SantaFe from "./pages/product/SantaFe";
import Palisade from "./pages/product/Palisade";
import Creta from "./pages/product/Creta";
import Ioniq5 from "./pages/product/Ioniq-5";
import Staria from "./pages/product/Staria";
function App() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/promo" element={<Promo />} />
        <Route path="/product/stargazer" element={<Stargazer />} />
        <Route path="/product/santa-fe" element={<SantaFe />} />
        <Route path="/product/palisade" element={<Palisade />} />
        <Route path="/product/creta" element={<Creta />} />
        <Route path="/product/ioniq-5" element={<Ioniq5 />} />
        <Route path="/product/staria" element={<Staria />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </Router>
  );
}

export default App;
