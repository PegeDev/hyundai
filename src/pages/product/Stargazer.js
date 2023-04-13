import React from "react";
import Navbar from "../../components/Navbar";
import Tentang from "../../components/Tentang";

function Stargazer() {
  return (
    <div className="w-full overflow-x-hidden no-scrollbar">
      <div className="">
        <Navbar />
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="w-full h-[500px] overflow-hidden">
          <img
            src="https://dealermobilhyundai.id/wp-content/uploads/2022/07/D_Home-Banner-1860-x-720.webp"
            alt="banner"
            className="object-cover w-full h-full object-center"
          />
        </div>
      </div>
      <div className="container flex flex-col items-center justify-center mx-auto my-8 space-y-16 ">
        <div className="flex flex-col items-center justify-center ">
          <div className="w-[60%]  space-y-4  flex flex-col items-center justify-center">
            <h2 className="font-poppins text-center text-slate-700 font-semibold text-[32px]">
              BINTANG BARU KELUARGA
            </h2>
            <div className="w-full h-full">
              <img
                className="block w-full h-full object-cover object-center"
                src="https://dealermobilhyundai.id/wp-content/uploads/2022/07/Highlight_Bintang-Baru-Keluarga_1-Kolom_1120x600_PC-1.webp"
                alt=""
              />
            </div>
            <div className="grid grid-cols-2 gap-4 w-full h-full">
              <div className="w-full">
                <img
                  className="block w-full h-full  object-cover object-center"
                  src="https://dealermobilhyundai.id/wp-content/uploads/2022/07/Highlight_Wireless-Charger_2-Kolom_544x360-scaled-1.webp"
                  alt=""
                />
              </div>
              <div className="w-full">
                <img
                  className="block w-full h-full  object-cover object-center"
                  src="https://dealermobilhyundai.id/wp-content/uploads/2022/07/Highlight_TFT-Color-LCD-Cluster_2-Kolom_544x360-scaled-1.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 w-full h-full">
              <div className="w-full">
                <img
                  className="block w-full h-full  object-cover object-center"
                  src="https://dealermobilhyundai.id/wp-content/uploads/2022/07/Highlight_Seat-Back-Table_2-Kolom_544x360-scaled-1.jpg"
                  alt=""
                />
              </div>
              <div className="w-full">
                <img
                  className="block w-full h-full  object-cover object-center"
                  src="https://dealermobilhyundai.id/wp-content/uploads/2022/07/Highlight_8-inch-Display-Audio_2-Kolom_544x360_2-scaled-1.webp"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-[60%]  space-y-4  flex flex-col items-center justify-center">
          <h2 className="font-poppins text-center text-slate-700 font-semibold text-[32px]">
            Hyundai SmartSense
          </h2>
          <div className="grid grid-cols-2 gap-4 w-full h-full">
            <div className="w-full">
              <img
                className="block w-full h-full  object-cover object-center"
                src="https://dealermobilhyundai.id/wp-content/uploads/2022/07/Highlight_Hyundai-Smartsense_RCCA_2-Kolom_544x360-scaled-1.jpg"
                alt=""
              />
            </div>
            <div className="w-full">
              <img
                className="block w-full h-full  object-cover object-center"
                src="https://dealermobilhyundai.id/wp-content/uploads/2022/07/Highlight_Hyundai-Smartsense_LKA_2-Kolom_544x360-scaled-1.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 w-full h-full">
            <div className="w-full">
              <img
                className="block w-full h-full  object-cover object-center"
                src="https://dealermobilhyundai.id/wp-content/uploads/2022/07/Highlight_Hyundai-Smartsense_FCA_2-Kolom_544x360-scaled-1.webp"
                alt=""
              />
            </div>
            <div className="w-full">
              <img
                className="block w-full h-full  object-cover object-center"
                src="https://dealermobilhyundai.id/wp-content/uploads/2022/07/Highlight_Hyundai-Smartsense_BCA_2-Kolom_544x360-scaled-1.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="w-[60%]  space-y-4  flex flex-col items-center justify-center">
          <div className="w-full space-y-4 ">
            <img
              className="block w-full h-full  object-cover object-center"
              src="https://dealermobilhyundai.id/wp-content/uploads/2022/07/Highlight_Hyundai-Bluelink_1-Kolom_1120x600_PC-1-1024x549.webp"
              alt=""
            />
            <img
              className="block w-full h-full  object-cover object-center"
              src="https://dealermobilhyundai.id/wp-content/uploads/2022/07/Highlight_Bintangnya-Perlindungan_1-Kolom_1120x600_PC-1024x549.webp"
              alt=""
            />
            <img
              className="block w-full h-full  object-cover object-center"
              src="https://dealermobilhyundai.id/wp-content/uploads/2022/07/Highlight_Pesan-Hyundai-Stargazer_1-Kolom_1120x600_PC-1024x549.webp"
              alt=""
            />
          </div>
        </div>
        <div className="w-[80%] h-full flex items-center justify-center">
          <iframe
            className="block h-[630px] w-full"
            src="https://www.youtube.com/embed/1ZBegsXhRGQ"
            title="Hyundai STARGAZER - Bintang Baru Keluarga"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <div className="">
        <Tentang />
      </div>
    </div>
  );
}

export default Stargazer;
