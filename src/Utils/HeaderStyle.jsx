import React from "react";
import { E2Cimg, userImg } from "../assets/Allimages";

const HeaderStyle = ({ h1Text, h3Text }) => {
  return (
    <div>
      <div className="flex items-center justify-center xl:justify-start py-4 xl:py-0 xl:mx-48">
        <img src={E2Cimg} alt="" className="w-36 h-16" />
      </div>
      <hr className="w-full bg-[#DCDFE4] xl:hidden" />
      <div className="flex flex-col items-center justify-center gap-5">
        <div className="mt-6 xl:mt-0 xl:w-36 xl:h-36 rounded-full border-8 border-[#D7F5FF]">
          <img
            src={userImg}
            alt=""
            className=" w-28 h-28 xl:w-32 xl:h-32 rounded-full object-cover"
          />
        </div>
        <div className="w-80 md:w-[556px] xl:w-[746px]">
          <h2 className="font-sans font-bold text-3xl text-[#172B4D] text-center mb-4">
            {h1Text}
          </h2>
          <h3 className="font-sans font-semibold text-xl text-[#8590A2] text-center">
            {h3Text}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default HeaderStyle;
