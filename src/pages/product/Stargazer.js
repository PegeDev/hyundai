import React from "react";
import Navbar from "../../components/Navbar";
import Tentang from "../../components/Tentang";
import { Helmet } from "react-helmet";
import StargazerBanner from "../../assets/images/stargazer/stargazer-banner.webp";
import Interior1 from "../../assets/images/stargazer/interior-1.webp";
import Interior2 from "../../assets/images/stargazer/interior-2.webp";
import Interior3 from "../../assets/images/stargazer/interior-3.jpg";
import Interior4 from "../../assets/images/stargazer/interior-4.jpg";
import Interior5 from "../../assets/images/stargazer/interior-5.webp";
import Smartsense1 from "../../assets/images/stargazer/smartsense-1.jpg";
import Smartsense2 from "../../assets/images/stargazer/smartsense-2.jpg";
import Smartsense3 from "../../assets/images/stargazer/smartsense-3.webp";
import Smartsense4 from "../../assets/images/stargazer/smartsense-4.jpg";
import Highlight1 from "../../assets/images/stargazer/highlight-1.webp";
import Highlight2 from "../../assets/images/stargazer/highlight-2.webp";
import Highlight3 from "../../assets/images/stargazer/highlight-3.webp";
function Stargazer() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Stargazer - Dealer Mobil Hyundai Jakarta Center</title>
        <link rel="canonical" href={window.location.href} />
        <meta name="description" content="Dapatkan Penawaran Terbaik Disini" />
        <meta
          name="og:title"
          content="Stargazer - Dealer Mobil Hyundai Jakarta Center"
        />
        <meta
          name="og:description"
          content="Dapatkan Penawaran Terbaik Disini"
        />
        <meta name="og:image" content={StargazerBanner} />
      </Helmet>
      <div className="w-full overflow-x-hidden no-scrollbar">
        <div className="">
          <Navbar />
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="w-full h-[500px] overflow-hidden">
            <img
              loading="lazy"
              src={StargazerBanner}
              alt="banner"
              className="object-cover w-full h-full object-center"
            />
          </div>
        </div>
        <div className="container flex flex-col items-center justify-center mx-auto my-8 space-y-16 ">
          <div className="flex flex-col items-center justify-center ">
            <div className="sm:w-[80%] w-full px-4  space-y-4  flex flex-col items-center justify-center">
              <h2 className="font-poppins text-center text-slate-700 font-semibold text-[32px]">
                BINTANG BARU KELUARGA
              </h2>
              <div className="w-full h-full">
                <img
                  loading="lazy"
                  className="block w-full h-full object-cover object-center"
                  src={Interior1}
                  alt="interior-1"
                />
              </div>
              <div className="grid sm:grid-cols-2 grid-cols-1 gap-4 w-full h-full">
                <div className="w-full">
                  <img
                    loading="lazy"
                    className="block w-full h-full  object-cover object-center"
                    src={Interior2}
                    alt="interior-2"
                  />
                </div>
                <div className="w-full">
                  <img
                    loading="lazy"
                    className="block w-full h-full  object-cover object-center"
                    src={Interior3}
                    alt="interior-3"
                  />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 grid-cols-1 gap-4 w-full h-full">
                <div className="w-full">
                  <img
                    loading="lazy"
                    className="block w-full h-full  object-cover object-center"
                    src={Interior4}
                    alt="interior-4"
                  />
                </div>
                <div className="w-full">
                  <img
                    loading="lazy"
                    className="block w-full h-full  object-cover object-center"
                    src={Interior5}
                    alt="interior-5"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="sm:w-[80%] w-full px-4  space-y-4  flex flex-col items-center justify-center">
            <h2 className="font-poppins text-center text-slate-700 font-semibold text-[32px]">
              Hyundai SmartSense
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full h-full">
              <div className="w-full">
                <img
                  loading="lazy"
                  className="block w-full h-full  object-cover object-center"
                  src={Smartsense1}
                  alt="SmartSense - 1"
                />
              </div>
              <div className="w-full">
                <img
                  loading="lazy"
                  className="block w-full h-full  object-cover object-center"
                  src={Smartsense2}
                  alt="SmartSense - 2"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full h-full">
              <div className="w-full">
                <img
                  loading="lazy"
                  className="block w-full h-full  object-cover object-center"
                  src={Smartsense3}
                  alt="SmartSense - 3"
                />
              </div>
              <div className="w-full">
                <img
                  loading="lazy"
                  className="block w-full h-full  object-cover object-center"
                  src={Smartsense4}
                  alt="SmartSense - 4"
                />
              </div>
            </div>
          </div>
          <div className="sm:w-[80%] w-full px-4  space-y-4  flex flex-col items-center justify-center">
            <div className="w-full space-y-4 ">
              <img
                loading="lazy"
                className="block w-full h-full  object-cover object-center"
                src={Highlight1}
                alt="Highlight - 1"
              />
              <img
                loading="lazy"
                className="block w-full h-full  object-cover object-center"
                src={Highlight2}
                alt="Highlight - 2"
              />
              <img
                loading="lazy"
                className="block w-full h-full  object-cover object-center"
                src={Highlight3}
                alt="Highlight - 3"
              />
            </div>
          </div>
          <div className="w-[80%] h-full flex items-center justify-center">
            <iframe
              className="h-full w-full aspect-video"
              src="https://www.youtube.com/embed/1ZBegsXhRGQ"
              title="Hyundai STARGAZER - Bintang Baru Keluarga"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <div className="">
          <Tentang />
        </div>
      </div>
    </>
  );
}

export default Stargazer;
