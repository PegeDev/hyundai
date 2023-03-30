import { useEffect } from "react";
import "./App.css";
import Carousel from "./components/Carousel";
import Galery from "./components/Galery";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Product from "./components/Product";
import Promo from "./components/Promo";
import Tentang from "./components/Tentang";

function App() {
  useEffect(() => {
    document.title = "Dealer Mobil Hyundai";
  }, []);
  return (
    <div className="w-full flex flex-col overflow-x-hidden">
      <Navbar />
      <div className="max-w-full h-[550px] ">
        <Carousel />
      </div>
      <div className="max-w-full select-none">
        <Hero />
      </div>
      <div className="space-y-8">
        <div className="">
          <Product />
        </div>
        <div className="">
          <Promo />
        </div>
        <div className="">
          <Galery />
        </div>
        <div className="">
          <Tentang />
        </div>
      </div>
    </div>
  );
}

export default App;
