import React from "react";
import StargazerImg from "../assets/images/stargazer.webp";
import SantaImg from "../assets/images/santa-fe.png";
import PalisadeImg from "../assets/images/palisade.png";
import CretaImg from "../assets/images/creta-product.jpg";
import IoniqImg from "../assets/images/ioniq-5.webp";
import StariaImg from "../assets/images/staria.jpg";

function Product() {
  const product = [
    {
      title: "STARGAZER",
      path: "/product/stargazer",
      img: StargazerImg,
    },
    {
      title: "SANTA FE",
      path: "/product/santa-fe",
      img: SantaImg,
    },
    {
      title: "PALISADE",
      path: "/product/palisade",
      img: PalisadeImg,
    },
    {
      title: "CRETA",
      path: "/product/creta",
      img: CretaImg,
    },
    {
      title: "IONIQ 5",
      path: "/product/ioniq-5",
      img: IoniqImg,
    },
    {
      title: "STARIA",
      path: "/product/staria",
      img: StariaImg,
    },
  ];
  return (
    <div className="w-full flex flex-col items-center justify-center my-16 container mx-auto">
      <div
        data-aos="zoom-in"
        className="mb-8 flex flex-col items-center justify-center"
      >
        <h1 className="font-poppins font-semibold text-[46px] text-slate-800">
          Product
        </h1>
        <div className="border-slate-800 w-[70%] h-full border-b-4 rounded-full" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {product.map((val, i) => (
          <div
            data-aos="fade-left"
            key={i}
            className="border-2 rounded-lg w-full  py-4"
          >
            <img
              loading="lazy"
              className="object-contain w-[400px] h-[200px] "
              src={val.img}
              alt={val.title}
            />
            <div className="w-full flex flex-col items-center">
              <span className="font-poppins font-semibold sm:text-[32px] text-slate-800">
                {val.title}
              </span>
              <button className="bg-gradient-to-t from-slate-800 to-white/10 bg-slate-800 shadow-sm select-none px-4 py-2 text-sm max-w-xs font-semibold text-white rounded-sm">
                <a href={val.path}>Read More</a>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Product;
