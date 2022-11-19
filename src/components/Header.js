import React, { useState } from "react";
import Hamburger from "hamburger-react";
import { NavLink } from "react-router-dom";

// icons
import { CiSearch } from "react-icons/ci";
import { AiOutlineUser } from "react-icons/ai";
import { BsCart } from "react-icons/bs";
import { FaRegSmileWink } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";

import logo from "../assets/images/logo.png";

// data
import { topMenuLinks, menuLinks } from "../data/dummyData";

function Header() {
  const [isOpen, setOpen] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const showMenuHandler = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header>
      <div className="h-16 bg-[#4942a2] flex gap-2 items-center justify-between px-5 py-4 lg:hidden relative">
        <img src={logo} alt="roxo logo" />
        <div className="flex flex-1 items-center justify-end gap-2 text-3xl text-[#C4C2DD]">
          <CiSearch className="font-extrabold" />
          <AiOutlineUser />
          <BsCart />
        </div>
        <div className="text-[#c4c2dd]">
          <Hamburger
            toggled={isOpen}
            toggle={setOpen}
            onToggle={showMenuHandler}
          />
          {showMenu && (
            <div className="absolute w-screen h-[calc(100vh-64px)] bg-white top-16 right-0"></div>
          )}
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
          <div className="flex items-center justify-center gap-1 text-[#fba60a] text-sm">
            <FaRegSmileWink className="text-xl" />
            <span>تخفیف امروز</span>
          </div>
        </div>
      </div>
      <div className="hidden lg:flex bg-[#4942a2]  px-8 items-center justify-center">
        <div className="w-full max-w-screen-xl flex items-center justify-between gap-3">
          <img src={logo} alt="roxo logo" className="w-20 h-6" />
          <div className="flex flex-1">
            <ul className="flex items-center">
              {menuLinks.map((item, index) => (
                <li
                  key={index}
                  className="text-[#c4c2dd] relative hover:text-white py-4 px-2 group"
                >
                  <NavLink>{item.title}</NavLink>
                  {item.links.length > 0 && (
                    <ul className="absolute bg-white w-[170%] p-4 shadow top-14 right-0 z-10 hidden group-hover:block">
                      {item.links.map((item, index) => (
                        <li
                          key={index}
                          className="text-[#37287b] text-sm mb-2 hover:mr-2 hover:text-[#39196c] cursor-pointer"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center text-2xl text-[#c4c2dd]">
            <div className="w-9 h-9 rounded-full ml-1 bg-[#37287b] flex items-center justify-center cursor-pointer text-[#c4c2dd]">
              <CiSearch className="text-2xl" />
            </div>
            <div className="flex items-center justify-center rounded-tl-md rounded-tr-md w-12 h-9 hover:bg-[#37287b]">
              <div className="flex items-end">
                <BsCart />
              </div>
            </div>
            <NavLink className="w-32 h-8 border border-[#c4c2dd] rounded-sm flex text-sm items-center gap-1 justify-center hover:text-white mr-2">
              <AiOutlineUser size={22} />
              <span>ورود | ثبت نام</span>
            </NavLink>
            {/* <div className="flex items-center justify-center rounded-tl-md rounded-tr-md w-12 h-9 hover:bg-[#37287b]">
              <div className="flex items-end">
                <IoMdArrowDropdown className="text-sm" />
                <AiOutlineUser />
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
