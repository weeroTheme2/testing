import React from "react";
import Images from "./Images";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
  };
  return (
    <>
      <div className="relative App"></div>
      <Slider {...settings}>
        <div className="relative">
          <Images imgsrc="../../public/assets/slide1.jpg" className="w-full " />
          <div className="w-[450px] h-[250px] z-50 bg-[rgb(43,170,57)] text-white font-dm absolute top-1/2 rounded-br-[150px] -translate-y-1/2 right-10">
            <p className="text-base mt-6 ml-4 p-1 rounded-md bg-green-800 inline-block">
              Bring Nature
            </p>
            <h1 className="font-dm text-4xl py-5  font-extrabold ml-4">
              Dont Miss Amazing Grocery Deals.{" "}
            </h1>
            <button className="bg-[#0c8f38] ml-4 px-6 py-2 rounded-3xl hover:bg-[white] hover:text-[#1d1c1c] text-base transition ease-in-out delay-150 text-white">
              Shop Now
            </button>
          </div>
        </div>
        <div className="relative">
          <Images imgsrc="../../public/assets/slide2.jpg" className="w-full " />
          <div className="w-[450px] h-[250px] z-50 bg-[rgb(43,170,57)] text-white font-dm absolute top-1/2 rounded-br-[150px] -translate-y-1/2 right-10">
            <p className="text-base mt-6 ml-4 p-1 rounded-md bg-green-800 inline-block">
              Bring Nature
            </p>
            <h1 className="font-dm text-4xl py-5  font-extrabold ml-4">
              Dont Miss Amazing Grocery Deals.{" "}
            </h1>
            <button className="bg-[#0c8f38] ml-4 px-6 py-2 rounded-3xl hover:bg-[white] hover:text-[#1d1c1c] text-base transition ease-in-out delay-150 text-white">
              Shop Now
            </button>
          </div>
        </div>
      </Slider>
    </>
  );
};

export default Banner;
