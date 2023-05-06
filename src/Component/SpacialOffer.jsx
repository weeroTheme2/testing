import React from "react";
import Container from "./Container";
import Titel from "./Titel";
import Product from "./Product";
import { BsArrowRightCircle, BsArrowLeftCircle } from "react-icons/bs";

import Slider from "react-slick";
const SpacialOffer = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          centerMode: true,
          centerPadding: "110px",
        },
      },
    ],
  };
  const slider = React.useRef(null);

  return (
    <>
      <Container>
        <div className="relative mt-8 lg:mt-32">
          <Titel titel="Spacial Offer" />
          <button onClick={() => slider?.current?.slickNext()}>
            <BsArrowRightCircle className=" absolute top-[220%] right-0 z-10 h-[64px] w-[64px] rounded-full bg-[#f2f3f4] text-sm  text-[#7e7e7e] hover:bg-primery hover:text-white transition ease-in-out delay-150  " />
          </button>
          <button onClick={() => slider?.current?.slickPrev()}>
            <BsArrowLeftCircle className=" absolute top-[220%] left-[-2%] z-20 h-[64px] w-[64px] rounded-full bg-[#f2f3f4] text-sm  text-[#7e7e7e] hover:bg-primery hover:text-white transition ease-in-out delay-150" />
          </button>
        </div>
        <Slider ref={slider} {...settings}>
          <div className="max-w-[370px]  h-[400px]">
            <Product imgsrc="assets/Nido.jpg" batch={true} />
          </div>
          <div className="max-w-[370px] h-[400px]">
            <Product imgsrc="assets/6-865x1024.jpg" />
          </div>
          <div className="max-w-[370px] h-[400px]">
            <Product imgsrc="assets/befff-865x1024.jpg" batch={true} />
          </div>
          <div className="max-w-[370px] h-[400px]">
            <Product imgsrc="assets/dorits.png" />
          </div>
          <div className="max-w-[370px] h-[400px]">
            <Product imgsrc="assets/product-10-865x1024.jpg" />
          </div>
        </Slider>
      </Container>
    </>
  );
};

export default SpacialOffer;
