import React from "react";
import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";
import Product from "../components/Product";
import Promo from "../components/Promo";
import Galery from "../components/Galery";
import Tentang from "../components/Tentang";

function Home() {
  return (
    <div className="w-full flex flex-col overflow-x-hidden no-scrollbar">
      <Navbar />
      <div className="max-w-full h-screen">
        <Carousel />
      </div>
      {/* <div className="max-w-full select-none">
        <Hero />
      </div> */}
      <div className="space-y-8 ">
        <div
          id="produk"
          className="px-4  w-full flex flex-col items-start justify-start"
        >
          <Product />
        </div>
        <div
          id="promo"
          className="px-4   w-full flex flex-col items-start justify-start"
        >
          <Promo />
        </div>
        <div className=" w-full flex flex-col items-start justify-start">
          <Galery />
        </div>
        <div className="">
          <Tentang />
        </div>
      </div>
    </div>
  );
}

export default Home;
