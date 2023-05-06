import React, { useRef, useState, useEffect } from "react";
import Images from "./Images";
import Container from "./Container";
import List from "./List";
import ListItem from "./ListItem";
import { MdAccountCircle } from "react-icons/md";
import { BsFillHeartFill } from "react-icons/bs";
import { FaShoppingBasket } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { BsChevronCompactDown } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
import { MdKeyboardArrowDown } from "react-icons/md";
import { HiMail } from "react-icons/hi";
import Inputbox from "./Inputbox";
import { Link } from "react-router-dom";
import Dropdown from "./DropDown";

const Navbar = () => {
  let [show, setShow] = useState(false);
  let [userDown, setuserDown] = useState(false);
  let [shopDropDown, setShopDropDown] = useState(false);
  let ref = useRef();
  let userRef = useRef();
  let shopRef = useRef();
  useEffect(() => {
    document.body.addEventListener("click", (e) => {
      if (ref.current.contains(e.target)) {
        setShow(true);
      } else {
        setShow(false);
      }

      if (userRef.current.contains(e.target)) {
        setuserDown(true);
      } else {
        setuserDown(false);
      }
      if (shopRef.current.contains(e.target)) {
        setShopDropDown(true);
      } else {
        setShopDropDown(false);
      }
    });
  }, []);

  return (
    <>
      <div className="flex justify-between  bg-primery text-white  px-3 py-2 font-dm">
        <div className="flex gap-x-3">
          <p>Buy one get one free for frist order</p>
          <span>|</span>
          <Link to="/trackOrder">
            <p>Track your Order </p>
          </Link>
        </div>
        <div className="flex gap-x-3">
          <Link to="/wishlist">
            <p>Whisch List</p>
          </Link>
          <Link to="/cheakOut">
            <p>CheakOut</p>
          </Link>
        </div>
      </div>
      <Container>
        <div className="flex justify-between items-center py-4">
          <div>
            <Images imgsrc="../public/assets/Logo.png" />
          </div>
          <div className="flex items-center w-[400px] relative">
            <Inputbox
              type="text"
              className="border w-full  py-2 px-5 rounded-xl relative"
              placeholder="Search your product"
            />
            <AiOutlineSearch className="text-sm text-gray-300 rounded-2xl  w-10 h-10 absolute top-0 right-0" />
          </div>
          <div>
            <List className="flex gap-x-5 font-dm">
              <ListItem>
                <MdAccountCircle className="text-xl text-[#555555]  w-8 h-8" />
              </ListItem>
              <ListItem>
                <BsFillHeartFill className="text-xl text-[#555555]  w-8 h-8" />
              </ListItem>
              <ListItem>
                <FaShoppingBasket className="text-xl text-[#555555]  w-8 h-8" />
              </ListItem>
            </List>
          </div>
        </div>
        <div className="flex items-center justify-around font-dm border-t-2">
          <Dropdown togolref={ref} className="z-50 relative">
            <div className="flex justify-center gap-x-4 items-center bg-primery text-white my-3   p-3 rounded-lg">
              <AiOutlineMenu />
              <h1>Browse for All Categories</h1>
              <BsChevronCompactDown />
            </div>
            {show && (
              <List className="absolute bg-white w-[100%] ">
                <ListItem className="pb-2  border-b pl-4 ">Bekery</ListItem>
                <ListItem className="pb-2  border-b pl-4 mt-2">Bread</ListItem>
                <ListItem className="pb-2  border-b pl-4 mt-2">
                  Custom cakes
                </ListItem>
                <ListItem className="pb-2  border-b pl-4 mt-2">Candy</ListItem>
                <ListItem className="pb-2  border-b pl-4 mt-2">Coffee</ListItem>
                <ListItem className="pb-2  border-b pl-4 mt-2">
                  Dairy & Eggs
                </ListItem>
                <ListItem className="pb-2  border-b pl-4 mt-2">
                  Fresh produce
                </ListItem>
                <ListItem className="pb-2  border-b pl-4 mt-2">Frozen</ListItem>
                <ListItem className="pb-2  border-b pl-4 mt-2">
                  Meat & Fish
                </ListItem>
                <ListItem className="pb-2  border-b pl-4 mt-2">
                  Organic Foods
                </ListItem>
                <ListItem className="pb-2  border-b pl-4 mt-2">Snacks</ListItem>
              </List>
            )}
          </Dropdown>

          <div>
            <List className="flex items-center gap-x-4">
              <ListItem className="flex items-center">
                <Dropdown
                  togolref={userRef}
                  className="relative flex items-center"
                >
                  <Link to="/">Home</Link>
                  <MdKeyboardArrowDown />
                  {userDown && (
                    <List className="absolute  bottom-[-100px] bg-white z-10 p-4 w-[150px]">
                     <Link to="/home-2"> <ListItem className="border-b pb-2">Home2</ListItem></Link>
                      <ListItem className=" mb-2 pt-2">Home3</ListItem>
                    </List>
                  )}
                </Dropdown>
              </ListItem>
              <ListItem className="flex items-center">
                <Link to="/about">About</Link> <MdKeyboardArrowDown />
              </ListItem>
              <ListItem className="flex items-center">
                <Link to="/shop">Shop</Link> <MdKeyboardArrowDown />
              </ListItem>
              <ListItem className="flex items-center">
                <Link to="/blog">Blog</Link> <MdKeyboardArrowDown />
              </ListItem>
              <ListItem className="flex items-center">
                <Link to="/contact">Contact</Link> <MdKeyboardArrowDown />
              </ListItem>
            </List>
          </div>
          <div className="flex items-center gap-x-4">
            <HiMail className="w-8 h-8 text-green-600" />
            <div>
              <p>Email Us:</p>
              <p>yourdomain@gmail.com</p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Navbar;
