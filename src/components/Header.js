import React, { useState } from "react";
import Hamburger from "hamburger-react";

// icons
import { CiSearch } from "react-icons/ci";
import { AiOutlineUser } from "react-icons/ai";
import { BsCart } from "react-icons/bs";
import { FaRegSmileWink } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";

import logo from "../assets/images/logo.png";

// data
import { topMenuLinks } from "../data/dummyData";

function Header() {
  const [isOpen, setOpen] = useState(false);
  const [effect, setEffect] = useState(false);

  return (
    <header>
      <div className="h-16 bg-[#4942a2] flex gap-2 items-center justify-between px-5 py-4 lg:hidden">
        <img src={logo} alt="roxo logo" />
        <div className="flex flex-1 items-center justify-end gap-2 text-3xl text-[#C4C2DD]">
          <CiSearch className="font-extrabold" />
          <AiOutlineUser />
          <BsCart />
        </div>
        <div className="text-[#c4c2dd]">
          <Hamburger toggled={isOpen} toggle={setOpen} />
        </div>
      </div>
      <div className="hidden h-11 bg-[#37287b] lg:flex px-8 py-2 items-center justify-center">
        <div className="max-w-screen-xl w-full flex items-center justify-between">
          <ul className="flex items-center gap-4 text-[#8781a9] text-xs">
            {topMenuLinks.map((item, index) => (
              <li key={index} className="cursor-pointer">
                {item}
              </li>
            ))}
          </ul>
          <div className="flex items-center justify-center gap-1 text-[#fba60a]">
            <FaRegSmileWink className="text-2xl" />
            <span>تخفیف امروز</span>
          </div>
        </div>
      </div>
      <div className="hidden lg:flex bg-[#4942a2] py-4 px-8 items-center justify-center">
        <div className="w-full max-w-screen-xl flex items-center justify-between gap-4">
          <img src={logo} alt="roxo logo" className="w-20 h-6" />
          <div className="flex flex-1"></div>
          <div className="flex items-center text-2xl text-[#c4c2dd]">
            <div className="w-9 h-9 rounded-full ml-1 bg-[#37287b] flex items-center justify-center cursor-pointer text-[#c4c2dd]">
              <CiSearch className="text-2xl" />
            </div>
            <div className="flex items-center justify-center rounded-tl-md rounded-tr-md w-12 h-9 hover:bg-[#37287b]">
              <div className="flex items-end">
                <BsCart />
              </div>
            </div>
            <div className="flex items-center justify-center rounded-tl-md rounded-tr-md w-12 h-9 hover:bg-[#37287b]">
              <div className="flex items-end">
                <IoMdArrowDropdown className="text-sm" />
                <AiOutlineUser />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
