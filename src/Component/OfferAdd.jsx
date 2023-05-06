import React from "react";
import Container from "./Container";
import Images from "./Images";

const OfferAdd = () => {
  return (
    <Container>
      <div className="flex justify-between mt-6 cursor-pointer">
        <div>
          <Images
            imgsrc="../../public/assets/add1.png"
            className="rounded-lg"
          />
        </div>
        <div>
          <Images
            imgsrc="../../public/assets/add2.png"
            className="rounded-lg"
          />
        </div>
        <div>
          <Images
            imgsrc="../../public/assets/add3.png"
            className="rounded-lg"
          />
        </div>
      </div>
    </Container>
  );
};

export default OfferAdd;
