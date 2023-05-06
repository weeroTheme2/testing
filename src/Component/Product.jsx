import React from "react";
import Batch from "./Batch";
import {Link} from "react-router-dom";
import Images from "./Images";
import Flex from "./Flex";
import { GiSelfLove } from "react-icons/gi";
import { SiConvertio } from "react-icons/si";
import { FiShoppingBag } from "react-icons/fi";

const Product = ({ imgsrc, batch, path }) => {
  return (
    <>
      <div className="group relative w-full h-full overflow-hidden ">
        <Images imgsrc={imgsrc} />
        {batch && (
          <Batch
            className="absolute top-5 left-5 bg-primery py-2 px-8 font-dm text-sm text-white"
            item="New"
          />
        )}
        <div className="absolute  bottom-[-50%] w-full  bg-primery px-[30px] py-6 font-bold transition-all delay-100 group-hover:bottom-0 text-white">
        {
            path === '/wishlist'? <Link to='/cheakOut'><Flex className="flex items-center  justify-end  gap-4">
            <div>CheckOut</div>
            <FiShoppingBag className="text-white" />
          </Flex></Link> : <Flex className="flex items-center  justify-end  gap-4">
            <div>Add to wishlist</div>
            <FiShoppingBag className="text-white" />
          </Flex>
          }
          <Flex className=" my-5 flex items-center justify-end  gap-4">
            <div>Compare</div>
            <SiConvertio />
          </Flex>
          {
            path === '/cart'? <Link to='/cheakOut'><Flex className="flex items-center  justify-end  gap-4">
            <div>CheckOut</div>
            <FiShoppingBag className="text-white" />
          </Flex></Link> : <Flex className="flex items-center  justify-end  gap-4">
            <div>Add to Cart</div>
            <FiShoppingBag className="text-white" />
          </Flex>
          }
        </div>
      </div>
      <div className=" w-full bg-white py-5">
        <h2 className="text-[#262626 ] flex justify-between font-dm text-xl font-bold text-[#262626]">
          Basic Crew Neck Tee<span className="text-[#767676]">$44.00</span>
        </h2>
        <p className="mt-5 text-base">Black</p>
      </div>
    </>
  );
};

export default Product;