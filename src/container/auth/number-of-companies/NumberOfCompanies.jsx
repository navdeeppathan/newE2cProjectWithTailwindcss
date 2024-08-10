import React, { useState } from "react";
import HeaderStyle from "../../../Utils/HeaderStyle";
import { arrow_back } from "../../../assets/Allimages";
import Num from "./Number";

const NumberOfCompanies = () => {
  const [isClicked, setIsClicked] = useState(null);
  const handleClick = (buttonId) => {
    setIsClicked(buttonId);
  };
  return (
    <div>
      <HeaderStyle
        h1Text={`How many companies have you been a part of 
throughout your career`}
        h3Text={`We can give you better advice and guidance if we know.`}
      />
      <div className="h-[643px] flex flex-col items-center justify-between mt-40">
        <div className="flex items-center justify-center gap-4">
          {Num.map((digit) => (
            <div
              key={digit.id}
              className={`w-14 h-14 rounded-full border flex items-center justify-center border-[#DCDFE4] ${
                isClicked === digit.id ? "bg-[#3366FF]" : "bg-none"
              }`}
              onClick={() => handleClick(digit.id)}
            >
              <h2
                className={`font-sans font-bold text-xl text-center text-[#172B4D] ${
                  isClicked === digit.id ? "text-[#FFFFFF]" : "text-[#172B4D]"
                }`}
              >
                {digit.num}
              </h2>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-center">
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
          <div className="my-10 xl:mt-36">
            <h3 className="font-mono font-normal text-xs xl:text-base tracking-normal text-center text-[#737B7D]">
              © Copyright 2022-2023 · e2c ®· All Rights Reserved
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NumberOfCompanies;
