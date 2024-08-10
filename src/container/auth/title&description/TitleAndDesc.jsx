import React from "react";
import HeaderStyle from "../../../Utils/HeaderStyle";
import FooterStyle from "../../../Utils/FooterStyle";
import {
  arrow_back,
  format_bold,
  format_italic,
  format_list_bulleted,
  format_list_numbered,
  format_underlined,
} from "../../../assets/Allimages";

const TitleAndDesc = () => {
  return (
    <div className="flex flex-col gap-20">
      <HeaderStyle
        h1Text={`Have you completed any projects during your academic tenure?`}
        h3Text={`We can give you better advice and guidance if we know.`}
      />
      <div className="xl:h-[700px] flex flex-col items-center justify-between">
        <div className="w-96 md:w-[556px] xl:w-[746px] h-80 flex flex-col gap-8">
          <div>
            <input
              type="text"
              placeholder="School / University name"
              className="w-full h-14 border border-gray-300 rounded-lg px-4 text-gray-900 focus:outline-none focus:border-gray"
            />
          </div>
          <div className="w-full gap-4 h-44 border border-gray-300 rounded-lg  text-gray-900  focus:border-gray flex flex-col">
            <div className="w-full gap-6 h-14 bg-[#DCDFE4] bg-opacity-30 border flex items-center">
              <img src={format_bold} alt="" className="" />
              <img src={format_italic} alt="" className="" />
              <img src={format_underlined} alt="" className="" />
              <img src={format_list_bulleted} alt="" className="" />
              <img src={format_list_numbered} alt="" className="" />
            </div>
            <input
              type="text"
              placeholder="Add description here"
              className=" focus:outline-none mx-4"
            />
          </div>
        </div>
        <div>
          <div className="w-96 md:w-[556px] xl:w-[746px]  gap-4 flex  justify-center">
            <div className="w-14 h-11 rounded flex items-center justify-center bg-[#F1F2F4]">
              <img src={arrow_back} alt="" className="w-6 h-6 " />
            </div>

            <div className="w-full flex flex-col gap-4">
              <div className="w-full h-11 rounded bg-[#3366FF] flex items-center justify-center">
                <button className="font-sans font-semibold text-sm text-center text-[#FFFFFF]">
                  SAVE AND CONTINUE
                </button>
              </div>
              <div className="w-full h-11 rounded bg-[#D6E4FF4D] b flex items-center justify-center">
                <button className="font-sans font-semibold text-sm text-center text-[#3366FF]">
                  SKIP AND CONTINUE
                </button>
              </div>
            </div>
          </div>

          <div className="my-10 xl:mt-28">
            <h3 className="font-mono font-normal text-xs xl:text-base tracking-normal text-center text-[#737B7D]">
              © Copyright 2022-2023 · e2c ®· All Rights Reserved
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TitleAndDesc;
