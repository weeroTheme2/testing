import React from "react";
import Container from "./Container";
import Images from "./Images";

const Service = () => {
  return (
    <Container>
      <div className="flex justify-between mt-16">
        <div className="flex items-center gap-3 ">
          <div>
            <Images
              imgsrc="../../public/assets/bag.png"
              className="h-[40px] "
            />
          </div>
          <div>
            <h1 className="text-[#2a4352] text-2xl font-dm font-bold">
              Feature
            </h1>
            <p className="text-[#959595]">Fresh Grocery Delivered</p>
          </div>
        </div>
        <div className="flex items-center gap-3 ">
          <div>
            <Images imgsrc="../../public/assets/2.png" className="h-[40px] " />
          </div>
          <div>
            <h1 className="text-[#2a4352] text-2xl font-dm font-bold">
              Quialty
            </h1>
            <p className="text-[#959595]">Fresh Grocery Delivered</p>
          </div>
        </div>
        <div className="flex items-center gap-3 ">
          <div>
            <Images
              imgsrc="../../public/assets/shopping.png"
              className="h-[40px] "
            />
          </div>
          <div>
            <h1 className="text-[#2a4352] text-2xl font-dm font-bold">
              Best Price
            </h1>
            <p className="text-[#959595]">Fresh Grocery Delivered</p>
          </div>
        </div>
        <div className="flex items-center gap-3 ">
          <div>
            <Images
              imgsrc="../../public/assets/farm.png"
              className="h-[40px] "
            />
          </div>
          <div>
            <h1 className="text-[#2a4352] text-2xl font-dm font-bold">
              Organic
            </h1>
            <p className="text-[#959595]">Fresh Grocery Delivered</p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Service;
