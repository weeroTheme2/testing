import React, { useEffect, useRef, useState } from 'react';
import { MdAccountCircle, MdKeyboardArrowDown } from 'react-icons/md';
import { Link } from "react-router-dom";
import Container from '../../../Component/Container';
import List from '../../../Component/List';
import ListItem from '../../../Component/ListItem';
import { BsChevronCompactDown, BsFillHeartFill } from 'react-icons/bs';
import { FaShoppingBasket } from 'react-icons/fa';
import { AiOutlineCaretRight, AiOutlineMenu } from 'react-icons/ai';
import { HiMail } from 'react-icons/hi';
import Drowpdown2 from './Drowpdown2';
import Inputbox from '../../../Component/Inputbox';

const Slider = () => {
    let [show, setShow] = useState(false);
    let [userDown, setuserDown] = useState(false);
    let [slider, setSlider] = useState(false);
    let [shopDropDown, setShopDropDown] = useState(false);
    let ref = useRef();
    let userRef = useRef();
    let shopRef = useRef();
    useEffect(() => {
      document.body.addEventListener("click", (e) => {
        if (ref.current?.contains(e.target)) {
          console.log(e.target)
          setShow(true);
        } else {
          setShow(false);
        }
  
        if (userRef.current?.contains(e.target)) {
          setuserDown(true);
        } else {
          setuserDown(false);
        }
        if (shopRef.current?.contains(e.target)) {
          setShopDropDown(true);
        } else {
          setShopDropDown(false);
        }
      });
    }, []);
  
    return (
      <div className='w-full transition duration-500'>
            
      <Container>
        <div className="flex flex-col justify-around font-dm border-t w-full  transition duration-300">
        <Drowpdown2 togolref={ref} className="z-[115] bg-white hover:bg-indigo-50 relative cursor-pointer">
            <div className="flex justify-between cursor-pointer p-2  border-b">
              <h1>Categories</h1>
              <AiOutlineCaretRight />
            </div>
  
            {show && (
              <List className="absolute left-[230px] top-0  bg-white  w-[100%] ">
                <ListItem className="pb-2  border-b pl-4 hover:bg-indigo-50">Bekery</ListItem>
                <ListItem className="pb-2  border-b pl-4 py-2 hover:bg-indigo-50">Bread</ListItem>
                <ListItem className="pb-2  border-b pl-4 py-2 hover:bg-indigo-50">
                  Custom cakes
                </ListItem>
                <ListItem className="pb-2  border-b pl-4 py-2 hover:bg-indigo-50">Candy</ListItem>
                <ListItem className="pb-2  border-b pl-4 py-2 hover:bg-indigo-50">Coffee</ListItem>
                <ListItem className="pb-2  border-b pl-4 py-2 hover:bg-indigo-50">
                  Dairy & Eggs
                </ListItem>
                <ListItem className="pb-2  border-b pl-4 py-2 hover:bg-indigo-50">
                  Fresh produce
                </ListItem>
                <ListItem className="pb-2  border-b pl-4 py-2 hover:bg-indigo-50">Frozen</ListItem>
                <ListItem className="pb-2  border-b pl-4 py-2 hover:bg-indigo-50">
                  Meat & Fish
                </ListItem>
                <ListItem className="pb-2  border-b pl-4 py-2 hover:bg-indigo-50">
                  Organic Foods
                </ListItem>
                <ListItem className="pb-2  border-b pl-4 py-2 hover:bg-indigo-50">Snacks</ListItem>
              </List>
            )}
          </Drowpdown2>

          <div className='z-[115] bg-white '>

            <List className="flex flex-col w-full">
              <ListItem className="p-2 border-b w-full hover:bg-indigo-50">
                <Drowpdown2
                  togolref={userRef}
                  className="relative cursor-pointer flex"
                >
                  <div className='flex justify-between w-full '>
                  <h1>Home</h1>
                  <AiOutlineCaretRight />
                  </div>
                  {userDown && (
                    <List className="absolute left-[221px] bottom-[-90px] lg:bottom-[-100px] w-full bg-white z-10">
                      <Link to='/'><ListItem className="pb-2  border-b pl-4 py-2 hover:bg-indigo-50">Home-1</ListItem></Link>
                      <ListItem className="pb-2  border-b pl-4 py-2 hover:bg-indigo-50">Home-2</ListItem>
                    </List>
                  )}
                </Drowpdown2>
              </ListItem>
              <ListItem className="flex justify-between items-center hover:bg-indigo-50 cursor-pointer p-2 border-b">
                <Link to="/about">About</Link>
              </ListItem>
              <ListItem className="flex justify-between items-center hover:bg-indigo-50 cursor-pointer p-2 border-b">
                <Link to="/shop">Shop</Link>
              </ListItem>
              <Link to='/blog'>
              <ListItem className="flex justify-between items-center hover:bg-indigo-50 cursor-pointer p-2 border-b">
                Blog
              </ListItem>
              </Link>
              <ListItem className="flex justify-between items-center hover:bg-indigo-50 cursor-pointer p-2 border-b">
                <Link to="/contact">Contact</Link>
              </ListItem>
              <ListItem className="flex justify-between items-center hover:bg-indigo-50 cursor-pointer p-2 border-b">
                <Link to="/cheakOut">CheakOut</Link>
              </ListItem>
            </List>
          </div>
          
        </div>
      </Container>

          </div>
    );
};

export default Slider;