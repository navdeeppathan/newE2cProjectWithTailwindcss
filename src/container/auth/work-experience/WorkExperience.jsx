import React, { useState } from "react";
import {
  arrow_back,
  E2Cimg,
  person,
  person2,
  student,
  student2,
  userImg,
} from "../../../assets/Allimages";

const WorkExperience = () => {
  const [isClicked, setIsClicked] = useState(null);
  const handleClick = (buttonId) => {
    setIsClicked(buttonId);
  };
  return (
    <div>
      <div className="flex items-center justify-center xl:justify-start py-4 xl:py-0 xl:mx-48">
        <img src={E2Cimg} alt="" className="w-36 h-16" />
      </div>
      <hr className="w-full bg-[#DCDFE4] xl:hidden" />
      <div className=" flex flex-col items-center justify-between">
        <div className=" h-[798px] xl:h-[643px] flex flex-col items-center gap-10">
          <div className="my-4 xl:my-0 xl:w-36 xl:h-36 rounded-full border-8 border-[#D7F5FF]">
            <img
              src={userImg}
              alt=""
              className=" w-28 h-28 xl:w-32 xl:h-32 rounded-full object-cover"
            />
          </div>
          <div className="w-80 md:w-[556px] xl:w-[1128px]">
            <h2 className="font-sans font-bold text-3xl text-[#172B4D] text-center">
              Fantastic to meet you
              <span className="text-[#3366FF]"> Jessica</span> !!
            </h2>
            <h2 className="font-sans font-bold text-3xl text-[#172B4D] text-center mb-4">
              Take a moment to reveal your experience level
            </h2>
            <h3 className="font-sans font-semibold text-xl text-[#8590A2] text-center">
              Tell your experience level and let us unlock the doors to your
              professional journey.
            </h3>
          </div>
          <div className="w-[593px] my-8 gap-6 xl:gap-0 xl:my-16 flex flex-col xl:flex-row items-center justify-between">
            <div
              className={`w-72 h-18 border-2 flex items-center rounded-lg gap-10 ${
                isClicked === 1 ? "border-blue-500" : "border-2"
              } `}
              onClick={() => handleClick(1)}
            >
              <div className="w-14 h-14 bg-[#CBBDFF] bg-opacity-60 rounded flex items-center justify-center">
                <img src={student} alt="" className="w-10 h-10" />
              </div>
              <h3 className="font-sans font-semibold text-xl text-center">
                I am a fresher
              </h3>
            </div>
            <div
              className={`w-72 h-18 border-2 flex items-center rounded-lg gap-10 ${
                isClicked === 2 ? "border-blue-500" : "border-2"
              } `}
              onClick={() => handleClick(2)}
            >
              <div className="w-14 h-14 bg-[#D6E4FF]  rounded flex items-center justify-center">
                <img src={person2} alt="" className="w-10 h-10" />
              </div>
              <h3 className="font-sans font-semibold text-xl text-center">
                I am experienced
              </h3>
            </div>
          </div>
        </div>
        <div>
          <div className="w-80 md:w-[556px] xl:w-[744px] px-6 gap-4 flex items-center justify-center">
            <div className="w-14 h-11 rounded flex items-center justify-center bg-[#F1F2F4]">
              <img src={arrow_back} alt="" className="w-6 h-6 " />
            </div>
            <div
              className={`w-full h-11 rounded bg-[#3366FF] flex items-center justify-center
              ${isClicked ? "bg-opacity-100" : "bg-opacity-50"}
              `}
            >
              <button className="font-sans font-semibold text-sm text-center text-[#FFFFFF]">
                SAVE AND CONTINUE
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="my-10 xl:mt-36">
        <h3 className="font-mono font-normal text-xs xl:text-base tracking-normal text-center text-[#737B7D]">
          © Copyright 2022-2023 · e2c ®· All Rights Reserved
        </h3>
      </div>
    </div>
  );
};

export default WorkExperience;
