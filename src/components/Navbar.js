import React from "react";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="flex justify-between items-center h-20 max-w-[screen.width] mx-auto px-4 text-black ">
      <h1 className="w-full text-2xl font-bold-italic  text-[#78bb7b]">
        REACT
      </h1>
      <ul className=" text-white hidden md:flex">
        <li className="p-4">Home</li>
        <li className="p-4">Discover</li>
        <li className="p-4">Account</li>
        <li className="p-4">Profile</li>
        <li className="p-4">Sign-in</li>
      </ul>
      <div className="text-white block md:hidden" onClick={handleNav}>
        {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        className={
          !nav
            ? "fixed left-0 top-0 w-[35%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <h1 className="w-full p-3 text-2xl font-bold-italic text-[#78bb7b]">
          REACT
        </h1>
        <ul className="p-4 text-white teuppercase">
          <li className="p-4 border-b border-gray-500">Home</li>
          <li className="p-4 border-b border-gray-500">Discover</li>
          <li className="p-4 border-b border-gray-500">Account</li>
          <li className="p-4 border-b border-gray-500">Profile</li>
          <li className="p-4">Sign-in</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
