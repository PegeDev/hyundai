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
function App() {
  useEffect(() => {
    document.title = "Dealer Mobil Hyundai";
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
        <Route path="*" element={<Error404 />} />
      </Routes>
    </Router>
  );
}

export default App;
