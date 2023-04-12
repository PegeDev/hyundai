import React from "react";

function Product() {
  const product = [
    {
      title: "STARGAZER",
      img: "https://dealermobilhyundai.id/wp-content/uploads/2022/07/Stargazer-Putih_480.webp",
    },
    {
      title: "SANTA FE",
      img: "https://dealermobilhyundai.id/wp-content/uploads/elementor/thumbs/magnetic-force-p6hjl1i7ycvv95or8hgv4y67ogulr1hsa0mwfmbgsu.png",
    },
    {
      title: "PALISADE",
      img: "https://dealermobilhyundai.id/wp-content/uploads/2021/03/white-cream_9-768x389.png",
    },
    {
      title: "CRETA",
      img: "https://dealermobilhyundai.id/wp-content/uploads/2021/11/su2id-dragon_0-768x576.jpg",
    },
    {
      title: "IONIQ 5",
      img: "https://dealermobilhyundai.id/wp-content/uploads/2022/04/wtw_27.webp",
    },
    {
      title: "STARIA",
      img: "https://dealermobilhyundai.id/wp-content/uploads/2021/08/Silver-768x312.jpg",
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
              className="object-contain w-[400px] h-[200px] "
              src={val.img}
              alt={val.title}
            />
            <div className="w-full flex flex-col items-center">
              <span className="font-poppins font-semibold sm:text-[32px] text-slate-800">
                {val.title}
              </span>
              <button className="bg-gradient-to-t from-slate-800 to-white/10 bg-slate-800 shadow-sm select-none px-4 py-2 text-sm max-w-xs font-semibold text-white rounded-sm">
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Product;
