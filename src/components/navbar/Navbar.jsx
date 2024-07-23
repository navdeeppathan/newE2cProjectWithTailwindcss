import React, { useRef, useState } from "react";
import {
  arrow,
  E2Cimg,
  menuBtnOpen,
  menuClose,
} from "../../assets/Allimages.jsx";
import { Link } from "react-router-dom";

function Navbar() {
  const menuRef = useRef();
  const openMenu = () => {
    menuRef.current.style.right = "0";
  };
  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  };

  return (
    <div>
      <div className="flex  xl:flex-row items-center justify-between pt-6 pb-6 px-20  md:px-28 xl:px-40">
        <div>
          <img src={E2Cimg} alt="Logo" className="w-32 h-auto" />
        </div>
        <img
          src={menuBtnOpen}
          onClick={openMenu}
          alt="Open Menu"
          className="block w-8 h-8 xl:hidden cursor-pointer"
        />
        <div className="hidden xl:flex items-center gap-4 mt-4 xl:mt-0">
          <div>
            <Link to="/login">
              <button className="px-8 py-2 text-[#3366ff] border border-[#84a9ff] rounded-3xl bg-transparent text-base">
                Login
              </button>
            </Link>
          </div>
          <div>
            <button className="flex items-center gap-4 px-8 py-2 border border-[#84a9ff] rounded-3xl bg-[#3366ff] text-white text-base">
              Create free resume
              <img src={arrow} alt="arrow" className="w-4 h-auto mr-2" />
            </button>
          </div>
        </div>
      </div>
      <div
        className="xl:hidden fixed flex flex-col items-start top-0 gap-5 bg-white w-[350px] h-full z-50 transition-right duration-500 right-[-350px]"
        ref={menuRef}
      >
        <img
          src={menuClose}
          onClick={closeMenu}
          alt="Close Menu"
          className="block xl:hidden cursor-pointer mt-8 ml-[290px] w-6 h-6"
        />
        <div className="flex flex-col items-start gap-4 mt-10 ml-8">
          <Link to="/login">
            <button className="px-8 py-2 text-[#3366ff] border border-[#84a9ff] rounded-3xl bg-transparent text-base">
              Login
            </button>
          </Link>
          <button className="flex items-center gap-4 px-8 py-2 border border-[#84a9ff] rounded-3xl bg-[#3366ff] text-white text-base">
            Create free resume
            <img src={arrow} alt="arrow" className="w-4 h-auto mr-2" />
          </button>
        </div>
      </div>
      <hr className="w-full bg-[#dcdfe4]" />
    </div>
  );
}

export default Navbar;
