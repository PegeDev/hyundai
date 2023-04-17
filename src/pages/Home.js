import React from "react";
import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";
import Product from "../components/Product";
import Promo from "../components/Promo";
import Galery from "../components/Galery";
import Tentang from "../components/Tentang";
import { Helmet } from "react-helmet";

function Home() {
  console.log(document.description);
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Dealer Mobil Hyundai Jakarta Center</title>
        <link rel="canonical" href={window.location.href} />
        <meta name="description" content="Dapatkan Penawaran Terbaik Disini" />
        <meta name="og:title" content="Dealer Mobil Hyundai Jakarta Center" />
        <meta
          name="og:description"
          content="Dapatkan Penawaran Terbaik Disini"
        />
        <meta name="og:image" content="/favicon.ico" />
      </Helmet>
      <div className="w-full flex flex-col overflow-x-hidden no-scrollbar">
        <Navbar />
        <div id="home" className="max-w-full h-screen">
          <Carousel />
        </div>
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
    </>
  );
}

export default Home;
